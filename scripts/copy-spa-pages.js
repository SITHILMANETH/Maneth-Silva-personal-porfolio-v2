const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");
const indexFile = path.join(buildDir, "index.html");
const routes = ["about", "contact", "open-for-work", "portfolio"];

if (!fs.existsSync(indexFile)) {
  throw new Error("Build index.html was not found.");
}

fs.copyFileSync(indexFile, path.join(buildDir, "404.html"));

for (const route of routes) {
  const routeDir = path.join(buildDir, route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.copyFileSync(indexFile, path.join(routeDir, "index.html"));
}
