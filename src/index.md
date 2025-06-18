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
<div class="card profile-card">
    <div class="card-image">
        <div class="pswp-gallery">
        {{ ps.image(url='/img/butterscotch.jpg', width='2000', height='2000', thumb_width='400', alt='An icon of my skunk character Butterscotch.') }}
        </div>
    </div>
    <div class="card-content">
        <div class="content">
            Welcome to my homepage, I'm Butterscotch!
        </div>
    </div>
</div>
</div>
<div class="column">

<div class="card mb-4">
    <header class="card-header">
        <p class="card-header-title is-justify-content-center">
        Social/Work Accounts
        </p>
    </header>
    <footer class="card-footer is-nowrap is-flex-wrap-wrap">
        <a class="card-footer-item" href="https://github.com/ButterscotchV" target="_blank" rel="noopener">GitHub</a>
    </footer>
</div>

<div class="card">
    <header class="card-header">
        <p class="card-header-title is-justify-content-center">
        Art Accounts (18+)
        </p>
    </header>
    <footer class="card-footer is-nowrap is-flex-wrap-wrap">
        <a class="card-footer-item" href="https://bsky.app/profile/butterscotchv.bsky.social" target="_blank" rel="noopener">Bluesky (Feed)</a>
        <a class="card-footer-item" href="https://itaku.ee/profile/butterscotch" target="_blank" rel="noopener">Itaku (Gallery)</a>
    </footer>
</div>

</div>
</div>
