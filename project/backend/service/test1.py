from synseai_llm import SynseaiLLM
from webscrape import company_webscraper


def main():
    company_name = "Gcash"

    print(f"🔎 Starting project recommendations for {company_name}...")

    # Initialize SynseaiLLM
    synsai_llm = SynseaiLLM(company_name)

    # Scrape company pages
    scraped_pages = company_webscraper(company_name)
    print(f"✅ Scraped {len(scraped_pages)} pages")

    if not scraped_pages:
        print(f"⚠️ No pages scraped for {company_name}. Cannot generate recommendations.")
        return

    #  Normalize scraped pages: use "content" as "context" if missing
    for page in scraped_pages:
        if "content" in page and "context" not in page:
            page["context"] = page["content"]

    # Print first few scraped pages for inspection
    for i, page in enumerate(scraped_pages[:3], start=1):
        print(f"\n--- Page {i} ---")
        print(page.keys())
        if "context" in page:
            print(f"Context preview: {page['context'][:200]}...")

    # Pick the first valid page
    first_page = next((page for page in scraped_pages if "context" in page), None)

    if not first_page:
        print("⚠️ No valid context found in scraped pages.")
        return

    # Generate project recommendations
    recommendations = synsai_llm.project_recommendation(first_page)

    # Print results
    print(f"\n--- Project Recommendations for {company_name} ---\n")
    for idx, (title, description) in enumerate(recommendations, start=1):
        print(f"Recommendation {idx}: {title}")
        print(f"{description}\n")


if __name__ == "__main__":
    main()
