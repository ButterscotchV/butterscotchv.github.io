---
layout: layouts/page.njk
title: Suits

center_section: false

eleventyNavigation:
  key: Suits
  order: 5

image: /img/avatar.png
description: "My fursuits."
---

# {{ title }}

{{ collections.all | eleventyNavigation("Suits") | eleventyNavigationToMarkdown | safe }}
