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
        Generate three unique project recommendations based on the provided context page.
        Returns a list of tuples containing (title, description) for each recommendation.
        """
        if not page or 'context' not in page:
            return [("Error: No content provided", "No content available for project recommendation")] * 3

        # Load BPI context
        bpi_context = self._load_bpi_context()
        
        prompt = f"""
        You are an expert in creating strategic banking partnerships. 
        
        TASK: Create THREE detailed project recommendations for collaboration between BPI (Bank of the Philippine Islands) and {self.company}.
        
        IMPORTANT REQUIREMENTS:
        - Focus ONLY on collaboration between BPI and {self.company}
        - Do NOT mention any other banks or financial institutions
        - Each recommendation MUST include BOTH a title and a detailed description
        - Descriptions should be comprehensive and specific
        
        CONTEXT:
        About BPI (Bank of the Philippine Islands):
        {bpi_context}
        
        About {self.company}:
        {page.get('context', 'No context')}

        For EACH recommendation, you MUST include:
        1. A clear, specific title (max 10 words)
        2. A detailed description (at least 3-5 sentences) covering:
           - How BPI and {self.company} will collaborate
           - Specific contributions from each company
           - Project goals and benefits
           - Implementation approach
           - Expected outcomes
        
        RESPONSE FORMAT - YOU MUST FOLLOW THIS EXACT FORMAT:
        
        TITLE 1: [Concise project title]
        DESCRIPTION 1: [Detailed description with specific details about the collaboration between BPI and {self.company}]
        
        TITLE 2: [Concise project title]
        DESCRIPTION 2: [Detailed description with specific details about the collaboration between BPI and {self.company}]
        
        TITLE 3: [Concise project title]
        DESCRIPTION 3: [Detailed description with specific details about the collaboration between BPI and {self.company}]
        
        REMEMBER:
        - Be specific and concrete in your descriptions
        - Focus on mutual benefits for both BPI and {self.company}
        - Include implementation details
        - Each recommendation should be distinct and valuable
        """

        try:
            response = ollama.chat(
                model='llama2',
                messages=[{
                    'role': 'user',
                    'content': prompt,
                }]
            )
            
            content = response['message']['content'].strip()
            recommendations = []
            
            # Parse the response to extract all three recommendations
            for i in range(1, 4):
                title = f"Project Recommendation {i}"
                description = f"Description not available for project {i}"
                
                # Try to extract title
                title_pattern = f"TITLE {i}:(.*?)(?=DESCRIPTION {i}:|\n\n|$)"
                title_match = re.search(title_pattern, content, re.IGNORECASE | re.DOTALL)
                if title_match:
                    title = title_match.group(1).strip()
                
                # Try to extract description
                desc_pattern = f"DESCRIPTION {i}:(.*?)(?=TITLE {i+1}:|\n\n|$)"
                desc_match = re.search(desc_pattern, content, re.IGNORECASE | re.DOTALL)
                if desc_match:
                    description = desc_match.group(1).strip()
                
                # Clean up the title
                title = title.replace('"', '').strip()
                if not title:
                    title = f"Project Recommendation {i}"
                    
                recommendations.append((title, description))
            
            # Ensure we return exactly 3 recommendations
            while len(recommendations) < 3:
                recommendations.append((
                    f"Project Recommendation {len(recommendations) + 1}",
                    "Detailed description not available."
                ))
                
            return recommendations[:3]

        except Exception as e:
            error_msg = f"Error generating recommendations: {str(e)}"
            return [(error_msg, "")] * 3

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