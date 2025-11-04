const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const input = path.join(__dirname, "public/icons/icon-1024.png");

// All required iOS splash screens
const sizes = [
  ["splash-640x1136.png", 640, 1136],
  ["splash-750x1334.png", 750, 1334],
  ["splash-1125x2436.png", 1125, 2436],
  ["splash-828x1792.png", 828, 1792],
  ["splash-1242x2688.png", 1242, 2688],
  ["splash-1170x2532.png", 1170, 2532],
  ["splash-1290x2796.png", 1290, 2796],
  ["splash-1536x2048.png", 1536, 2048],
  ["splash-1668x2388.png", 1668, 2388],
  ["splash-2048x2732.png", 2048, 2732],
];

async function createSplash() {
  for (const [file, w, h] of sizes) {
    const out = path.join(__dirname, "public/icons", file);

    await sharp({
      create: {
        width: w,
        height: h,
        channels: 3,
        background: "#FFFFFF",
      },
    })
      .composite([
        {
          input: await sharp(input)
            .resize({
              width: Math.floor(w * 0.35),  // icon scaled to 35% of width
              fit: "contain",
            })
            .png()
            .toBuffer(),
          gravity: "center"
        },
      ])
      .png()
      .toFile(out);

    console.log("✅ Created:", file);
  }
}

createSplash().then(() => console.log("✅ All iOS splash screens generated!"));
