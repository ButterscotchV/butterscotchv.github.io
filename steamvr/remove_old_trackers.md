---
layout: page
title: Removing old trackers entries

parent: SteamVR

has_children: false
has_toc: false

nav_order: 0
description: "How to remove old trackers from the SteamVR config"
---

You can find the list of trackers at the bottom of the SteamVR config file `steamvr.vrsettings` in the SteamVR config folder (which can generally be found at `C:\Program Files (x86)\Steam\config\steamvr.vrsettings`).

The list will look something like this:
```json
"trackers" : {
   "/devices/SlimeVR/human://LEFT_FOOT" : "TrackerRole_LeftFoot",
   "/devices/SlimeVR/human://LEFT_KNEE" : "TrackerRole_LeftKnee",
   "/devices/SlimeVR/human://RIGHT_FOOT" : "TrackerRole_RightFoot",
   "/devices/SlimeVR/human://RIGHT_KNEE" : "TrackerRole_RightKnee",
   "/devices/slimevr/human://CHEST" : "TrackerRole_Chest",
   "/devices/slimevr/human://LEFT_FOOT" : "TrackerRole_LeftFoot",
   "/devices/slimevr/human://LEFT_KNEE" : "TrackerRole_LeftKnee",
   "/devices/slimevr/human://RIGHT_FOOT" : "TrackerRole_RightFoot",
   "/devices/slimevr/human://RIGHT_KNEE" : "TrackerRole_RightKnee",
   "/devices/slimevr/human://WAIST" : "TrackerRole_Waist"
}
```

You can remove whatever entries you no longer want, making sure you keep a comma at the end of each line except the last one, for example:
```json
"trackers" : {
   "/devices/slimevr/human://CHEST" : "TrackerRole_Chest",
   "/devices/slimevr/human://WAIST" : "TrackerRole_Waist"
}
```

Or you can remove all the trackers like so:
```json
"trackers" : {}
```

Now when you start SteamVR, you should no longer have those trackers showing up in the list.
