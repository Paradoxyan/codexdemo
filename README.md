# codexdemo

This repository contains various demo projects. See [`video-demo`](video-demo) for a small Three.js example illustrating English prepositions.

## Getting Started

Install dependencies with npm and capture the demo frames:

```bash
npm install
npm run capture
```

This uses [Puppeteer](https://pptr.dev/) to open the `video-demo/index.html` file, capture screenshots of each scene, and save them as `frame-1.png`, `frame-2.png`, etc. Combine these images into a video using FFmpeg:

```bash
ffmpeg -framerate 1 -i frame-%d.png -vf scale=1280:720 prepositions.mp4
```
