---
layout: page
title: Web Safety

has_children: true
has_toc: false

nav_order: 2
image: /img/lock_icon.png
description: "A guide to being safer with your passwords and accounts"
---

# Introduction
For basic web safety, you should use a password manager to keep your passwords safe.

This guide will teach you how to make using a password manager as easy as using the password storage included within the browser.

## Don't store passwords with a browser
Don't store passwords in your browser's password storage! If your browser doesn't require a password or biometrics to access your stored passwords, then any program on your computer will be able to access your passwords and steal them within a fraction of a second.

A password manager can work just as easily as your browser's, but provides an additional layer of security for when a data breach occurs.

### Why not use my browser?
When you store your passwords in your browser, they are stored in something called a ["Data Protection API," or DPAPI](https://en.wikipedia.org/wiki/Data_Protection_API). While that sounds secure just from the name, it's simple to access. When stored within this database, the passwords are encrypted by a key that can be read easily and automatically by any program, as the key is basically stored in a text file on your computer at a location that is very well known. This means that the passwords can be stolen **very** easily.

## So why use a password manager instead?
A password manager is an app or program dedicated to storing and creating passwords outside a browser, secured with a master password that you create. Essentially, this means you only need to remember ***one*** strong password to log in to all your accounts. The manager can create incredibly strong, randomized passwords for each account, so no account ever has the same password as another one, meaning that if one is compromised somehow, it can't affect any other site or service. Because the manager requires a password to access all of your information, one that only you know, it can't be read by any other program.

If you're reluctant to use a password manager because you don't want to copy and paste all the information into your browser, don't worry, that isn't an issue. Most managers will have a browser extension that can paste the username and password for you, just like your browser would.

# What are my options?
Within the [options section](#options) is a list of password managers with a small snippet about each one. You can make your own judgement about what option you would like to use, but it's important to consider all of your options and what pros and cons they may have.

# What more can I do?
For a second layer of protection, you can use [multi-factor authentication](mfa.md), also known as Two-Factor Authentication (or 2FA) using an app that generates a random passcode every 30 seconds. This makes it very difficult for someone to log into your account without having physical access to your phone.

# Options
## Bitwarden
Bitwarden is by far my favourite. It's free (with an *optional* subscription for a very low price), open source, and it's fairly easy to use.

<https://bitwarden.com/>

[Beginners Guide](https://mshelton.medium.com/bitwarden-for-beginners-74cf93679457)

## Enpass
Enpass is free and lets you store your passwords on your own computer instead of on the cloud, this allows you to choose who and what you trust with your data.

<https://www.enpass.io/>

## 1Password
1Password requires a subscription to use but it's worth what you pay for it.

<https://1password.com/>

[Beginners Guide](https://mshelton.medium.com/introduction-to-password-managers-5e15baa8b26e)

## LastPass
LastPass is only *partially* free. You are restricted to using only one device "type" with the free plan, either PC or mobile. If you wish to use this service, you should consider that LastPass has many issues in the company itself, you can look at the top of the beginners guide for more information.

<https://www.lastpass.com/>

[Beginners Guide](https://mshelton.medium.com/lastpass-for-beginners-e921f35d4114)

# See Also
 - <https://mshelton.medium.com/password-managers-for-beginners-d1f49866f80f>
