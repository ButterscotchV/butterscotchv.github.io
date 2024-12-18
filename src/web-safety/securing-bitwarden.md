---
layout: layouts/page.njk
title: Securing Bitwarden

eleventyNavigation:
  key: Securing Bitwarden
  parent: Web Safety
  order: 1

image: /img/lock_icon.png
description: "A guide to making Bitwarden more secure."
---
{% include "photoswipe.njk" %}
{% import "photoswipe.njk" as ps %}

# {{ title }}

## Introduction

In light of the [security incident involving LastPass](https://blog.lastpass.com/2022/12/notice-of-recent-security-incident/), the importance of ensuring the security of password managers has come to the forefront. This guide will provide steps to enhance the security of your Bitwarden vault in accordance with the latest recommendations.

## Increasing the number of PBKDF2 iterations

[Reference Bitwarden documentation](https://bitwarden.com/help/what-encryption-is-used/#changing-kdf-iterations)

### Why should I change it?

In order to align with the guidelines outlined in the [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#pbkdf2), it is recommended to increase the number of PBKDF2 iterations to a minimum of 600,000. While Bitwarden has recently increased the default iterations for new accounts, this change does not apply retroactively. It is possible that your account may still have the previous default of 100,000 iterations or lower set if you created it before they implemented these changes. To ensure the security of your account, it is important to review and update the PBKDF2 iterations accordingly. Alternatively, Argon2id is also available, providing a more secure algorithm at the cost of a bit of performance.

### How do I change it?

To enhance the security of your account by increasing the PBKDF2 iterations, navigate to the encryption key settings page under **Account Settings → Security → Keys** on the [Bitwarden Web Vault](https://vault.bitwarden.com/). Here, you can adjust the "**KDF iterations**" value to either the recommended minimum value of 600,000 or your desired setting.

<div class="pswp-gallery is-flex is-gap-1">
{{ ps.image(url='/img/web-safety/PBKDF2-iter-settings-0.png', width='1024', height='855', thumb_width='500', alt='An image illustrating where the settings page is for security keys.') }}
{{ ps.image(url='/img/web-safety/PBKDF2-iter-settings-0-1.png', width='1024', height='855', thumb_width='500', alt='An image illustrating where to set the number of PBKDF2 iterations.') }}
</div>

## Automatically clearing the clipboard

### Why should I enable it?

Enabling the automatic clipboard clearing feature of a password manager is an important security measure.

This feature automatically clears the clipboard after a certain period of time to prevent sensitive information, such as passwords, from being accidentally or maliciously copied and pasted into other applications. This can help to protect against common forms of cyber attacks, such as keylogging and clipboard hijacking, which can be used to steal personal information and gain unauthorized access to accounts.

Additionally, it can also prevent others from viewing sensitive information on your device if it is lost, stolen, or shared. Enabling this feature can help to keep your passwords and other sensitive information secure and protect you from potential security breaches.

### How do I enable it?

To activate the automatic clipboard clearing feature for the various Bitwarden apps, please refer to the instructions provided for each below:

<!-- no toc -->
- [Bitwarden Browser Extension](#browser-extension)
- [Bitwarden Desktop App (Windows)](#desktop-app-windows)
- [Bitwarden Mobile App (Android)](#mobile-app-android)

### Browser Extension

<div class="pswp-gallery is-flex is-gap-1">
{{ ps.image(url='/img/web-safety/clipboard-settings-0.png', width='389', height='614', thumb_width='300', alt='An image illustrating where the settings page is for automatically clearing the clipboard on the Bitwarden browser extension.') }}
{{ ps.image(url='/img/web-safety/clipboard-settings-0-1.png', width='389', height='614', thumb_width='300', alt='An image illustrating where to change the setting for automatically clearing the clipboard on the Bitwarden browser extension.') }}
</div>

### Desktop App (Windows)

<div class="pswp-gallery is-flex is-gap-1">
{{ ps.image(url='/img/web-safety/clipboard-settings-1.png', width='897', height='614', thumb_width='500', alt='An image illustrating where the settings page is for automatically clearing the clipboard on the Bitwarden desktop app.') }}
{{ ps.image(url='/img/web-safety/clipboard-settings-1-1.png', width='897', height='614', thumb_width='500', alt='An image illustrating where to change the setting for automatically clearing the clipboard on the Bitwarden desktop app.') }}
</div>

### Mobile App (Android)

<div class="pswp-gallery is-flex is-gap-1">
{{ ps.image(url='/img/web-safety/clipboard-settings-2.png', width='1080', height='2340', thumb_width='250', alt='An image illustrating where the settings page is for automatically clearing the clipboard on the Bitwarden mobile app.') }}
{{ ps.image(url='/img/web-safety/clipboard-settings-2-1.png', width='1080', height='2340', thumb_width='250', alt='An image illustrating where to change the setting for automatically clearing the clipboard on the Bitwarden mobile app.') }}
</div>

## See Also

- <https://palant.info/2023/01/23/bitwarden-design-flaw-server-side-iterations/>
- <https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#pbkdf2>
- <https://www.ghacks.net/2023/01/31/bitwarden-to-increase-its-server-side-iterations-to-600000-heres-how-to-set-it-manually/>
