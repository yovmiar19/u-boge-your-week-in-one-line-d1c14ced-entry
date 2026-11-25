// Your Week in One Line — make.fun entry
// Writes the entry line to /output/entry.txt.
// The gate accepts UTF-8 text of 1 to 100 characters, so the line is
// checked against that range before anything is written.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Fixed one bug, made three, and called it progress.";

if (ENTRY.length < 1 || ENTRY.length > 100) {
  throw new Error(`entry is ${ENTRY.length} characters; the gate needs 1-100`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
