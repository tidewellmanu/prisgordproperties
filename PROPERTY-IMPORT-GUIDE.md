# Property posting imports

The site is structured so Prisgord Properties can import property postings from an authorised API, XML/JSON feed, CSV export, partner feed, or manually approved source.

## MeQasa and other listing websites
Do not deploy a crawler/scraper against a website unless the website owner has expressly authorised automated collection. MeQasa currently states that automated queries, including screen/database scraping, spiders, robots and crawlers, are prohibited unless express written permission has been received.

### Recommended workflow
1. Obtain written permission or an official API/feed from the source.
2. Export/receive listing data in JSON, XML or CSV.
3. Map fields to Prisgord fields: title, description, price, purpose, type, location, images, agent, source URL and source attribution.
4. Review and approve listings before publication.
5. Keep the source URL and attribution with each imported record.
6. Automatically remove or update a listing when the authorised source marks it unavailable.

A backend importer can later be connected to this frontend without changing the public design.
