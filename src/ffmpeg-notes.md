---
layout: layouts/page.njk
title: FFmpeg Notes

eleventyNavigation:
  key: FFmpeg Notes
  order: 4

image: /img/avatar.png
description: "Notes for FFmpeg that I've accumulated over time."
---

# {{ title }}

Hi, these are Butterscotch's personal FFmpeg notes! These are just a bunch of personal notes I've made about using FFmpeg over the years, so it's not a proper guide or anything.

## Useful links

- <https://trac.ffmpeg.org/wiki/Encode/H.264>
- <https://trac.ffmpeg.org/wiki/Encode/H.265>
- <https://trac.ffmpeg.org/wiki/Encode/AV1>
- <https://slhck.info/video/2017/02/24/crf-guide.html>
- <https://ffmpeg.org/ffmpeg.html#Advanced-options>
- <https://ffmpeg.org/ffmpeg-codecs.html>

## CRF - Bitrate control

The Constant Rate Factor (CRF) is the main control for quality and bitrate for most modern encoders. The CRF scale starts from 0 to some variable value (usually 51, check for each encoder), where 0 is the highest quality (lossless) and the highest number is the lowest quality.

### H264

The CRF scale is 0-51, where 0 is lossless, 23 is the default, and 51 is the worst quality possible. A lower value generally leads to higher quality, and a subjectively sane range is 17-28. Consider 17 or 18 to be visually lossless or nearly so; it should look the same or nearly the same as the input but it isn't technically lossless.

Note: The maximum value can change with 10-bit encoding.

### H265

The CRF scale is 0-51, where 0 is lossless, 28 is the default, and 51 is the worst quality possible. This scale is pretty much the same as H264 but can have higher quality at higher CRF values.

### SVT-AV1

The valid CRF value range for libsvtav1 is 0-63, with the default being 35. Lower values correspond to higher quality and greater file size. Lossless encoding is currently ​not supported. It is generally recommended to use preset 5/6 at CRF 24-28 for the best quality results.

## Basic info commands

### List hardware acceleration options

```bash
ffmpeg -hwaccels
```

### List codecs/encoders/decoders

```bash
ffmpeg -codecs
ffmpeg -encoders
ffmpeg -decoders
```

## Hardware acceleration

- `hwaccel` is the input hardware acceleration
- `hwaccel_output_format` is the output hardware acceleration

## Example commands

### Basic H265

```bash
ffmpeg -i input.mp4 -map 0 -c:v libx265 -crf 28 -movflags +faststart -c:a copy output.mp4
```

#### Asher's command

```bash
ffmpeg -i "input.mkv" -c:v libx265 -preset slow -vf "fps=30, scale='min(1920,iw)':-2" -movflags +faststart -c:a aac "output.mp4"
```

#### Low quality

```bash
ffmpeg -i input.mp4 -map 0 -c:v libx265 -crf 44 -movflags +faststart -c:a copy output.mp4
```

### Basic SVT-AV1

#### Important options

- `-preset 6` - A good SVT-AV1 encoding preset
- `-crf 27` - Good value trade-off between quality and size
- `-pix_fmt yuv420p10le` - 10-bit encoding, reduces colour banding, optional

#### High quality

```bash
ffmpeg -i input.mp4 -map 0 -c:v libsvtav1 -preset 6 -crf 27 -pix_fmt yuv420p10le -c:a copy output.mp4
```

#### Medium quality

```bash
ffmpeg -i input.mp4 -map 0 -c:v libsvtav1 -preset 6 -crf 35 -pix_fmt yuv420p10le -c:a copy output.mp4
```

#### Low quality

```bash
ffmpeg -i input.mp4 -map 0 -c:v libsvtav1 -preset 6 -crf 51 -pix_fmt yuv420p10le -c:a copy output.mp4
```

### Copy embedded subtitles from MP4 to MP4

```bash
ffmpeg -i input.mp4 -map 0 -c:v copy -c:a copy -c:s mov_text output.mp4
```

### Encode video using CUDA (NVIDIA)

```bash
ffmpeg -init_hw_device cuda=hw -filter_hw_device hw -hwaccel cuda -hwaccel_output_format cuda -i input.mp4 -map 0 -c:v h264_nvenc -c:a copy output.mp4
```

### Encode video using QuickSync (Intel) with embedded subtitles

```bash
ffmpeg -init_hw_device qsv=hw -filter_hw_device hw -hwaccel qsv -hwaccel_output_format qsv -i input.mp4 -map 0 -c:v h264_qsv -c:a copy -c:s mov_text output.mp4
```

### Encode video using Vulkan/AMF (AMD)

```bash
ffmpeg -init_hw_device vulkan=hw -filter_hw_device hw -hwaccel vulkan -hwaccel_output_format vulkan -i input.mp4 -map 0 -c:v h264_amf -c:a copy output.mp4
```

### Resize video using letterbox

```bash
ffmpeg -i input.mp4 -map 0 -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:-1:-1:color=black" output.mp4
```

### Batch encode

Single line bulk file encoding commands.

#### PowerShell

```powershell
Get-ChildItem -Recurse -Filter *.mp3 | ForEach-Object { ffmpeg -i $_.FullName -b:a 48k (Join-Path $_.DirectoryName "$($_.BaseName).opus") }
```

Or to preserve the original last modified date:

```powershell
Get-ChildItem -Recurse -Filter *.mp3 | ForEach-Object { $out = (Join-Path $_.DirectoryName "$($_.BaseName).opus"); ffmpeg -i $_.FullName -b:a 48k $out; (Get-Item $out).LastWriteTime = $_.LastWriteTime }
```

#### Batch script

Bulk Opus encoding using Windows batch scripting. Should probably use something better like PowerShell.

```batch
FOR /F "tokens=*" %G IN ('dir /b *.mp3') DO ffmpeg -i "%G" -b:a 48k "%~nG.opus"
```

### Video to high quality GIF

```bash
ffmpeg -i input.mp4 -vf "split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 output.gif
```

### Join two audio streams

See:

- <https://ffmpeg.org/ffmpeg-filters.html#amix>
- <https://gist.github.com/LukasKnuth/4d7ee6812ccb221b2775e984516b56d4>

```bash
ffmpeg -i input.mp4 -map 0 -filter_complex amix=inputs=2 output.mp4
```

### Images to GIF at 50 FPS from 60 FPS

```bash
ffmpeg -r 60 -i image_%003d.jpg -vf "fps=50" out.gif
```

### Image and audio to video

```bash
ffmpeg -i image.jpg -i audio.wav -tune stillimage -shortest out.mp4
```

### Combine audio and video

```bash
ffmpeg -i video.webm -i audio.webm -map 0:v:0 -map 1:a:0 -c:v copy -c:a copy out.webm
```
