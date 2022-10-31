# Resume Website Builder Template

This is a resume builder template that allows you to easily build a formatted resume website.

## Getting Started

Create a repository from this template to have a beautifully formatted resume.

### Developing

To start developing on this project run

```sh
pnpm --filter website dev
```

Once the dev script completes, open your browser to localhost:3000, make changes, and see them in action on the page.

Currently the data is all stored in the `apps/website/src/data/resume_data.ts` file. All you need to do is export an object with the type `Resume`. It doesn't matter how you get this data (any NodeJS code will work here). Eventually this project will enable you to see [Resume Editor (Coming Soon)](<#resume-editor-(coming-soon)>) for more details on this feature.

> apps/website/src/data/resume_data.ts
>
> ```typescript
> import type { Resume } from './resume';
>
> const resume: Resume = {
>   /* Resume data here... */
> };
> export default resume;
> ```

Once you save this file, your page should update and you'll see a populated resume on the screen.

These templates are made to be simple and easy to follow. All of the components are located in the components folder, so extend and customize the components as you wish.

Want to add something fancy to your project? Preact is already included in the project, so that you can use client side components when needed. There is an example of this with the `Download` component located in the `website` components directory. Read more about working with the Astro islands architecture in the [Astro](https://docs.astro.build/en/concepts/islands/) documentation.

### Build the Project

When you have reached the point that you are ready to deploy your website, run:

```sh
pnpm --filter website build
```

This will create a folder at `apps/website/dist` that will contain the static assests to deploy in any place you can deploy a static website.

There are many ways to do this, but I find one of the easiest ways to do this is with

## Features

### Resume Display

The website project currently dispalys the contents of the `resume_data.ts` file. See [Getting Started](#getting-started) for details on how this is set up.

### Resume Editor (Coming Soon)

The goal of this project is to include an editor for your resume. This editor will use prisma to allow the user to plug in any database of thier choice to store the resume data. This feature will eventually live in the `libs/resume` project.

Requirements:

- Should be importable by [Astro](https://astro.build/) so that the asto build rule can retrieve the data on `astro build`.
- Should be easily extensible to allow for other data that poeple may want to include on their resume.
- Database should be interchangable.

### Export to PDF (Coming Soon)

Currently the project contains a `Download` Preact component that just calls the `window.print()` method in the broswer so that it can be printed to a `PDF`.

I want to have fun with some web assembly stuff, so I am planning to add a web assembly package (probably in Go or Rust) to convert the site into a PDF file and download it on the viewer's computer. My intention for this is to make the file downloadable fully using the UI, so that no server is required. While I'm sure there are libraries to do this in JavaScript, I want to have some fun with WASM.
