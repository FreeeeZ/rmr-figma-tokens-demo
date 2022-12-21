import fs from 'fs';
import path from 'path'
import fetch from 'node-fetch';
import { exec } from 'child_process';
import fsPromises from 'fs/promises';
import StyleDictionary from 'style-dictionary';

const customArgs = process.argv.slice(2);

const repoWithTokensPath = 'arturuxui/rmr_tokens'
const fileWithTokensName = 'tokens%2Ejson';
const branchName = customArgs[0] || 'main';
const tokenUrl = `https://api.github.com/repos/${repoWithTokensPath}/contents/${fileWithTokensName}?ref=${branchName}`;

const outputFileFormat = 'scss';
const baseTokenName = 'base-token.json';
const tokensBuildDir = './src/assets/tokens/json';
const cssBuildPath = `./src/assets/tokens/${outputFileFormat}/`;
const tokenTransformerArgs = '--expandTypography=true --expandShadow=true --expandComposition=true --preserveRawValue: true';

const pathsForRemove = [tokensBuildDir, cssBuildPath];

async function getFileWithTokens() {
  const res = await fetch(tokenUrl, {
    method: 'GET'
  });

  if (res.status === 200) {
    return await res.json()
  } else {
    throw new Error(res.statusText)
  }
}

const response = await getFileWithTokens();

if (fs.existsSync(tokensBuildDir)) {
  for (const pathWithFiles of pathsForRemove) {
    const files = await fsPromises.readdir(pathWithFiles);
    for (const file of files) {
      await fsPromises.unlink(path.resolve(pathWithFiles, file));
    }
  }
} else {
  fs.mkdirSync(tokensBuildDir);
}

const token = JSON.parse(Buffer.from(response.content, "base64").toString());
const tokenSetOrderFormTokens = token.$metadata.tokenSetOrder

fs.writeFileSync(`${tokensBuildDir}/${baseTokenName}`, JSON.stringify(token, null, 2));

buildTokensAndCss(tokenSetOrderFormTokens);

function buildTokensAndCss(files) {
  for (let filename of files) {
    buildToken(filename, () => { buildCss(filename) });
  }
}

function buildToken(filename, callback) {
  exec(
    `node node_modules/token-transformer ${tokensBuildDir}/${baseTokenName} ${tokensBuildDir}/${filename}.json ${filename} ${tokenTransformerArgs}`,
    callback
  );
}

function buildCss(filename) {
  StyleDictionary
    .extend({
      'source': [`${tokensBuildDir}/${filename}.json`],
      'platforms': {
        'scss': {
          transformGroup: `${outputFileFormat}`,
          buildPath: `${cssBuildPath}`,
          files: [{
            destination: `_${filename}.${outputFileFormat}`,
            format: `${outputFileFormat}/variables`,
          }],
        },
      }
    })
    .buildAllPlatforms();
}
