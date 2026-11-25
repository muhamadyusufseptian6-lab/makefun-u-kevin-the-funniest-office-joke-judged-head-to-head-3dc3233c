// The Funniest Office Joke, Judged Head to Head
// Writes one single-line office joke to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22+, stdlib only, fully deterministic: the same run always writes
// the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "The office printer has never once been late to a deadline — it just makes sure I am.";

const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir; // paths resolve from the script location, never process.cwd()

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
