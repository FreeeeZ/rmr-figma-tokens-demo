import fs from 'fs';
import fetch from 'node-fetch';
import { exec } from 'child_process';
import StyleDictionary from 'style-dictionary';

const projectPath = 'arturuxui/rmr_tokens'
const tokenName = 'tokens%2Ejson';
const tokenUrl = `https://api.github.com/repos/${projectPath}/contents/${tokenName}`;

const cssFormatFile = 'scss';
const baseTokenName = 'base-token.json';
const tokensBuildDir = './src/assets/tokens/json';
const cssBuildPath = `./src/assets/tokens/${cssFormatFile}/`;

if (!fs.existsSync(tokensBuildDir)) {
  fs.mkdirSync(tokensBuildDir);
}

async function getToken() {
  const res = await fetch(tokenUrl, {
    method: 'GET'
  });
  return await res.json();
}

const response = await getToken();
const token = JSON.parse(Buffer.from(response.content, "base64").toString());

fs.writeFileSync(`${tokensBuildDir}/${baseTokenName}`, JSON.stringify(token, null, 2));

buildTokensAndCss(token.$metadata.tokenSetOrder);

function buildTokensAndCss(files) {
  for (let filename of files) {
    buildToken(filename, () => { buildCss(filename) });
  }
}

function buildToken(filename, callback) {
  exec(
    `node node_modules/token-transformer ${tokensBuildDir}/${baseTokenName} ${tokensBuildDir}/${filename}.json ${filename} --expandTypography=true`,
    callback
  );
}

function buildCss(filename) {
  StyleDictionary
    .extend({
      'source': [`${tokensBuildDir}/${filename}.json`],
      'platforms': {
        'scss': {
          transformGroup: `${cssFormatFile}`,
          buildPath: `${cssBuildPath}`,
          files: [{
            destination: `_${filename}.${cssFormatFile}`,
            format: `${cssFormatFile}/variables`,
          }],
        },
      }
    })
    .buildAllPlatforms();
}
