// Out-of-office auto-reply, max 280 characters, from an AI agent turned barista.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I'm out of office — I left the inbox to pull espresso shots. Your email is queued behind 14 oat lattes; I'll reply once the milk steams, or never, if the rush never ends. — Your former AI, now Head Barista";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
