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

    @staticmethod
    def get_company_names(pages):
        try:
            # Extract content from all pages
            context = ' '.join([page.get('content', '') for page in pages])
            
            if not context:
                return []
                
            # Create prompt for the model
            prompt = f"""
            Extract ONLY the company names from the following text. Follow these rules:

            FOLLOW THIS RULES STRICTLY:
            1. List ONLY the company/organization names
            2. Remove all numbers, rankings, and special characters
            3. Exclude any descriptive text, statistics, or explanations
            4. If a company name includes common suffixes (Inc, Corp, LLC, etc.), you can include them
            5. Return each name on a new line with no additional text
            6. No introductions and conclusions, no afterwords.
            7. The company should be a few words long.
            8. No explanation
            9. Don't mention any money or currency.
    
            Examples (but don't include these in the response if not in the context):
            "1. BDO Unibank, Inc."
            "2. Land Bank of the Philippines"
            "3. Bancotaphil Corporation"
            "4. China Banking Corporation"
            "5. UnionBank of the Philippines"
            "6. Metropolitan Bank & Trust Co."
            "7. Citibank, N.A."
            "8. Bancado de Oro Unibank, Inc."
            "9. DBS Bank Ltd."
            "10. Bangkok Bank Public Co., Ltd."
            "11. Philippine Veterans Bank"
            "12. ING Bank N.V."
            "13. Mega International Commercial Bank Ltd."
            "14. Industrial and Commercial Bank of China Limited"
            "15. United Overseas Bank Limited"
            "16. Standard Chartered Bank"
            "17. KEB Hana Commercial Bank Ltd."
            "18. Industrial Bank of Korea Limited"
            "19. China Construction Bank Corporation"
            "20. Cathay United Commercial Bank Ltd."
            "21. Hana Financial Group Inc."
            "22. Taiwan Business Bank"
            "23. Banco Delta Asia Limited"
            "24. The Hongkong and Shanghai Banking Corporation Limited"
            "25. Bank of East Asia Limited"
            
            Text: {context}
            """

            response = ollama.chat(
                model='llama2',
                messages=[{
                    'role': 'user',
                    'content': prompt,
                }]
            )

            # Extract company names from the response
            result = response['message']['content']
            company_names = [name.strip() for name in result.split('\n') if name.strip()]
            return company_names

        except Exception as e:
            print(f"Error in get_company_names: {str(e)}")
            return []