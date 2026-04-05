"use strict";

/**
 * Kopiert Medien-Jahresordner aus uploads/ nach public/images/.
 * Pfade entsprechen dem WordPress-Export (WXR): …/wp-content/uploads/YYYY/MM/…
 * → im Next-Build: /images/YYYY/MM/… (siehe next.config redirects).
 *
 * Ausführen nach neuem Upload-Backup oder wenn Bilder nur unter uploads/ liegen.
 */

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const uploadsDir = path.join(root, "uploads");
const imagesDir = path.join(root, "public", "images");

const YEAR_DIR = /^(19|20)\d{2}$/;

function main() {
  if (!fs.existsSync(uploadsDir)) {
    console.error("sync-wordpress-uploads: uploads/ fehlt");
    process.exit(1);
  }
  fs.mkdirSync(imagesDir, { recursive: true });

  const entries = fs.readdirSync(uploadsDir, { withFileTypes: true });
  let copied = 0;
  for (const ent of entries) {
    if (!ent.isDirectory() || !YEAR_DIR.test(ent.name)) continue;
    const src = path.join(uploadsDir, ent.name);
    const dest = path.join(imagesDir, ent.name);
    fs.cpSync(src, dest, { recursive: true });
    copied++;
    console.log("synced", ent.name);
  }
  if (!copied) {
    console.warn("Keine Jahresordner (20xx) unter uploads/ gefunden.");
  }
}

main();
