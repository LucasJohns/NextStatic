# NextStatic


NextStatic is a slightly opionated version of Next.js static export with Reactstrap for easy to manage Bootstrap components with easy to style Sass loader.  Great for static websites, built with such things as environment variables, sitemap generation, webpack plugins, eslint and editorconfig.

### Installation

Running on Node.js v8.16.0 but should run on anything Next.js v9 supports.

Install the dependencies and devDependencies and start the server.

```sh
$ cd NextStatic
$ npm install
$ npm run dev
```

Export static files

```sh
$ npm run export
```

### Development


Want to create a new page?  Simply create a page in the pages directory:
(url will be based on the file name)
```sh
$ touch pages/page.js
```


Components - simply create your components in the components folder:
```sh
$ touch components/component.js
```

All static images, css and js goes in the static folder:
```sh
$ cd static/
```

Refer to Next.js documentation for more details: https://nextjs.org/docs

