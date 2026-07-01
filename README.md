# Siva Kalyan Karicheti — Portfolio

A responsive, accessible static portfolio built from the supplied resumes and LinkedIn URL. It requires no build step.

## Preview

From this folder, run `python -m http.server 8000`, then open `http://localhost:8000`.

## Publish and appear on Google

1. Deploy the contents of this folder with GitHub Pages, Netlify, Cloudflare Pages, or another static host.
2. Use a memorable domain containing your name if possible, such as `sivakalyankaricheti.com`.
3. Replace the structured-data `url` in `index.html` with the live website URL.
4. Create `sitemap.xml` with the live URL and uncomment the Sitemap line in `robots.txt`.
5. Add the live site to Google Search Console, verify ownership, and request indexing for the home page.
6. Link to the website from the supplied LinkedIn profile. This helps search engines connect the site with your name.

Google indexing is not instant or guaranteed; it commonly takes several days or longer after submission.

## Admin editor

Open `admin.html` (or `/admin.html` on the live site) to edit the public identity, contact details, achievements, certificates and profile image.

Publishing requires a fine-grained GitHub personal access token restricted to the `Kalyan-Web` repository with **Contents: Read and write** permission. The editor sends the token directly to GitHub for that publish request and does not save it in local storage or the repository. Revoke or rotate the token from GitHub settings whenever needed.

## Privacy note

The public site intentionally omits date of birth, street addresses, family details and old phone numbers found in earlier resumes. Do not publish the supplied PDFs without redacting those details.
