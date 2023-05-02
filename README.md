# Personal Website

This is my personal website hosted at https://alfieranstead.com. I change the code regularly, but it all stays in this
repository, hence the 'old' branch, which contains a version of the site before a major rebuild from scratch.

Feel free to reuse any of the code in this repository, but please credit me somewhere in whatever project you use it in.

## Built with
 - Nextjs 13
 - Tailwindcss
 - Typescript
 - Framer Motion

## Environment Variables
The only environment variable required is `DISCORD_WEBHOOK` which is used to send a message to a Discord channel when
the contact form is submitted. The site will not build without this since the contact form will not work.