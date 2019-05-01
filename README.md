# Personal Website

## 1. What the project does

This is my personal website. It uses the Jekyll to generate a static website and is hosted on github pages.

## 2. How to install it, including dependencies.

1. `git clone` this project

## 3. How to run the code.

1. `bundle exec jekyll serve` to run the project on `localhost:4000` (this reruns automatically as changes are made, except changes to `_config.yml`)
2. View in browser at `localhost:4000`
3. Make changes - on new pages, be sure to reference the layouts to see what page variables are needed
4. `JEKYLL_ENV=production bundle exec jekyll serve` makes it ready for production

## 4. Discussion and references.

`_portfolio` is a custom collection. It works similarly to how `_posts` works.
`_plugins/_tag_gen` creates relative urls for blog posts at `/blog_tag/<tag_name>`

Refer to the official Jeykll documentation for further support: [https://jekyllrb.com/docs/home/](https://jekyllrb.com/docs/home/)

## 5. Work still to be done, known bugs, future plans.

1. Add tags for `_portfolio` items
2. Add other work from Github
3. Migrate old blogs into here

This README structure is borrowed from: [http://dpb.bitbucket.org/what-goes-in-a-readme.html](http://dpb.bitbucket.org/what-goes-in-a-readme.html)
