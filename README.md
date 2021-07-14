<h1 align="center" style="border: none; padding: 0; margin: 0;">🏫 LSG Schülerportal 🧑‍🎓</h1>
<h3 align="center"style="margin: 10px;">Cross-platform React app for students of the Louise-Schroeder-Gymnasium</h3>
<p align="center" style="margin: 0; padding: 0;">
  <a href="COPYING"><img src="https://img.shields.io/github/license/3x071c/Schulport" alt="GitHub license badge" /></a>
  <a href="https://github.com/3x071c/Schulport/graphs/commit-activity"><img src="https://img.shields.io/github/commit-activity/m/3x071c/Schulport" alt="GitHub commit activity badge" /></a>
  <a href="https://github.com/3x071c/Schulport/graphs/commit-activity"><img src="https://img.shields.io/github/last-commit/3x071c/Schulport" alt="GitHub last commit badge" /></a>
</p>
<hr style="height: 2px; margin: 5px;" />
<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#development">Development</a> •
  <a href="#license">License</a>
</p>

## Introduction

The LSG Schülerportal is a cross-platform application, written using [Web technologies](https://developer.mozilla.org/en-US/docs/Learn) in [TypeScript](https://www.typescriptlang.org/) (a typed superset/compiler of JavaScript, the scripting language that powers most of the web), [React](https://reactjs.org/) (a declarative, component-based, reactive UI library), [NextJS](https://nextjs.org/) (a framework built around React), [Ionic](https://ionicframework.com/)/[Capacitor](https://capacitorjs.com/) (a cross-platform hybrid web-app wrapper for native capabilities and native-feel components), [TailwindCSS](https://tailwindcss.com/) (a compiled, utility-first CSS framework) and [jotai](https://jotai.pmnd.rs/) (a React state management library). It enables pupils to conveniently check important dates, events, homework and their substitution schedule, with more to come.

## Documentation

Extensive documentation can be found in the [wiki](./wiki/). Note that at the moment, everything is being documented in German.

## Development

### System Requirements

This bot is written in [TypeScript](https://www.typescriptlang.org/), a typed superset of JavaScript. Some scripts included with this repository will probably not work on Windows ([m](https://tinyurl.com/nuub2bq)[y](https://tinyurl.com/y2emej63)[ ](https://tinyurl.com/y2lzznux)[c](https://tinyurl.com/y3v8vo5a)[o](https://tinyurl.com/y4qcfkw3)[n](https://tinyurl.com/y5gm9ysv)[d](https://tinyurl.com/y69uplwl)[o](https://tinyurl.com/yygc57ta)[l](https://tinyurl.com/yynoa7ql)[e](https://tinyurl.com/y3shavwn)[n](https://tinyurl.com/yxladmrj)[c](https://tinyurl.com/y3yxymqr)[e](https://tinyurl.com/y2c6alo5)[s](https://tinyurl.com/y5qtqr6p)). Make sure you have a recent `node` and `npm` version installed before proceeding (Install the latest non-LTS node version for development [here](https://nodejs.org/)).

### Environment

Using [Visual Studio Code](https://code.visualstudio.com) is **highly** recommended. Extensions and configurations are automatically applied, so linting and formatting will work effortlessly out-of-the-box.

### Setup

This project uses [pnpm](https://pnpm.io/) as a package manager. Install it with `npm install -g pnpm@latest`, and install this repository's dependencies by running `pnpm i` in the root. A hot-reloading development environment can be started with `pnpm dev`. For production deployments, a `pnpm prod` script is included (also see the [scripts](#scripts) section).

### Scripts

Reminder: prefix all of these scripts with `pnpm`/`pnpm run`!

-   `sync|commit|...`: These scripts are related to git operations and are explained in the [Contributing](CONTRIBUTING.md) guide
-   `dev`: Starts a hot-reloading development environment
-   `web`: Builds a production-ready website
-   `native`: Builds a production-ready native app (Important: run `web` before this!)
-   `deploy`: Build both `web` and `native` output
-   `format`: Automatically formats all code, and reports issues
-   `lint`: Reports code style issues
-   `new`: Set up the project after the initial clone

### Tech Stack

-   [Git](https://git-scm.com/) - Version control
-   [Editorconfig](https://editorconfig.org/) - IDE file style consistency
-   [Prettier](https://prettier.io/) - Code formatting
-   [ESLint](https://eslint.org/) - JavaScript linting
-   [Stylelint](https://stylelint.io/) - CSS style linting
-   [GitHub Actions](https://github.com/features/actions) - CI/CD
-   [GitPod](https://www.gitpod.io/) - reproducible dev environments
-   [NodeJS](https://nodejs.org/en/) - Server-side JavaScript
-   [pnpm](https://pnpm.io/) - Package manager
-   [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript superset/compiler
-   [React](https://reactjs.org/) - Declarative, component-based, reactive UI library
-   [NextJS](https://nextjs.org/) - React framework
-   [PostCSS](https://postcss.org/) - CSS preprocessor
-   [Capacitor](https://capacitorjs.com/) - Hybrid-web app wrapper/API
-   [Ionic](https://ionicframework.com/) - Native-feel React UI components
-   [TailwindCSS](https://tailwindcss.com/) - Modern, utility-first compiled CSS framework
-   [jotai](https://jotai.pmnd.rs/) - React modular state management
-   [Vercel](https://vercel.com/) - Automatic deployments

## License

This project is licensed under the GNU Affero General Public License (`GNU AGPL 3.0 or later`).<br /> It is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details. A copy of the GNU Affero General Public License Version 3 should be distributed along with this program [here](COPYING). If not, see [the official GNU license website](https://www.gnu.org/licenses/).
