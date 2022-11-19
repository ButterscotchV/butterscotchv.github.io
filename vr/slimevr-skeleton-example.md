---
layout: page
title: SlimeVR skeleton example

parent: VR

has_children: false
has_toc: false

nav_order: 1
image: /img/avatar.png
description: "An example of how SlimeVR uses tracker rotations"
---

# Introduction

SlimeVR uses forward kinematics to derive a position of a point on your body from tracker rotations. Games generally use inverse kinematics to get the rotations for their skeleton to match the position of a SteamVR tracker.

## To summarize:

1. Forward kinematics (SlimeVR) -> Rotations to positions
2. SlimeVR -> SteamVR
3. Inverse kinematics (SteamVR/Games) -> Positions to rotations

# Illustration

## Physical trackers

The images below illustrate wearing two physical trackers, a chest tracker mounted on the front and a hip tracker mounted on the back. These trackers are the input data for SlimeVR.

Note: The input does not include the skeleton, the outline is purely for illustrative purposes.

![An image of Amber wearing SlimeVR trackers, side view]({{ site.url }}/img/vr/slime-skeleton-0.png)
![An image of Amber wearing SlimeVR trackers, angled view]({{ site.url }}/img/vr/slime-skeleton-0-1.png)

## SlimeVR server internal skeleton

The images below illustrate the internal skeleton of SlimeVR calculated from the rotational data from the two SlimeVR trackers and a resulting SteamVR waist tracker attached to the bottom of the skeleton's hip bone. The rotation of the chest tracker is used for the top bone of the spine and the rotation of the hip tracker is used for the bottom bone of the spine.

![An image of a SlimeVR skeleton with SlimeVR trackers and a SteamVR tracker on the waist, side view]({{ site.url }}/img/vr/slime-skeleton-1.png)
![An image of a SlimeVR skeleton with SlimeVR trackers and a SteamVR tracker on the waist, angled view]({{ site.url }}/img/vr/slime-skeleton-1-1.png)

## SteamVR output

The images below illustrate the resulting SteamVR waist tracker. This tracker is the output data from SlimeVR and is what is seen in SteamVR and games.

Note: The output does not include the skeleton, the outline is purely for illustrative purposes.

![An image of a SteamVR tracker, side view]({{ site.url }}/img/vr/slime-skeleton-2.png)
![An image of a SteamVR tracker, angled view]({{ site.url }}/img/vr/slime-skeleton-2-1.png)

# Credit

The cases used for the illustration of SlimeVR trackers is the [Hyperion case (https://github.com/Smeltie/Hyperion)](https://github.com/Smeltie/Hyperion) by Smeltie.
