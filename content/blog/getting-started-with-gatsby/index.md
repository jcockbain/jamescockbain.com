---
title: Building a blog site with Gatsby
date: 2020-03-18
template: post
description: Getting to grips with Gatsby as a beginner, the first steps in starting this site.
tags: ["gatsby", "javascript", "react"]
---

Hello!
This short post is going to summarise the work I've done on this site, up to now.
I'm still making tweaks to this article, but wanted to put it up as the site was looking pretty bare.
If you have any feedback, on the site or the post, please let me know!

## Getting Started

I chose to use [Gatsby](https://www.gatsbyjs.org/), a static site generator based on React.
I found there are a lot of alternative options, the article on the [best-static-site-generator](https://snipcart.com/blog/choose-best-static-site-generator) was helpful in breaking them down.
The final decision was due to the strength of the community and documentation, with a whole host of samples and tutorials to absorb.

I began with the [Gatsby-Starter-Blog-Typescript](https://www.gatsbyjs.org/starters/gperl27/Gatsby-Starter-Blog-Typescript/).
Having touched Typescript sporadically in the past, I saw this as a chance to build something of my with it.
This starter includes all features from Gatsby's official starter blog, with some other bonuses (fancy transition links, GraphQL types).

## Adding some features

I took notes of some of the features I found cool in other portfolio/blog sites.
Here are 3 stories I decided to focus on initially, with a summary of my technical implementation for each.

### About me page

> "As a first-time user, I can find out more about the author in a clear and simple way"

The way I decided to do this was by adding a page markdown template, alongside the existing blog template.
This gives me a simple way to add extra static pages to the site, without having to worry about ensuring styling is consistent.

The main piece of work here was modifying the `createPages` function, which is called inside `gatsby-node.js`, to filter markdown files based on a `template` property.
This property I added to the header of each markdown file, as `blog` or `page`.
The function tells Gatsby which template to use when it renders each markdown file.
The `gatsby-transformer-remark` plugin then handles the conversion of the Markdown content to HTML, within each page.

### Contact Form

> "As a visitor to the site, there is an intuitive way for me to contact the author"

This was something I'd seen on other sites, and thought would be nice to have.
It also gave me an opportunity to add some more bespoke components and test out my understanding of my Gatsby / React / Typescript setup.

For this, I chose to follow the advice of the gatsby blog on [building-a-contact-form](https://www.gatsbyjs.org/docs/building-a-contact-form/) and use [GetForm](https://getform.io/forms).
Handling form submission is as simple as posting to the address given.
The GetForm backend handles all submissions and presents them to a dashboard.

I added Recaptcha to the form using the component [react-google-recaptcha](https://www.npmjs.com/package/react-google-recaptcha).
This was painless to integrate into a form, and setup with the reCAPTCHA dashboard.
One tricky part was styling the component, and making it responsive for smaller screens.
As a common problem though (to do with the strictness of the Recaptcha element design itself), there's plenty online to help.

### Blog Tags

> "As a user, I can see the tags for each post and search for posts based on tag combinations"

This one may take a while to pay off, with more posts needed!

I began by adding a simple tag array to the header of each markdown post file.
GraphQL then makes handling these tags straightforward.
A query, made by the blog index page (`/blog`), collects all tags into an array.
Filtering these, whether it be by or with the search bar, is then a case of filtering that array of posts.

On the blog pages themselves (like this one), a similar query is made to retrieve the tag array specific to the post.

## Conclusion

Having written this, I stumbled upon this comprehensive tutorial on Gatsby and Typescript by [Jeff Rafter](https://jeffrafter.com/gatsby-with-typescript/).
It's great, I recommend checking it out and wish I'd seen it sooner!

Thanks for reading, the code is on this [repo](https://github.com/jcockbain/jamescockbain.com) if you fancy a look.
