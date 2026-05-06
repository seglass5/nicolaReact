# Nicola Kate Stebbing — Portfolio

A single-page React portfolio for a creative content marketer. Built with [Create React App](https://github.com/facebook/create-react-app) and deployed to GitHub Pages at [nicolastebbing.com](https://nicolastebbing.com).

## Sections

| Section | File | Purpose |
|---|---|---|
| **Hero** | `src/components/Hero.js` | Name, title, tagline, and call-to-action |
| **About** | `src/components/About.js` | Short bio with photo |
| **Work** | `src/components/Work.js` | Selected projects and campaigns |
| **Skills** | `src/components/Skills.js` | Capabilities and services |
| **Contact** | `src/components/Contact.js` | Email, LinkedIn, Instagram |

## Getting started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customising content

All placeholder text and images are marked with `TODO` comments. Search for `TODO` in `src/` to find every item that needs updating.

### Adding images

1. Create a folder `src/assets/`.
2. Add your images there (JPGs or WebPs are recommended).
3. Import them at the top of the relevant component file:

```js
import heroPhoto from '../assets/hero-portrait.jpg';
```

4. Replace the `<div className="img-placeholder">` element with an `<img>` tag using the imported variable.

#### Recommended image specs

| Placeholder | Location | Size |
|---|---|---|
| Portrait photo | `Hero.js` | 800 × 1000 px |
| Lifestyle / about photo | `About.js` | 600 × 600 px (square) |
| Project thumbnails (×6) | `Work.js` | 1200 × 675 px (16:9) |

### Updating copy

- **Tagline & hero text** — `src/components/Hero.js`
- **Bio** — `src/components/About.js`
- **Work cards** — edit the `projects` array in `src/components/Work.js`
- **Skills** — edit the `skills` array in `src/components/Skills.js`
- **Contact details** — `src/components/Contact.js` and `src/components/Footer.js`

### Colours & fonts

The design tokens live in the `:root` block of `src/index.css`. The main accent colour is `--color-accent: #c9845a` (terracotta). Change it there to update it everywhere.

Fonts are loaded from Google Fonts: **Playfair Display** (headings) and **Inter** (body).

## Deploying to GitHub Pages

The `homepage` field in `package.json` is already set to `https://nicolastebbing.com`. To publish a new build:

```bash
npm run deploy
```

This runs `npm run build` first, then pushes the output to the `gh-pages` branch.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
