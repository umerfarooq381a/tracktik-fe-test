# tracktik-fe-test

This is frontend challenge from tracktik
[Challenge details](https://tracktik-challenge.staffr.com/)

## API

We are using APIs from tracktik-challenge for this challenge

[Documentation](https://tracktik-challenge.staffr.com/api.html)

## Pages

- [localhost:5173/](http://localhost:5173)
  - This page shows paginated list of sites.
  - List can be filtered by site title
  - List can be sorted by createdAt timestamp in ASC or DESC order
- [localhost:5173/:id](http://localhost:5173/:id)
  - This page shows detail view of a site

## Libraries and Frameworks

- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Shadcn Vue ](https://shadcn-vue.com/)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
