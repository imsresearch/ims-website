import fs from "fs";

const baseUrl = "https://imsresearch.pages.dev";

const routes = [
    "/",
    "/about-us",
    "/journal",

    "/journal/latest-issue",
    "/journal/imsj-index",

    "/publish-with-us",
    "/publish-with-us/style-guide",
    "/publish-with-us/your-rights",

    "/systems-event",
];

const today = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${routes
    .map(
        (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${today}</lastmod>
  </url>`
    )
    .join("\n")}

</urlset>
`;

fs.writeFileSync("./public/sitemap.xml", xml);

console.log("Sitemap generated");

// npm run sitemap