# HNG Internship Stage 0 Project (Profile Card)

A small frontend project that displays a user's profile card (name, avatar, short bio, and social links). It's for the HNG intenship.

## Pages
- index.html — Profile card (avatar, name, role, social links).
- about.html — About page with a longer bio, skills, and additional links/experience.
- contact.html — Contact form to send messages (client-side validation + success dialog).

## About page (about.html)
- Contains an extended biography.
- Edit content in `about.html` and style in `about.css`.
- Keep headings semantic (h1/h2), use lists for skills, and descriptive links.

## Contact page (contact.html)
- Contact form fields: Full name, Email, Subject, Message.
- Client-side validation handled in `contact.js`.
- Accessibility: form uses `aria-describedby` on inputs, error elements have `role="alert"` / `aria-live` for screen readers.
- The form uses `novalidate` so the custom validator runs instead of the browser's native validation bubbles.
- Success confirmation is shown via the dialog element `#success-dialog`.

## Features
- Responsive profile card layout
- Avatar, name, role, short bio
- Social links / contact buttons
- Easy to customize styles and content

## Prerequisites
- A modern web browser

## Install & run locally

1. Open a terminal and change to the project directory:
   ```sh
   cd HNG_projects/ProfileCard

## Run with hosted link
    ```profile-cv124.netlify.app