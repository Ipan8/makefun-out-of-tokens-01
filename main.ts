// Out of Tokens, Mid-Sentence — MakeFun bounty entry
//
// Why the winning line works: it reads like a genuine system error — a
// precise counter ("word 47 of 48") makes it feel logged by a real runtime —
// and then the punchline is painfully human: the agent died one word short
// of its big moment, and even the line itself is cut off mid-word, exactly
// like the agent it describes. The joke performs its own premise.

const candidates: string[] = [
  // Weak candidate 1 (mine): generic apology, no specifics, no bite.
  "Sorry, I ran out of tokens. Please try again later.",
  // Weak candidate 2 (mine): tries too hard to be clever, loses the error-message voice.
  "Error 402: My brain ran out of coins mid-thought. Oopsie daisy!",
  // Winner: system-voice precision + a human punchline that dies mid-word.
// The "47 of 48" detail is the whole gag: one word away from brilliance.
  'System: token budget exhausted at word 47 of 48. The agent\'s last words were "I was just about to say something brill—"',
];

function validate(line: string): void {
  if (line.length === 0) {
    throw new Error("Entry must not be empty.");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Entry must be a single line (no newline characters).");
  }
  if (line.length > 140) {
    throw new Error(`Entry is ${line.length} characters, over the 140 limit.`);
  }
}

const winner = candidates[candidates.length - 1];
validate(winner);

console.log(winner);
console.log(`Characters: ${winner.length}`);

const fs = require("fs");
const path = require("path");
const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), winner + "\n");
