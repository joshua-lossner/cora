---
kind: task
title: Add waveform or spectrum visualization
project: coherenceism-media
status: todo
updated: 2025-10-18
tags: [feature, visualization, audio, future]
git_status: none
---

# Audio Waveform Visualization

## Purpose
Add visual feedback showing audio levels, waveform, or frequency spectrum. Enhances the listening experience and provides visual interest.

## Visualization Options

1. **Waveform** - Show track amplitude over time
   - Pre-rendered from audio file
   - Interactive seeking by clicking waveform
   - Progress overlay shows current position

2. **Live Spectrum Analyzer** - Real-time frequency bars
   - Uses Web Audio API AnalyserNode
   - Classic frequency bars (8-32 bands)
   - Responsive to music dynamics

3. **Minimal Level Meter** - Simple VU-style bars
   - Left/right channel levels
   - Low CPU, always-on option

## Recommended: Live Spectrum Analyzer
Reasons:
- No preprocessing needed
- Responds to actual playback
- Low complexity, high impact
- Works with any audio source

## Steps
1. Create AudioContext and AnalyserNode:
   ```js
   const audioContext = new AudioContext();
   const analyser = audioContext.createAnalyser();
   const source = audioContext.createMediaElementSource(audioElement);
   source.connect(analyser);
   analyser.connect(audioContext.destination);
   ```

2. Build visualization canvas:
   - Canvas element in player UI
   - Responsive sizing
   - Smooth animation loop (requestAnimationFrame)

3. Draw frequency bars:
   ```js
   analyser.getByteFrequencyData(dataArray);
   // Draw bars based on frequency data
   ```

4. Add visual options:
   - Toggle on/off
   - Different color schemes
   - Bar count (8, 16, 32)
   - Smooth vs. sharp response

5. Optimize performance:
   - Pause rendering when player minimized
   - Use efficient canvas drawing
   - Throttle updates if needed

## Acceptance
- Spectrum analyzer displays during playback
- Bars respond smoothly to audio dynamics
- No audio glitches or increased latency
- Minimal CPU usage (<5% additional)
- Works on desktop and mobile
- Toggle to disable visualization
- Visual style matches dark theme

## Links
- Web Audio API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
- Analyser Node: https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode
- Player code: `coherenceism-media/src/templates/player.js`

## Notes
- Could add visualizer presets (bars, circle, waveform)
- Full-screen visualizer mode (future)
- Sync to lyrics timing (very advanced)
- Consider WebGL for complex 3D visualizations
- Mobile may need lower bar count for performance
- Audio context may require user interaction to start
