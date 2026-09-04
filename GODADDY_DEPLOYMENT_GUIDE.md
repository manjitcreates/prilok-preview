# PRILOK B2B Platform — GoDaddy Deployment & Hosting Guide

This guide details how to deploy the PRILOK Digital Web Platform to **GoDaddy Web Hosting / cPanel** in under 3 minutes with full speed, security, and SEO optimization.

---

### 📦 Ready-to-Upload Deployment Package
* **Archive File:** `PRILOK_GODADDY_DEPLOYMENT.zip` (located in the project root)
* **Contents:**
  * `index.html` (Main B2B Material Portal & RFQ Cart)
  * `catalogue.html` (Executive 27-Slide Magazine Catalogue)
  * `corporate.html` (Corporate Showcase & Profile)
  * `presentation.html` (Full-screen Interactive Pitch Deck)
  * `mobile.html` (Mobile Web Experience)
  * `visiting_card.html` (Digital NFC Visiting Card)
  * `styles.css` (Animations & Stylesheet)
  * `.htaccess` (GoDaddy Apache Server Optimization)
  * `robots.txt` & `sitemap.xml` (Search Engine Indexing for `www.prilok.ae`)
  * `PRILOK_Product_Catalogue_2026.pdf` (Downloadable PDF Catalogue)
  * `js/data.js` (Master 18-Category Database)
  * `assets/` (195+ Verified HD Product Visuals & Brand Logos)

---

### 🚀 3-Step GoDaddy cPanel Deployment

#### Step 1: Log in to GoDaddy cPanel
1. Sign in to your [GoDaddy Account](https://account.godaddy.com/).
2. Navigate to **My Products** → **Web Hosting (cPanel)** → Click **Manage**.
3. Under the **cPanel Dashboard**, open the **File Manager**.

#### Step 2: Upload the Deployment Zip
1. In File Manager, double-click to open the **`public_html`** folder.
   *(Note: If you have old placeholder files in `public_html`, you can delete or back them up).*
2. Click **Upload** in the top toolbar.
3. Select and upload `PRILOK_GODADDY_DEPLOYMENT.zip`.

#### Step 3: Extract & Live Test
1. Right-click `PRILOK_GODADDY_DEPLOYMENT.zip` inside `public_html` and choose **Extract**.
2. Confirm the extract destination is `/public_html/`.
3. Open your browser and visit:
   * **`https://www.prilok.ae`** (or your GoDaddy domain)

---

### ⚙️ GoDaddy Server Optimizations Configured in `.htaccess`

1. **Automatic HTTPS Redirection:**  
   Forces all HTTP traffic to secure SSL (`https://`).

2. **Gzip / Deflate Compression (`mod_deflate`):**  
   Compresses HTML, CSS, JavaScript, JSON, and SVG files on the fly, reducing bandwidth by over 70% and accelerating page load times across the UAE & GCC.

3. **Browser Caching Rules (`mod_expires`):**  
   * **Images, Vectors & Fonts:** Cached for 1 month (`access plus 1 month`).
   * **CSS & JS Files:** Cached for 1 week.
   * **HTML Pages:** Instant freshness (`0 seconds`) so product catalog updates reflect immediately.

4. **Security Hardening (`mod_headers`):**  
   * `X-Frame-Options: SAMEORIGIN` (prevents clickjacking)
   * `X-Content-Type-Options: nosniff` (prevents MIME confusion)
   * `Referrer-Policy: strict-origin-when-cross-origin`
   * `Options -Indexes` (disables directory index browsing)
   * Protects sensitive developer files (`.py`, `.sh`, `.bat`, `.sql`, `.log`).

5. **Canonical SEO & Sitemaps:**  
   * `robots.txt` and `sitemap.xml` configured for Google, Bing, and regional search bots.
