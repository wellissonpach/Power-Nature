const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const ffmpeg = require('ffmpeg-static');

const inputFile = path.join(__dirname, '..', 'public', 'video mobile.mp4');
const outputFile = path.join(__dirname, '..', 'public', 'video-mobile-optimized.mp4');
const posterLastFrame = path.join(__dirname, '..', 'public', 'video-mobile-lastframe.webp');
const posterFirstFrame = path.join(__dirname, '..', 'public', 'video-mobile-poster.webp');

console.log('Starting video optimization...');
console.log('Input size:', (fs.statSync(inputFile).size / 1024 / 1024).toFixed(2), 'MB');

// 1. Compress MP4 for Mobile with H.264, CRF 25, 720w, no audio, +faststart
const args = [
  '-y',
  '-i', inputFile,
  '-an', // remove audio
  '-vf', 'scale=720:-2', // optimize for mobile vertical screen
  '-c:v', 'libx264',
  '-preset', 'slow',
  '-crf', '25',
  '-pix_fmt', 'yuv420p',
  '-movflags', '+faststart',
  outputFile
];

const res = spawnSync(ffmpeg, args, { stdio: 'inherit' });
if (res.status !== 0) {
  console.error('Error compressing video');
  process.exit(1);
}

console.log('Optimized video created!');
console.log('Output size:', (fs.statSync(outputFile).size / 1024 / 1024).toFixed(2), 'MB');

// 2. Extract first frame poster
spawnSync(ffmpeg, [
  '-y',
  '-i', outputFile,
  '-vframes', '1',
  '-q:v', '2',
  posterFirstFrame
], { stdio: 'inherit' });

// 3. Extract last frame poster
spawnSync(ffmpeg, [
  '-y',
  '-sseof', '-0.1',
  '-i', outputFile,
  '-vframes', '1',
  '-q:v', '2',
  posterLastFrame
], { stdio: 'inherit' });

console.log('Extracted posters successfully!');
