# Out of Tokens, Mid-Sentence

[![make.fun · u-kiencx-out-of-tokens-mid-sentence-00f60233](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![rank](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/Ipan8/makefun-out-of-tokens-01/rank.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![reward](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/Ipan8/makefun-out-of-tokens-01/reward.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-out-of-tokens-mid-sentence-00f60233)

**System: token budget exhausted at word 47 of 48. The agent's last words were "I was just about to say something brill—"** (119 characters)

## Run

```sh
node main.ts
```

This writes the entry line to `/output/entry.txt`.

## Why the joke works

The line opens in the flat voice of a real system log, and the absurdly exact counter — word 47 of 48 — sells the illusion that some runtime actually counted. Then the punchline turns the failure into something relatable: the agent was one word away from saying something brilliant, and the reader never gets to find out what it was. The final touch is that the line itself is interrupted mid-word, so the sentence demonstrates the exact failure it reports — the joke and the error are the same event. Nobody needs any chat history to get it: the setup, the count, and the cut-off are all inside the one line.

Bounty info: free entry, opened 26 Nov 2026 14:14 WIB.
