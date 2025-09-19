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
  '29fe644aff7de9482ff20a587737ea72c38490bf6b9c03908832bcfd75c79486': 'v0.3.0 (latest)',
  'ccb944533d1181ac16686f72ed35d955fb45be860726578c4e54ebbeb46b7c30': 'v0.3.0 [ZIP] (latest)',
  'd8db97299be6fae513decd3897d616ecc970d79f5af0e96994b070d3e9312627': 'v0.3.0 [Linux] (latest)',
  'b829acf8cb3637ccff586bd691d00dedc46f2fca5a809634db2421c4fc882acd': 'v0.3.0 [Linux ZIP] (latest)',

  'f7320b12521bd614d9f429ad68a3aad25d2db84f4e9fee751371a18a96023351': 'v0.3.0-rc.2',
  'f2bc4faeeb41704cbcfd43eca5f015dd2f4829bc5283641224a682da6c66ce7d': 'v0.3.0-rc.2 [ZIP]',
  'd8db97299be6fae513decd3897d616ecc970d79f5af0e96994b070d3e9312627': 'v0.3.0-rc.2 [Linux]',
  '0b419cbeab319575f77c0482671b315bf4e872af3d1333c25785485ed2a4f445': 'v0.3.0-rc.2 [Linux ZIP]',

  'd5a6cb9b6c719338943010b223772d561c335d153b6626d3f2b32eadd38e3404': 'v0.3.0-rc.1',
  '34a018fa23b873ba59644cc0db95922090c47afea1c6e14d1b5bfed69044bbe6': 'v0.3.0-rc.1 [ZIP]',
  'e657a6490822e80e725b32ab6eb8a24d9acb378c72b467c815eabe722fcdb381': 'v0.3.0-rc.1 [Linux]',
  'fdb0be218f3936f0b2bf1868f4ac575212a69d7d604f0a29e43ed28bfcba2d7e': 'v0.3.0-rc.1 [Linux ZIP]',

  '993b5680f80319cc92f57fca057be8fee3dc73e500891fbd99bee292861975ee': 'v0.2.2',
  'fafd83e217e014b2c393330a242239fd96de63cf8c86cd98b901c79105e826cb': 'v0.2.2 [ZIP]',
  '582891cb1bbc8de4d2eb5cddded675f4e09173ee556f9d72fa8cf43a83be87f9': 'v0.2.2 [Linux]',
  '8323830c7f78422e4046e51445caf32c44e47c808be72f3c357c59a59bd7b975': 'v0.2.2 [Linux ZIP]',

  '63981b12149f12d14d6b56e9fab214ccadadd76c6b29463f518969df8d44bfef': 'v0.2.2-rc.1 [Linux]',
  '08cb687c06f54279a7c82ddaf4db350fc01994f922d589cd479667ef9b936550': 'v0.2.2-rc.1 [Linux ZIP]',

  '6bdd2fdf4a52a008dd5c27639f52a9cb32126d2e945f34c4757ae281957e529e': 'v0.2.1',
  'f2c62a59738c7ea77a26bc8ea696910901a8c46da30668e33a10da711e4f0118': 'v0.2.1 [ZIP]',
  'fc8708d86c2819ad6405f8f8b5b12d2651ef2232ff33fa95b33e479558cffa4f': 'v0.2.1 [Linux]',
  'e469baae5565a5d7060390061f9edb290b7d1fff48039dc514bf2b4e2940ab87': 'v0.2.1 [Linux ZIP]',

  '29890c5512d4648a70cb666528ad558acab0aea064c26eabe8658a5f6b78e956': 'v0.2.0',
  'ccef93d9e7a653bb59c8a4377b7d05db058416ca40d404b150bf6812c484e568': 'v0.2.0 [ZIP]',

  'd3cb0d1b55fecb873fcce9922a84bfb0297b5c9ce5a6df495ea997f1f86e4139': 'v0.1.1',
  'e984cf393aa6f03031a88e5824b0ef51750cc851b20a48c473b371343c4c6a20': 'v0.1.1 [ZIP]',

  '731553e540c14d6c42e42e8bcf79af00b14d8523f34147f9175ae55027a28706': 'v0.1.0',
  'fb427f0e9bd6670e64c6ccc07e32c5181515c2c5c3288afe50b217affb60da7a': 'v0.1.0 [ZIP]',

  '09b16c05b3733ac463f47ce83277d92593384499cd4cea4db939e5f411691a12': 'v0.0.3',
  'ef0aa8ce9d944801e8d0671d9ddd6f6c71a47a24edaae30815fbf3478866e514': 'v0.0.3 [ZIP]',

  '16c4095e4c9ef5a61c958c932869260db0549de24754a211ebb4c54a6e405f90': 'v0.0.2',
  '6ed614157b24ca00896c2885e5dfb316f11a4e3975e2838507bebe557fedd1b6': 'v0.0.2 [ZIP]',

  '57215ad4038454f8f88e546d3ab3430816141c68470ee01002c46c7f6c63b74d': 'v0.0.1',
  '2a0ccb63efa8fff47d14934df0544d2c7811bcad46bd467fd7201211e2e1d8c2': 'v0.0.1 [ZIP]',
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
