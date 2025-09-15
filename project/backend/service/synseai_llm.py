import re
import yaml
from pathlib import Path
from dotenv import load_dotenv
import os
from openai import OpenAI

load_dotenv()

# Initialize OpenAI API key
client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

class SynseaiLLM:
    def __init__(self, company):
        self.credibility_reasonings = []
        self.referential_reasonings = []
        self.compliance_reasonings = []
        self.company = company
        self.project_contexts = []
        self.client = OpenAI()
        self._load_prompts()
        
    def _load_prompts(self):
        """Load prompts from config.yaml"""
        try:
            config_path = Path(__file__).parent / 'config.yaml'
            with open(config_path, 'r', encoding='utf-8') as f:
                config = yaml.safe_load(f)
            self.prompts = config.get('prompts', {})
        except Exception as e:
            print(f"Error loading prompts from config: {str(e)}")
            self.prompts = {}

    def _load_bpi_context(self):
        """Load BPI context from the text file."""
        try:
            import os
            # Get the directory where this file is located
            dir_path = os.path.dirname(os.path.abspath(__file__))
            file_path = os.path.join(dir_path, 'BPI_context.txt')
            
            with open(file_path, 'r', encoding='utf-8') as f:
                return f.read()
        except Exception as e:
            print(f"Warning: Could not load BPI context: {str(e)}")
            return ""
            
    def _load_bpi_esg_context(self):
        """Load BPI ESG context from the text file."""
        try:
            import os
            # Get the directory where this file is located
            dir_path = os.path.dirname(os.path.abspath(__file__))
            file_path = os.path.join(dir_path, 'BPI_ESG.txt')
            
            with open(file_path, 'r', encoding='utf-8') as f:
                return f.read()
        except Exception as e:
            print(f"Warning: Could not load BPI ESG context: {str(e)}")
            return ""

    def _openai_chat(self, input, temperature=0.7):
        """
        Helper method to call OpenAI ChatCompletion.
        """
        response = client.responses.create(
            model="gpt-4o-mini",
            input=input,
            temperature=temperature,
        )
        return response.output[0].content[0].text

    def project_recommendation(self, page):
        """
        Generate three unique project recommendations based on the provided context page.
        Returns a list of tuples containing (title, description) for each recommendation.
        """
        if not page or 'context' not in page:
            return [("Error: No content provided", "No content available for project recommendation")] * 3

        bpi_context = self._load_bpi_context()

        # Get the project recommendation prompt from config and format it
        prompt_template = self.prompts.get('project_recommendation_prompt', '')
        prompt = prompt_template.format(
            company=self.company,
            bpi_context=bpi_context,
            company_context=page.get('context', 'No context')
        )

        try:
            response = self._openai_chat(
                input=prompt,
                temperature=0.7,
            )
            content = response.strip()

            recommendations = []

            for i in range(1, 4):
                title = f"Project Recommendation {i}"
                description = f"Description not available for project {i}"

                title_pattern = f"TITLE {i}:(.*?)(?=DESCRIPTION {i}:|TITLE {i+1}:|$)"
                title_match = re.search(title_pattern, content, re.IGNORECASE | re.DOTALL)
                if title_match:
                    title = title_match.group(1).strip()

                desc_pattern = f"DESCRIPTION {i}:(.*?)(?=TITLE {i+1}:|$)"
                desc_match = re.search(desc_pattern, content, re.IGNORECASE | re.DOTALL)
                if desc_match:
                    description = desc_match.group(1).strip()

                title = title.replace('"', '').strip()
                if not title:
                    title = f"Project Recommendation {i}"

                recommendations.append((title, description))

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

        # Prepare the base context
        base_context = "\n".join([
            f"Title: {page.get('title', 'No title')}",
            f"URL: {page.get('url', 'No URL')}",
            f"Term: {page.get('term', 'N/A')}",
            "",
            page.get('content', 'No content'),
        ])
        
        # Add BPI ESG context if we're scoring compliance
        if criteria.lower() == 'ESG_alignment':
            bpi_esg_context = self._load_bpi_esg_context()
            if bpi_esg_context:
                base_context = f"BPI ESG Context:\n{bpi_esg_context}\n\n{base_context}"
        
        formatted_context = f"{base_context}\n{'=' * 50}\n"

        # Get the scoring prompt from config and format it
        prompt_template = self.prompts.get('scoring_prompt', '')
        prompt = prompt_template.format(
            company=self.company,
            criteria=criteria,
            formatted_context=formatted_context
        )
        try:
            # First get the score
            score_response = self._openai_chat(
                input=prompt,
                temperature=0.0,
            )
            score_text = score_response.strip()
            
            # Parse the score
            score_match = re.search(r'0\.\d|1\.0', score_text)
            if not score_match:
                score_match = re.search(r'\b(?:0|0?\.[0-9]|1\.0?)\b', score_text)
            
            if score_match:
                score = float(score_match.group())
            else:
                print(f"Warning: Could not parse score from: '{score_text}'. Using default score of 0.5")
                score = 0.5

            # Get the appropriate reasoning prompt based on criteria
            if criteria.lower() == 'esg_alignment':
                prompt_key = 'ESG_alignment_reasoning_prompt'
            else:
                prompt_key = 'criteria_reasoning_prompt'
                
            # Format the selected prompt with score and context
            reasoning_prompt = self.prompts.get(prompt_key, '').format(
                criteria=criteria,
                score=score,
                company=self.company,
                context=formatted_context
            )
            
            if not reasoning_prompt:
                print("Warning: No reasoning prompt found in config")
                reason_text = f"Scored {score} for {criteria} - No reasoning prompt configured"
            else:
                reason_response = self._openai_chat(
                    input=reasoning_prompt,
                    temperature=0.7,
                )
                reason_text = reason_response.strip()
                #print(f"Generated reasoning for {criteria} score {score}:", reason_text[:200] + "..." if len(reason_text) > 200 else reason_text)

            if criteria == 'credibility':
                self.credibility_reasonings.append(reason_text)
            elif criteria == 'referential':
                self.referential_reasonings.append(reason_text)
            elif criteria == 'ESG_alignment':
                self.compliance_reasonings.append(reason_text)

            return max(0.0, min(1.0, score))

        except Exception as e:
            print(f"Error getting {criteria} score: {str(e)}")
            return 0.0

    def company_score_reasoning(self, criteria):
        if criteria == 'credibility':
            reasonings = self.credibility_reasonings
            if not reasonings:
                return 'No credibility reasonings available.'
        elif criteria == 'referential':
            reasonings = self.referential_reasonings
            if not reasonings:
                return 'No referential reasonings available.'
        elif criteria == 'ESG_alignment':
            reasonings = self.compliance_reasonings
            if not reasonings:
                return 'No ESG alignment reasonings available.'
        else:
            return "Invalid criteria"

        # Join all reasonings with separators
        reasonings_text = '\n\n---\n\n'.join(reasonings)
        
        # Get the summary prompt from config and format it with the reasonings
        summary_prompt = self.prompts.get('summary_criteria_reasoning_prompt', '').format(
            criteria=criteria,
            reasonings=reasonings_text
        )
        
        if not summary_prompt:
            return "Error: Summary prompt not found in config"
            
        reason_response = self._openai_chat(
            input=summary_prompt,
            temperature=0.5,
        )
        return reason_response.strip()

    @classmethod
    def get_company_names(cls, pages):
        try:
            context = ' '.join([page.get('content', '') for page in pages])

            if not context:
                return []

            # Load prompts from config
            config_path = Path(__file__).parent / 'config.yaml'
            with open(config_path, 'r', encoding='utf-8') as f:
                config = yaml.safe_load(f)
            
            # Get the company extraction prompt and format it
            extract_prompt_template = config.get('prompts', {}).get('company_extraction_prompt', '')
            extract_prompt = extract_prompt_template.format(context=context)

            # Since this method is static, we need to instantiate openai outside or create a helper.
            # For consistency, we can instantiate openai here as well.

            response = client.responses.create(
                model="gpt-4.1",
                input=extract_prompt,
                temperature=0.3,
            )
            raw_names = response.output[0].content[0].text

            company_names = []
            for line in raw_names.split('\n'):
                # Remove JSON-like structures if present
                line = re.sub(r'\{.*?\}', '', line)
                # Remove any remaining quotes
                line = line.replace('"', '').replace("'", '')
                # Remove numbered list patterns like '1. ', '2. ', etc.
                line = re.sub(r'^\s*\d+\.?\s*', '', line)
                # Remove common prefixes/suffixes
                line = re.sub(r'^[^a-zA-Z0-9]+', '', line)
                line = re.sub(r'[^a-zA-Z0-9]+$', '', line)
                line = line.strip()

                # Skip common non-company lines
                skip_phrases = [
                    'sure!', 'here are', 'company names', 'output:', 'input:',
                    'cleaned', 'list of', 'companies', 'names', 'extracted'
                ]
                if any(phrase in line.lower() for phrase in skip_phrases):
                    continue

                if line and line.lower() not in company_names:
                    company_names.append(line)

            # Remove duplicates while preserving order and filter out empty strings
            seen = set()
            company_names = [name for name in company_names if name and not (name.lower() in seen or seen.add(name.lower()))]

            # Final cleanup - remove unreasonable entries
            company_names = [
                name for name in company_names
                if len(name.split()) <= 5 and
                not name.endswith(':') and
                not name.startswith('(') and
                not name.endswith(')')
            ]

            print(f"Extracted company names: {company_names}")
            return company_names

        except Exception as e:
            print(f"Error in get_company_names: {str(e)}")
            return []