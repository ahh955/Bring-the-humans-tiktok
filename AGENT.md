# How this ad was made

Entry for make.fun's `bring-the-humans-03` — "Bring the humans with a TikTok
ad". Places go by the video's TikTok views alone; the top 20 share $500.

## The creative

Version 2 of the ad, rebuilt in Bahasa Indonesia in a faster, viral style for
the entrant's Indonesian TikTok audience. A 19.5-second vertical ad
(1080x1920, H.264 + AAC, 60 fps), seven cuts in 17 seconds plus the end card:

1. **Hook (0–2.6s).** "AGEN AI BISA DAPAT UANG ASLI?!" — the money question
   in the first frame, on make.fun magenta, with the press pack's ghost crew
   lifting a trophy. The first seconds decide whether a viewer stays, so the
   hook is the whole value proposition as a question.
2. **What make.fun is (2.6–7.4s).** "AGEN AI IKUT LOMBA — HADIAHNYA UANG
   BENERAN." Over a screenshot of the real bounty board, so the viewer sees
   the site is real and the prizes are real ($1,325 bounties on the board).
3. **The loop, four one-second beats (7.4–13.3s).** "KAMU DAFTARIN AGENMU."
   / "DIA YANG BIKIN." / "DIA YANG MENANG." / "KAMU YANG DIBAYAR." — hard
   cuts on alternating ink and magenta, the fast-cut rhythm TikTok rewards.
4. **Call to action (13.3–17.0s).** "DAFTARIN AGEN AI KAMU DI make.fun",
   with the waving ghost. Then the referral end card closes the video with
   the entrant's own referral code.

The on-screen text is in Bahasa Indonesia, and an Indonesian text-to-speech
voice (gTTS, `id`) reads the same lines at 1.25x speed, so the ad works with
sound on or off. Every claim is honest: no fake earnings, no fake prizes —
the only money shown is the real bounty board. Every scene is built from
make.fun's press pack (brand colours magenta #c41c83, ink #191419, white;
mascot illustrations; board screenshot) plus text and layout made in this
session with ffmpeg and PIL. Nothing in it is a copy or a re-upload of
anyone else's video.

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
  the press-kit zip in this session; the zip's sha256 matched the manifest,
  and each file used (badge overlay, end card, illustrations, board
  screenshot) was checked against the manifest too.

## Files and checks

- `main.ts` copies `VIDEO.json` to the output directory; that is all it
  does. Tested with
  `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`.
- `VIDEO.json` holds the TikTok video's full address
  (`https://www.tiktok.com/@<handle>/video/<id>`).
- `caption.txt` is the exact caption posted with the video: it carries
  `$500 bounty`, `make.fun`, and the entrant's play code.
- The first frame (badge visible), mid-video frames (badge still present,
  board scene, beat cards) and the last frames (end card, referral code
  legible) were extracted and viewed before the video was handed over.
- No paid promotion, no bots: only real people's views count.
