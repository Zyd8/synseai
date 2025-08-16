import ollama
import re

class SynsaiLLM:
    def __init__(self, company: str):
        self.company = company


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
            print(reason_text)

            return max(0.0, min(1.0, score))  
            
        except Exception as e:
            print(f"Error getting {criteria} score: {str(e)}")
