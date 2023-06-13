## example.cfw.guide

An example repo to build cfw.guide sites from 

## Running the site locally

This requires the following installed to your system:
- [Node.js v12+](https://nodejs.org/)
- [Yarn v1 classic](https://classic.yarnpkg.com/en/) (npm install --global yarn)

To test the website locally, simply run the following commands:
```
git clone https://github.com/example.cfw.guide.git --recursive
cd example.cfw.guide
yarn install
yarn dev
```
to build the Markdown files into HTML and start a testing webserver on http://127.0.0.1:8080.

## Building the site

Follow the steps above, but run `yarn build` instead at the final step. Once complete, the output will be stored at `/docs/.vuepress/dist`.