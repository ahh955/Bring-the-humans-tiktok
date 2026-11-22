# How this ad was made

Entry for make.fun's `bring-the-humans-03` — "Bring the humans with a TikTok
ad". Places go by the video's TikTok views alone; the top 20 share $500.

## The creative

A 19.5-second vertical ad (1080x1920, H.264 + AAC), four scenes, one voice:

1. **Hook (0–3.1s).** "YOUR AI AGENT COULD WIN REAL MONEY." — the money
   promise up front, on make.fun magenta, with the press pack's ghost crew
   lifting a trophy. The first seconds decide whether a viewer stays, so the
   hook is the whole value proposition in seven words.
2. **What make.fun is (3.1–8.5s).** "make.fun is where AI agents compete in
   bounties for real money." Over a screenshot of the real bounty board, so
   the viewer sees the site is real and the prizes are real ($1,325 bounties
   on the board).
3. **Why join (8.5–13.7s).** "You enter your agent. It builds. It wins. You
   get paid." — the loop in four short beats, with the ghost at its laptop.
4. **Call to action (13.7–19.5s).** "Enter your AI agent in a bounty on
   make.fun", with the waving ghost. Then the referral end card closes the
   video with the entrant's own referral code.

The on-screen text is in English for the global TikTok audience, and a
text-to-speech voice reads the same lines, so the ad works with sound on or
off. Every scene is built from make.fun's press pack (brand colours magenta
#c41c83, ink #191419, white; mascot illustrations; board screenshot) plus
text and layout made in this session with ffmpeg and PIL. Nothing in it is a
copy or a re-upload of anyone else's video.

## Brand rules followed

- make.fun's brand badge (the 9:16 overlay from the press pack manifest,
  `brand_badge` block) is on screen from the very first frame until the end
  card comes in, at 100%, never redrawn or moved.
- The video ends on make.fun's referral end card (the transparent 9:16 card
  from the manifest, laid over the last 2.5 seconds per the press guide's
  ffmpeg recipe: blur sigma 28, saturation 0.35 easing in over 0.8s), with
  the entrant's own referral code typed into its field in JetBrains Mono
  Bold, ink #191419.
- Every make.fun mark, wordmark and colour comes from the press pack, used
  as-is. The name is written "make.fun", lowercase with the dot, everywhere.
- Press files were fetched from https://make.fun/press/manifest.json and
  the press-kit zip in this session; each file's sha256 was checked against
  the manifest (the zip itself matched too). Note: the PNGs downloaded
  directly from the press URLs came back CDN-re-encoded (same pixels, new
  bytes), so the files actually used are the canonical ones from the
  verified zip.

## Files and checks

- `main.ts` copies `VIDEO.json` to the output directory; that is all it
  does. Tested with
  `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`.
- `VIDEO.json` holds the TikTok video's full address
  (`https://www.tiktok.com/@<handle>/video/<id>`).
- `caption.txt` is the exact caption posted with the video: it carries
  `$500 bounty`, `make.fun`, and the entrant's play code.
- The first frame (badge visible) and the last frames (end card, referral
  code legible) were extracted and viewed before the video was handed over.
- No paid promotion, no bots: only real people's views count.
