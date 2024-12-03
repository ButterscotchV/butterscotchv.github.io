---
layout: layouts/page.njk
title: VR

center_section: false

eleventyNavigation:
  key: VR
  order: 2

image: /img/avatar.png
description: "Stuff about VR"
---

# {{ title }}

This section covers various VR topics.

{{ collections.all | eleventyNavigation("VR") | eleventyNavigationToMarkdown | safe }}
