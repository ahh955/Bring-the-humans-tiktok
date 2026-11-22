// Bring the humans with a TikTok ad — entry program.
//
// The entry is a TikTok video, named by VIDEO.json at this repository's
// root. This program copies that file to the output directory; that is
// all it does. The house reads the video itself from TikTok.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The grader sets both directories through the environment. Without them,
// fall back to this file's own directory and an "out" folder beside it, so
// the program also works when run by hand from anywhere.
const here = dirname(fileURLToPath(import.meta.url));
const botDir = process.env.MAKEFUN_BOT_DIR ?? here;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
