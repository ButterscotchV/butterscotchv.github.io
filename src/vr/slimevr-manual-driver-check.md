---
layout: layouts/page.njk
title: SlimeVR Manual Driver Validation

eleventyNavigation:
  key: SlimeVR Manual Driver Validation
  parent: VR
  order: 3

image: /img/avatar.png
description: "A short guide to validating your SteamVR driver installation for SlimeVR."
---

# {{ title }}

<style>
.file-drop {
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100px;
  padding: 5px;
  border: 5px dashed #666;
}

.file-drop:hover {
  border-color: #bbb;
}
</style>

## Verify

If you aren't sure whether you have the latest driver version, you can check easily. If you go to `C:\Program Files (x86)\Steam\steamapps\common\SteamVR\drivers\slimevr\bin\win64\`, you should find `driver_slimevr.dll`.

### Drag and drop or select `driver_slimevr.dll` in the input below

<input class="file-drop" type="file" id="file-input">
<p id="driver-version">Select a file to detect the version...</p>

<script>
async function sha256(file) {
  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

const driverVersionMap = {
  '993b5680f80319cc92f57fca057be8fee3dc73e500891fbd99bee292861975ee': 'v0.2.2 (latest)',
  '6bdd2fdf4a52a008dd5c27639f52a9cb32126d2e945f34c4757ae281957e529e': 'v0.2.1',
  '29890c5512d4648a70cb666528ad558acab0aea064c26eabe8658a5f6b78e956': 'v0.2.0',
  'd3cb0d1b55fecb873fcce9922a84bfb0297b5c9ce5a6df495ea997f1f86e4139': 'v0.1.1',
  '731553e540c14d6c42e42e8bcf79af00b14d8523f34147f9175ae55027a28706': 'v0.1.0',
  '09b16c05b3733ac463f47ce83277d92593384499cd4cea4db939e5f411691a12': 'v0.0.3',
  '16c4095e4c9ef5a61c958c932869260db0549de24754a211ebb4c54a6e405f90': 'v0.0.2',
  '57215ad4038454f8f88e546d3ab3430816141c68470ee01002c46c7f6c63b74d': 'v0.0.1',
};

const fileInput = document.getElementById('file-input');
const driverVersion = document.getElementById('driver-version');

fileInput.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (file == undefined) return;

  const hashHex = await sha256(file);
  console.log('SteamVR driver hash:', hashHex);

  const detectedVersion = driverVersionMap[hashHex] ?? 'Unknown';
  driverVersion.innerHTML = `SHA-256 Hash: ${hashHex}<br>Driver version: ${detectedVersion}`;
});
</script>

## Automatically install

To install the driver automatically, you can just use the SlimeVR installer, which you can find at <https://slimevr.dev/download>.

## Manually install

1. Download the latest SteamVR driver release for Windows (`slimevr-openvr-driver-win64.zip`) at <https://github.com/SlimeVR/SlimeVR-OpenVR-Driver/releases/latest>.
2. Copy the `slimevr` folder from `slimevr-openvr-driver-win64.zip` to `C:\Program Files (x86)\Steam\steamapps\common\SteamVR\drivers\` and overwrite all if necessary.
   - It should end up as `C:\Program Files (x86)\Steam\steamapps\common\SteamVR\drivers\slimevr\` with `driver.vrdrivermanifest`, `bin`, `resources`, etc.
