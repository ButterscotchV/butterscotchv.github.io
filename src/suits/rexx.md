---
layout: layouts/page.njk
title: REXX

eleventyNavigation:
  key: REXX
  parent: Suits
  order: 0

image: /img/avatar.png
description: "REXX fursuit info."
---
{% include "photoswipe.njk" %}
{% import "photoswipe.njk" as ps %}

# {{ title }}

<div class="columns">
<div class="column is-narrow">
<div class="card profile-card">
    <div class="card-image">
        <div class="pswp-gallery">
        {{ ps.image(url='/img/suits/rexx.jpg', width='638', height='638', thumb_width='400', alt='A photo of my fursuit of the character REXX.') }}
        </div>
    </div>
    <div class="card-content">
        <div class="content">
            Hello, I'm REXX, a protogen research unit associated with Butterscotch!
        </div>
    </div>
</div>

<div class="card profile-card">
    <header class="card-header">
        <p class="card-header-title is-justify-content-center">
        Unit Information
        </p>
    </header>
    <div class="card-content">
        <div class="content">
            This REXX unit is equipment owned and operated by REXX Research. Vocal capabilities of this unit are extremely limited; communication by hand gestures and/or text is advised. Visual capabilities of this unit are restricted, remain directly in front of the unit to establish visual contact.
        </div>
    </div>
</div>

</div>
<div class="column">

<div class="card">
    <header class="card-header">
        <p class="card-header-title is-justify-content-center">
        Operating Policy
        </p>
    </header>
    <div class="card-content">
        <div class="content">
            <ul>
                <li>Please be gentle with our research equipment, some parts may be fragile. Always remember to ask before initiating physical contact to ensure mutual safety and comfort.</li>
                <li>You may request physical contact or photography of our equipment, we love enthusiasm towards our field! Keep in mind that our equipment has limited communicative capabilities, so please be patient.</li>
                <li>For best results with communication, try to ask questions that may be answered with hands gesture rather than through text or speech; questions that may be answered with "yes" or "no" yield the best results.</li>
            </ul>
        </div>
    </div>
</div>

<div class="card">
    <header class="card-header">
        <p class="card-header-title is-justify-content-center">
        Components
        </p>
    </header>
    <footer class="card-footer is-nowrap is-flex-wrap-wrap">
        <a class="card-footer-item" href="https://t.me/Azulisplash/" target="_blank" rel="noopener">Head (@Azulisplash on Telegram)</a>
        <a class="card-footer-item" href="https://howlmetalhorrors.com/" target="_blank" rel="noopener">Tail (Howlmetal Horrors)</a>
    </footer>
</div>

<div class="card">
    <header class="card-header">
        <p class="card-header-title is-justify-content-center">
        Company Information
        </p>
    </header>
    <div class="card-content">
        <div class="content">
            REXX Research is working for you; the future of earth is a <b>Reactive Earth</b>! Our innovative REXX scientific programming language enables reliable research in unreliable environments, providing unprecedented access to space and beyond!
        </div>
    </div>
</div>

</div>
</div>
