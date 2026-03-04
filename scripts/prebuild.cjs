/**
 * Script de Prebuild - Cache Busting
 * Injeta timestamp único no index.html antes de cada build
 */

const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');

// Gerar timestamp único
const now = new Date();
const timestamp = now.getTime().toString();
const buildDate = now.toISOString().split('T')[0];
const buildTime = now.toTimeString().split(' ')[0];

// Ler o arquivo index.html
let content = fs.readFileSync(indexPath, 'utf-8');

// Substituir os placeholders
content = content
  .replace(/%BUILD_TIMESTAMP%/g, timestamp)
  .replace(/%BUILD_DATE%/g, buildDate)
  .replace(/%BUILD_TIME%/g, buildTime);

// Escrever o arquivo modificado
fs.writeFileSync(indexPath, content, 'utf-8');

console.log(`✅ Cache busting aplicado:`);
console.log(`   Timestamp: ${timestamp}`);
console.log(`   Data: ${buildDate}`);
console.log(`   Hora: ${buildTime}`);
