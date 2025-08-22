import ollama
import re

class SynsaiLLM:
    def __init__(self, company):
        self.credibility_reasonings = []
        self.referential_reasonings = []
        self.compliance_reasonings = []
        self.company = company
        self.project_contexts = []

    def _load_bpi_context(self):
        """Load BPI context from the text file."""
        try:
            with open('BPI_context.txt', 'r', encoding='utf-8') as f:
                return f.read()
        except Exception as e:
            print(f"Warning: Could not load BPI context: {str(e)}")
            return ""

    def project_recommendation(self, page):
        """
        Generate project recommendations based on the provided context page.
        Returns a tuple of (title, description)
        """
        if not page or 'context' not in page:
            return "Error: No content provided", "No content available for project recommendation"

        # Load BPI context
        bpi_context = self._load_bpi_context()
        
        prompt = f"""
        Based on the following context about {self.company}, please provide a collaborative project recommendation
        that highlights how BPI (Bank of the Philippine Islands) can work with {self.company} to create mutual value.
        
        About BPI:
        {bpi_context}
        
        About {self.company}:
        {page.get('context', 'No context')}

        
        Please provide:
        1. A single, most promising collaborative project idea
        2. A detailed description including:
           - Clear explanation of how both companies will collaborate
           - Specific contributions and expertise from each company
           - Project goals and objectives that benefit both parties
           - Key features and functionality
           - Mutual benefits for both companies
           - Estimated implementation complexity (Low/Medium/High)
           - Potential challenges and mitigation strategies
        
        Format your response as follows:
        TITLE: [Project Title Here]
        DESCRIPTION: [Detailed description here]
        
        Make sure to explicitly mention:
        - How our expertise complements {self.company}'s capabilities
        - Specific ways we will work together
        - How the collaboration creates value that wouldn't be possible independently
        """

        try:
            response = ollama.chat(
                model='llama2',
                messages=[{
                    'role': 'user',
                    'content': prompt,
                }]
            )
            
            # Parse the response to extract title and description
            content = response['message']['content'].strip()
            
            # Initialize with default values
            title = "Project Recommendation"
            description = content  # Use full content as fallback
            
            # Try different patterns to extract title
            if 'Title:' in content:
                # Try to extract title if it's in the format "Title: ..."
                title = content.split('Title:')[1].split('\n')[0].strip()
            elif '\n' in content:
                # Use first line as title if it's not too long
                first_line = content.split('\n')[0].strip()
                if len(first_line) < 100:  # Reasonable title length
                    title = first_line
            
            # Clean up the title
            title = title.replace('TITLE:', '').replace('Title:', '').strip()
            if title.startswith('"') and title.endswith('"'):
                title = title[1:-1]  # Remove quotes if present
            
            return title, description
            
        except Exception as e:
            error_msg = f"Error generating project recommendations: {str(e)}"
            print(error_msg)
            return "Error", error_msg

    def get_company_score(self, page, criteria):
        """Get a score based on the given page and criteria."""
        if not page:
            return 0.0

        # Format the single page's context
        formatted_context = "\n".join([
            f"Title: {page.get('title', 'No title')}",
            f"URL: {page.get('url', 'No URL')}",
            f"Term: {page.get('term', 'N/A')}",
            "",
            page.get('content', 'No content'),
            "\n" + ("=" * 50) + "\n"
        ])

        prompt = f"""
        
        Analyze the following information about {self.company} and provide a {criteria} score from 0.0 to 1.0.

        Context:
        {formatted_context}

        Return ONLY a number between 0.0 and 1.0, where:
        - 0.0 = Very poor
        - 0.5 = Neutral
        - 1.0 = Excellent

        Score: 
        
        """

        try:
            score_response = ollama.chat(
                model='llama2',
                messages=[{
                    'role': 'user',
                    'content': prompt,
                }]
            )

            print(prompt)

            score_text = score_response['message']['content'].strip()
            score = float(re.search(r'[0-9]*\.?[0-9]+', score_text).group())

            reason_response = ollama.chat(
                model='llama2',
                messages=[
                    {'role': 'assistant', 'content': score_response['message']['content']},
                    {'role': 'user', 'content': f'Why did you give this score, based on the {criteria} criteria?'}
                ]
            )

            reason_text = reason_response['message']['content'].strip()

            if criteria == 'credibility':
                self.credibility_reasonings.append(reason_text)
            elif criteria == 'referential':
                self.referential_reasonings.append(reason_text)
            elif criteria == 'compliance':
                self.compliance_reasonings.append(reason_text)

            return max(0.0, min(1.0, score))  
            
        except Exception as e:
            print(f"Error getting {criteria} score: {str(e)}")  
            return 0.0


    def company_score_reasoning(self, criteria):
        if criteria == 'credibility':
            reasonings = '\n'.join(self.credibility_reasonings) if self.credibility_reasonings else 'No credibility reasonings available.'
            reason_response = ollama.chat(
                model='llama2',
                messages=[
                    {'role': 'assistant', 'content': reasonings},   
                    {'role': 'user', 'content': f'Summarize the reasonings in cohesive bullet points based on the {criteria} criteria. Answer directly, no unnecessary introductions. Strictly Do not mention any score.'}
                ]
            )
        elif criteria == 'referential':
            reasonings = '\n'.join(self.referential_reasonings) if self.referential_reasonings else 'No referential reasonings available.'
            reason_response = ollama.chat(
                model='llama2',
                messages=[
                    {'role': 'assistant', 'content': reasonings},
                    {'role': 'user', 'content': f'Summarize the reasonings in cohesive bullet points based on the {criteria} criteria. Answer directly, no unnecessary introductions. Strictly Do not mention any score.'}
                ]
            )
        elif criteria == 'compliance':
            reasonings = '\n'.join(self.compliance_reasonings) if self.compliance_reasonings else 'No compliance reasonings available.'
            reason_response = ollama.chat(
                model='llama2',
                messages=[
                    {'role': 'assistant', 'content': reasonings},
                    {'role': 'user', 'content': f'Summarize the reasonings in cohesive bullet points based on the {criteria} criteria. Answer directly, no unnecessary introductions. Strictly Do not mention any score.'}
                ]
            )

        return reason_response['message']['content'].strip()