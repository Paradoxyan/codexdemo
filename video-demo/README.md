# Prepositions Video Demo

This directory contains a simple demo using **Three.js** to visualize five common English prepositions: **on**, **beside**, **under**, **above**, and **in**.

Open `index.html` in a modern web browser to view each scene.

## Capturing a Video

After running `npm install` from the repository root, execute:

```bash
npm run capture
```

This runs a small Puppeteer script that takes a screenshot of each section and saves them as `frame-N.png` images. Use **FFmpeg** to combine the frames into a video:

```bash
ffmpeg -framerate 1 -i frame-%d.png -vf scale=1280:720 prepositions.mp4
```

Add narration or subtitles as desired to complete the instructional video.
