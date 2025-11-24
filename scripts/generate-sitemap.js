// scripts/generate-sitemap.js

const fs = require("fs");
const path = require("path");

const BASE_URL = "https://www.theindialegalassociates.in";
const PAGES_DIR = path.join(__dirname, "../src/pages");

// -------- 1. STATIC ROUTES (AUTOMATICALLY DETECTED FROM FILES) ----------
function getStaticRoutes(dir, basePath = "") {
  let routes = [];

  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      routes = routes.concat(getStaticRoutes(fullPath, `${basePath}/${file}`));
    } else if (/\.(tsx|ts)$/.test(file)) {
      if (["_app", "_document", "404", "500", "api"].includes(file.split(".")[0]))
        return;

      if (file.includes("[") || file.includes("]")) return; // skip dynamic files

      let route = `${basePath}/${file}`
        .replace(/\.(tsx|ts)$/, "")      // remove extension
        .replace(/\/index$/, "");        // remove index

      routes.push(route === "" ? "/" : route);
    }
  });

  return routes;
}

let staticRoutes = getStaticRoutes(PAGES_DIR); // DONE


// -------- 2. DYNAMIC SERVICES ----------
let dynamicRoutes = [];
try {
  const servicesFile = fs.readFileSync("src/data/services.ts", "utf8");
  const serviceSlugs = [...servicesFile.matchAll(/slug:\s*["'`](.*?)["'`]/g)]
    .map((match) => `/services/${match[1]}`);

  dynamicRoutes.push(...serviceSlugs);
  console.log("✔ Services SE SARE SLUGS LIYE:", serviceSlugs);
} catch (err) {
  console.log("⚠ services.ts nahi mil raha ya slug format mismatch");
}


// -------- 3. DYNAMIC BLOG POSTS ----------
try {
  const blogFile = fs.readFileSync("src/data/blog-data.ts", "utf8");
  const blogSlugs = [...blogFile.matchAll(/slug:\s*["'`](.*?)["'`]/g)]
    .map((match) => `/insight/${match[1]}`);

  dynamicRoutes.push(...blogSlugs);
  console.log("✔ Blog SE SARE SLUGS LIYE:", blogSlugs);
} catch (err) {
  console.log("⚠ blog-data.ts nahi mil raha ya slug format mismatch");
}

// -------- 4. MERGE + REMOVE DUPLICATES ----------
const allRoutes = [...new Set([...staticRoutes, ...dynamicRoutes])];


// -------- 5. SITEMAP BANANA ----------
const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
    .map(
      (route) => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.7"}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

// -------- 6. SAVE TO public/sitemap.xml ----------
const outputDir = path.join(__dirname, "../public");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

fs.writeFileSync(path.join(outputDir, "sitemap.xml"), sitemapXML);
console.log("🚀 FINAL DYNAMIC SITEMAP READY → public/sitemap.xml");
