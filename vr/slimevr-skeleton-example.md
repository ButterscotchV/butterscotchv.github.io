---
layout: page
title: SlimeVR Skeleton Example

parent: VR

has_children: false
has_toc: false

nav_order: 1
image: /img/avatar.png
description: "An example of how SlimeVR uses tracker rotations"
---

# SlimeVR Skeleton Example {#slimevr-skeleton-example}

## Introduction {#introduction}

SlimeVR uses forward kinematics to calculate the position of a point on your body based on the rotations of a SlimeVR tracker. Inverse kinematics is typically used by games to calculate the rotations of a virtual skeleton to match the position of a SteamVR tracker.

### To summarize {#summary}

1. SlimeVR tracker rotations -> SlimeVR Server
2. Forward kinematics (SlimeVR) -> Rotations to positions
3. SlimeVR Server positions -> SteamVR
4. Inverse kinematics (SteamVR/Games) -> Positions to rotations

## Illustration {#illustration}

### Physical trackers {#physical-trackers}

The images below illustrate wearing two physical trackers, a chest tracker mounted on the front and a hip tracker mounted on the back. These trackers are the input data for SlimeVR.

_Note: The input does not include the skeleton, the outline is purely for illustrative purposes._

_Click on an image to view it larger_
<div class="pswp-gallery">
{% include photoswipe_image.html url='/img/vr/slime-skeleton-0.png' width='327' height='544' thumb_width='300' alt='An image of Amber wearing SlimeVR trackers, side view' %}
{% include photoswipe_image.html url='/img/vr/slime-skeleton-0-1.png' width='327' height='544' thumb_width='300' alt='An image of Amber wearing SlimeVR trackers, angled view' %}
</div>

### SlimeVR server internal skeleton {#slimevr-server-internal-skeleton}

The images below illustrate the internal skeleton of SlimeVR calculated from the rotational data from the two SlimeVR trackers and a resulting SteamVR waist tracker attached to the bottom of the skeleton's hip bone. The rotation of the chest tracker is used for the top bone of the spine and the rotation of the hip tracker is used for the bottom bone of the spine.

_Note: The illustrated skeleton does not accurately represent the skeleton used for SlimeVR, it is an artistic approximation._

_Click on an image to view it larger_
<div class="pswp-gallery">
{% include photoswipe_image.html url='/img/vr/slime-skeleton-1.png' width='327' height='544' thumb_width='300' alt='An image of a SlimeVR skeleton with SlimeVR trackers and a SteamVR tracker on the waist, side view' %}
{% include photoswipe_image.html url='/img/vr/slime-skeleton-1-1.png' width='327' height='544' thumb_width='300' alt='An image of a SlimeVR skeleton with SlimeVR trackers and a SteamVR tracker on the waist, angled view' %}
</div>

### SteamVR output {#steamvr-output}

The images below illustrate the resulting SteamVR waist tracker. This tracker is the output data from SlimeVR and is what is seen in SteamVR and games.

_Note: The output does not include the skeleton, the outline is purely for illustrative purposes._

_Click on an image to view it larger_
<div class="pswp-gallery">
{% include photoswipe_image.html url='/img/vr/slime-skeleton-2.png' width='327' height='544' thumb_width='300' alt='An image of a SteamVR tracker, side view' %}
{% include photoswipe_image.html url='/img/vr/slime-skeleton-2-1.png' width='327' height='544' thumb_width='300' alt='An image of a SteamVR tracker, angled view' %}
</div>

## Credit {#credit}

The cases used for the illustration of SlimeVR trackers are the [Hyperion cases (https://github.com/Smeltie/Hyperion)](https://github.com/Smeltie/Hyperion "Hyperion case GitHub page") by Smeltie and contributors as listed on the GitHub page.
