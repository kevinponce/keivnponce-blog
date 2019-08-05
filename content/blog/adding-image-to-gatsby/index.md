---
title: Adding image to Gatsby
date: "2019-08-04T22:12:00.121Z"
tags: ["JavaScript", "Gatsby"]
header: { type: 'icon', bgColor: '#663399', icon: 'gatsby' }
---

# Setup
Before you can add an image to a react component in gatsby, you need to install gatsby-image.
```
npm install --save gatsby-image
```

Add the following to your gatsby-config.js:
```
plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/assets`,
      name: `assets`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`
]
```

# Use
Now you get to use it by doing the following:

## Import gatsby image
```
import Image from "gatsby-image"
```

## Create a graphql query to get fetch image
```
export const pageQuery = graphql`
  query {
    gatsbyIcon: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
```

## Create image tag that uses the graphql query response above
```
const { data } = this.props;

return (
  <Image
    fixed={data.gatsbyIcon.childImageSharp.fixed}
  />
);
```

