import sharp from "sharp";
import { rename, stat } from "node:fs/promises";
import { join } from "node:path";

const dir = join(process.cwd(), "src", "assets", "photos");
const jobs = [
  ["rings.jpg", 1400],
  ["benches.jpg", 1800],
  ["dumbbells.jpg", 1800],
];

for (const [file, width] of jobs) {
  const source = join(dir, file);
  const temp = join(dir, `${file}.tmp`);
  const info = await sharp(source)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(temp);
  await rename(temp, source);
  const size = (await stat(source)).size;
  console.log(`${file}: ${info.width}x${info.height}, ${Math.round(size / 1024)} KB`);
}
