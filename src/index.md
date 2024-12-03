---
layout: layouts/page.njk
title: Home

eleventyNavigation:
  key: Home
  order: 0

image: /img/avatar.png
---
{% include "photoswipe.njk" %}
{% import "photoswipe.njk" as ps %}

# {{ title }}

<div class="columns">
<div class="column is-narrow">
<div class="pswp-gallery">
{{ ps.image(url='/img/butterscotch.jpg', width='2000', height='2000', thumb_width='300', alt='An icon of my skunk character Butterscotch.') }}
</div>

Welcome to my homepage, I'm Butterscotch!

</div>
<div class="column">

## Social/Work Accounts

* [GitHub](https://github.com/ButterscotchV)

## Art Accounts (18+)

* [Bluesky (Feed)](https://bsky.app/profile/butterscotchv.bsky.social)
* [Itaku (Gallery)](https://itaku.ee/profile/butterscotch)

</div>
</div>
