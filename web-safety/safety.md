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

For basic web safety, it's important to use a password manager to keep your passwords safe. This guide will show you how to use a password manager easily, just like your browser's password storage.

## Don't store passwords with a browser

Browsers often have a feature that allows you to store your passwords for easy access. However, this is not a very safe way to store your passwords. If your browser doesn't require a password or biometrics to access your stored passwords, any program on your computer can access and steal your passwords within seconds.

A password manager is a better option because it provides additional security in case of a data breach. It works just as easily as your browser's password storage, but it uses a different method to keep your passwords safe.

### Why not use my browser?

When you store your passwords in your browser, they are encrypted using something called the ["Data Protection API," or DPAPI](https://en.wikipedia.org/wiki/Data_Protection_API). This sounds secure, but it's actually easy for attackers to access. The passwords are encrypted using a key that is stored in a well-known location on your computer. This means that any program can easily read and use the key to access your passwords. In other words, your passwords are not very safe when you store them in your browser.

## So why use a password manager instead?

A password manager is an app or program that stores and creates passwords outside of your browser. It uses a master password that you create to encrypt your passwords, so you only need to remember **_one_** strong password to log in to all your accounts. The password manager can also create strong, unique passwords for each account, so no account ever has the same password as another one. This means that if one account is compromised, it can't affect any other site or service. Because the password manager requires a password to access all your information, one that only you know, it can't be read by any other program.

If you're hesitant to use a password manager because you don't want to copy and paste all the information into your browser, most password managers have a browser extension that can paste the username and password for you, just like your browser would.

# What are my options?

In the [options section](#options), we provide a list of password managers with a brief description of each one. You can decide which one you want to use based on your own preferences, but it's important to consider all your options and their pros and cons.

# What more can I do?

For extra protection, you can use [Multi-Factor Authentication (MFA)](mfa.md), also known as Two-Factor Authentication (or 2FA). This is a method that uses an app to generate a random passcode every 30 seconds. This makes it very difficult for someone to log into your account without having physical access to your phone.

# Options

## Bitwarden

Bitwarden is by far my favourite. It's free (with an _optional_ subscription for a very low price), open source, and it's fairly easy to use.

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

LastPass is only _partially_ free. You are restricted to using only one device "type" with the free plan, either PC or mobile. If you wish to use this service, you should consider that LastPass has many issues in the company itself, you can look at the top of the beginners guide for more information.

<https://www.lastpass.com/>

[Beginners Guide](https://mshelton.medium.com/lastpass-for-beginners-e921f35d4114)

# See Also

- <https://mshelton.medium.com/password-managers-for-beginners-d1f49866f80f>
