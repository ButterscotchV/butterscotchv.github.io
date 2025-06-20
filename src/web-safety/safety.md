---
layout: layouts/page.njk
title: Web Safety

eleventyNavigation:
  key: Web Safety
  order: 1

image: /img/lock_icon.png
description: "A guide to being safer with your passwords and accounts."
---

# {{ title }}

## Introduction

For basic web safety, it's important to use a password manager to keep your passwords safe. This guide will show you how to use a password manager easily, just like your browser's password storage.

### Don't store passwords with a browser

Browsers often have a feature that allows you to store your passwords for easy access. However, this is not a very safe way to store your passwords. If your browser doesn't require a password or biometrics to access your stored passwords, any program on your computer can access and steal your passwords within seconds.

A password manager is a better option because it provides additional security in case of a data breach. It works just as easily as your browser's password storage, but it uses a different method to keep your passwords safe.

#### Why not use my browser?

When you store your passwords in your browser, they are encrypted using something called the ["Data Protection API," or DPAPI](https://en.wikipedia.org/wiki/Data_Protection_API). This sounds secure, but it's actually easy for attackers to access. The passwords are encrypted using a key that is stored in a well-known location on your computer. This means that any program can easily read and use the key to access your passwords. In other words, your passwords are not very safe when you store them in your browser.

### So why use a password manager instead?

A password manager is an app or program that stores and creates passwords outside of your browser. It uses a master password that you create to encrypt your passwords, so you only need to remember **_one_** strong password to log in to all your accounts. The password manager can also create strong, unique passwords for each account, so no account ever has the same password as another one. This means that if one account is compromised, it can't affect any other site or service. Because the password manager requires a password to access all your information, one that only you know, it can't be read by any other program.

If you're hesitant to use a password manager because you don't want to copy and paste all the information into your browser, most password managers have a browser extension that can paste the username and password for you, just like your browser would.

## What are my options?

In this section, we provide a list of password managers with a brief description of each one. You can decide which one you want to use based on your own preferences, but it's important to consider all your options and their pros and cons.

<div class="columns is-multiline">
<div class="column is-half">
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">Bitwarden</p>
        </header>
        <div class="card-content">
            <div class="content">
                Bitwarden is a free, open-source password manager that works on all major platforms and browsers. It offers secure password storage, sharing, and autofill, with optional premium features.
                <br>
                <br>
                See also: <a href="securing-bitwarden.md">Securing Bitwarden</a>
            </div>
        </div>
        <footer class="card-footer is-nowrap is-flex-wrap-wrap">
            <a class="card-footer-item" href="https://bitwarden.com/" target="_blank" rel="noopener">Website</a>
            <a class="card-footer-item" href="https://mshelton.medium.com/bitwarden-for-beginners-74cf93679457" target="_blank" rel="noopener">Beginners Guide</a>
            <a class="card-footer-item" href="https://bitwarden.com/help/" target="_blank" rel="noopener">Help Center</a>
        </footer>
    </div>
</div>

<div class="column is-half">
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">Proton Pass</p>
        </header>
        <div class="card-content">
            <div class="content">
                Proton Pass is a password manager from the makers of Proton Mail. It offers end-to-end encryption, a clean and simple interface, and is available on desktop, mobile, and as a browser extension. Proton Pass can store passwords, notes, and email aliases, and is designed with privacy in mind.
            </div>
        </div>
        <footer class="card-footer is-nowrap is-flex-wrap-wrap">
            <a class="card-footer-item" href="https://proton.me/pass" target="_blank" rel="noopener">Website</a>
        </footer>
    </div>
</div>

<div class="column is-half">
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">Enpass</p>
        </header>
        <div class="card-content">
            <div class="content">
                Enpass is free and lets you store your passwords on your own computer instead of on the cloud, this allows you to choose who and what you trust with your data.
            </div>
        </div>
        <footer class="card-footer is-nowrap is-flex-wrap-wrap">
            <a class="card-footer-item" href="https://www.enpass.io/" target="_blank" rel="noopener">Website</a>
        </footer>
    </div>
</div>

<div class="column is-half">
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">1Password</p>
        </header>
        <div class="card-content">
            <div class="content">
                1Password is a paid password manager known for its easy-to-use design, strong security, and helpful features like password sharing and security alerts. Works on all major platforms.
            </div>
        </div>
        <footer class="card-footer is-nowrap is-flex-wrap-wrap">
            <a class="card-footer-item" href="https://1password.com/" target="_blank" rel="noopener">Website</a>
            <a class="card-footer-item" href="https://mshelton.medium.com/introduction-to-password-managers-5e15baa8b26e" target="_blank" rel="noopener">Beginners Guide</a>
        </footer>
    </div>
</div>

<div class="column is-half">
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">LastPass</p>
        </header>
        <div class="card-content">
            <div class="content">
                LastPass is only <em>partially</em> free. You are restricted to using only one device "type" with the free plan, either PC or mobile. If you wish to use this service, you should consider that LastPass has many issues in the company itself, you can look at the top of the beginners guide for more information.
                <br>
                <br>
                Additionally, LastPass experienced a significant security incident where their vaults were compromised, and the information stored within them are actively being misused. You can find more information about this breach at:
                <ul>
                    <li><a href="https://blog.lastpass.com/2022/12/notice-of-recent-security-incident/" target="_blank" rel="noopener">LastPass Security Incident</a></li>
                    <li><a href="https://www.wired.com/story/lastpass-breach-vaults-password-managers/" target="_blank" rel="noopener">Wired: LastPass Breach</a></li>
                </ul>
            </div>
        </div>
        <footer class="card-footer is-nowrap is-flex-wrap-wrap">
            <a class="card-footer-item" href="https://www.lastpass.com/" target="_blank" rel="noopener">Website</a>
            <a class="card-footer-item" href="https://mshelton.medium.com/lastpass-for-beginners-e921f35d4114" target="_blank" rel="noopener">Beginners Guide</a>
        </footer>
    </div>
</div>
</div>

## What more can I do?

For extra protection, you can use [Multi-Factor Authentication (MFA)](mfa.md), also known as Two-Factor Authentication (or 2FA). This is a method that uses an app to generate a random passcode every 30 seconds. This makes it very difficult for someone to log into your account without having physical access to your phone.

## See Also

- <https://mshelton.medium.com/password-managers-for-beginners-d1f49866f80f>
