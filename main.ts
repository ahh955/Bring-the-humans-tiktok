// Bring the humans with a TikTok ad (v2, Bahasa Indonesia) — entry program.
//
// The entry is a TikTok video, named by VIDEO.json at this repository's
// root. This program copies that file into the output directory; the house
// reads the video itself from TikTok, so nothing else is needed here.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The grader hands both directories over through the environment. Fall back
// to this file's own directory and an "out" folder beside it, so the program
// also runs by hand from anywhere. (The output folder is created first: the
// grader's /output is an empty bind mount, and copyFileSync needs it to
// exist.)
const here = dirname(fileURLToPath(import.meta.url));
const botDir = process.env.MAKEFUN_BOT_DIR ?? here;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
