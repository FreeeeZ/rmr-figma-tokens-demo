# r_m_r Tsk Figma tokens demo

## Description

This repo demonstrates how does compiling tokens from <code>.json</code> files to <code>.css</code> or <code>.scss</code>

## Design

<p>Figma tokens <a href="https://www.figma.com/file/SU6QWgSrLBf5fV6jPh3oZg/Tokens-Explanation">explanation</a></p>
<p>Figma tokens <a href="https://www.figma.com/file/T2CIC1zD6eA0RJHJtdtbsJ/Tokens-Determine">determine</a></p>

## Tokens repo

https://github.com/arturuxui/rmr_tokens

## Main deps

![npm](https://img.shields.io/badge/npm-v8.13.2-blue?style=flat-square)
![node](https://img.shields.io/badge/node-v16.15.1-yellowgreen?style=flat-square)
![vue](https://img.shields.io/badge/vue-v3.2.45-green?style=flat-square)
![typescript](https://img.shields.io/badge/typescript-v4.9.4-lightgrey?style=flat-square)
![vite](https://img.shields.io/badge/vite-v4.0.1-yellow?style=flat-square)

## Roadmap

- [x] Write script for get tokens from remote repository
- [x] Parse json tokens to css/scss
- [x] Markup example page for demonstrate changes into tokens
- [x] Setup Token transformer for correct parsing arrays
- [ ] Make this repo auto update. Write git hook for figma tokens auto deploy when changes is available

## Quick start

1. Install all dependencies using `yarn` or `npm install`
2. Start the development server using `yarn dev` or `npm run dev`
3. Open up [http://localhost:3000](http://localhost:3000)

## How to get tokens

1. Run script for get and parse tokens using `yarn get-tokens` or `npm run get-tokens`
2. Open `src/assets/tokens` folder
3. Profit!

## License

[MIT](https://github.com/FreeeeZ/rmr-figma-tokens-demo/blob/main/LICENSE)

Copyright (c) 2023, Shell Vladislav
