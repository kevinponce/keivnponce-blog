---
title: Creating blog with Gatsby
date: "2019-08-02T22:12:00.121Z"
tags: ["javascript", "gatsby"]
header: { type: 'icon', bgColor: '#663399', icon: 'gatsby' }
---

Before we start, we must download gatsby cli to create our blog.
```
npm install -g gatsby-cli
```

Run the following to create start blog gatsby has provided.
```
gatsby new my-blog-starter https://github.com/gatsbyjs/gatsby-starter-blog
```

To run the blog run the following commands.
```javascript
cd my-blog-starter/
gatsby develop
```

Now that you have a good starting point. It is time for your to style your blog.

# Update bio
First lets change the bio details. The code for the bio can be found in `src/components/bio.js`.
You we see it uses `magic` to get the author of the blog:
```
const { author, social } = data.site.siteMetadata
```

All of the site meta data can be found `gatsby-config.js` under `siteMetadata`.
Time change the photo. It can be found in `content/assetsprofile-pic.jpg`.

# Style layout
To change the style of the layout go to `src/components/layout.js`.
To change the style of the posts go to `src/components/index.js`.

# Style posts
To change the style of the posts go to `src/components/index.js`.

# Style post
To change the style of the post go to `src/templates/blog-post.js`.

# create new post
The start is setup to have blog post to be under `content/blog`.
You have to options create a file with `.md` at the end end or create a folder with a file `index.md` inside of it.
I personally like to use the folder because it allows you to keep all of the photos contained inside of the post.

The file can be broken down into two parts: frontmatter and content.

## Formatter
The formatter is where we store data like title, tags, date, and other custom data. formatter starts and ends with `---`

## Content
The content comes after the formatter and formated in markdown.

## Example
```
---
title: My First Post
---

Hey y'all, this is my awesome new blog!
```