---
layout: page
title: Securing Bitwarden

parent: Web Safety

nav_order: 1
image: /img/lock_icon.png
description: "A guide to setting up multi-factor authentication (MFA)"
---

## Securing Bitwarden introduction

Due to the recent LastPass vault breach, there has been a clear focus on password manager security, this has lead to the discovery of a couple issues with Bitwarden. This guide shows how to improve the security of your Bitwarden vault given the new recommendations.

## Increasing the number of PBKDF2 iterations

[Reference Bitwarden documentation](https://bitwarden.com/help/what-encryption-is-used/#changing-kdf-iterations)

Following the security recommendations of the [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#pbkdf2), you're recommended to increase the PBKDF2 iterations from the default of 350,000 to 600,000. Though the default of Bitwarden has been getting increased, it doesn't apply retroactively, so you may still have it set to 100,000 on your account from the previous default.

To increase the PBKDF2 iterations, you can go to the key security settings page under **Account Settings → Security → Keys** on the [Bitwarden Web Vault](https://vault.bitwarden.com/) and change the value of "**KDF iterations**".

<div class="pswp-gallery">
{% include photoswipe_image.html url='/img/web-safety/PBKDF2-iter-settings-0.png' width='1024' height='855' thumb_width='300' alt='An image illustrating where the settings page is for security keys' %}
{% include photoswipe_image.html url='/img/web-safety/PBKDF2-iter-settings-0-1.png' width='1024' height='855' thumb_width='300' alt='An image illustrating where to set the number of PBKDF2 iterations' %}
</div>

## Automatically clearing the clipboard

Clearing the clipboard after copying a password is important, here are instructions for the different apps:

<!-- no toc -->
- [Browser Extension](#browser-extension)
- [Desktop App (Windows)](#desktop-app-windows)
- [Mobile App (Android)](#mobile-app-android)

### Browser Extension

<div class="pswp-gallery">
{% include photoswipe_image.html url='/img/web-safety/clipboard-settings-0.png' width='389' height='614' thumb_width='300' alt='An image illustrating where the settings page is for automatically clearing the clipboard on the Bitwarden browser extension' %}
{% include photoswipe_image.html url='/img/web-safety/clipboard-settings-0-1.png' width='389' height='614' thumb_width='300' alt='An image illustrating where to change the setting for automatically clearing the clipboard on the Bitwarden browser extension' %}
</div>

### Desktop App (Windows)

<div class="pswp-gallery">
{% include photoswipe_image.html url='/img/web-safety/clipboard-settings-1.png' width='897' height='614' thumb_width='300' alt='An image illustrating where the settings page is for automatically clearing the clipboard on the Bitwarden desktop app' %}
{% include photoswipe_image.html url='/img/web-safety/clipboard-settings-1-1.png' width='897' height='614' thumb_width='300' alt='An image illustrating where to change the setting for automatically clearing the clipboard on the Bitwarden desktop app' %}
</div>

### Mobile App (Android)

<div class="pswp-gallery">
{% include photoswipe_image.html url='/img/web-safety/clipboard-settings-2.png' width='1080' height='2340' thumb_width='300' alt='An image illustrating where the settings page is for automatically clearing the clipboard on the Bitwarden mobile app' %}
{% include photoswipe_image.html url='/img/web-safety/clipboard-settings-2-1.png' width='1080' height='2340' thumb_width='300' alt='An image illustrating where to change the setting for automatically clearing the clipboard on the Bitwarden mobile app' %}
</div>

## See Also

- <https://palant.info/2023/01/23/bitwarden-design-flaw-server-side-iterations/>
- <https://community.bitwarden.com/t/increasing-the-default-number-of-pbkdf2-for-existing-accounts/49550>
- <https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#pbkdf2>
- <https://github.com/bitwarden/server/issues/589>
