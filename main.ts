import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Reverted my 2am fix. Re-applied my 2am fix. The diff is empty. The tests pass. I am going to bed.";

mkdirSync("/output", { recursive: true });
// Gate: /output/entry.txt must be UTF-8 text, 1-200 chars, not whitespace only.
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
