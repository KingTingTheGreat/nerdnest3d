# NerdNest3D

An app for hosting and selling our custom 3D printed designs.

In this project we build the UI for an ecommerce product page, using TailwindCSS
for styling and RadixUI for building the more complex UI elements. Throughout,
we'll be using Codux as a platform for visually iterating on the implementation.

## Outline

The branches & commits in this repository correspond to "checkpoints" throughout the webinar. As you
follow along, if you ever get stuck or out of sync with the tutorial you can check out the
corresponding branch or commit to "catch up".

- Intro: project scope & design brief

[checkpoint: branch `0-start`]

- 1: TailwindCSS atomic styling
  - 1.1 Footer styles
  - 1.2 Header styles
  - 1.3 Layout
  - 1.4 Product info

[checkpoint: branch `1-tailwind`]

- 2: RadixUI component primitives
  - 2.1 Product info accordion
  - 2.2 Product size toggle
  - 2.3 Image gallery
  - 2.4 Navigation menu

[checkpoint: branch `2-radix`]

- 3: (optional) Responsive design
  - 3.1 Mobile layout

[checkpoint: branch `3-bonus`]

## Installation

Prerequisites:

- Install Node & npm
- Sign up for a free Codux account

Project set up:

- Clone the project repo, and checkout the `0-start` branch.
- In Codux, open the repository as a Codux project
- Run the "Install" script in Codux (or `npm i` on the command line) to install the project dependencies
- Follow along with the webinar! Use the branches if needed to catch up or "reset" to a checkpoint.

## To test locally

First, run the development server:

```bash
npm run dev
```

Open with your browser to see the result.

## Our final product will be deployed on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
