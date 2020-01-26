# Gatsby Starter Blog with Typescript

[![Netlify Status](https://api.netlify.com/api/v1/badges/f802fb76-5cc9-43f4-a2d0-b0d98eac8153/deploy-status)](https://app.netlify.com/sites/happy-spence-5fa372/deploys)

This project attempts to make Gatsby's [starter blog](https://github.com/gatsbyjs/gatsby-starter-blog) type-safe. In addition, styled components are used in favor of inline jsx styles.

## Features (in addition to the Gatsby Starter)

- [Typescript](http://www.typescriptlang.org/)
- [Styled Components](https://www.styled-components.com/)
- [Graphql Codegen](https://github.com/dotansimha/graphql-code-generator)
- [Gatsby Transition Link](https://www.gatsbyjs.org/packages/gatsby-plugin-transition-link/?=transition)

## Roadmap

- Make `onCreateNode` type-safe
- Improved grapql typings generations

Currently, the type graphql type definition file has everything as nullable, so a lot of nested non-null assertions are used when accessing data from queries.
