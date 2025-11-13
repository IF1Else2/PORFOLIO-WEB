const fs = require('fs-extra');
const path = require('path');

const browserPath = path.join(__dirname, 'docs', 'browser');
const docsPath = path.join(__dirname, 'docs');

console.log('Moviendo archivos de docs/browser a docs...');

// Verificar que existe docs/browser
if (fs.existsSync(browserPath)) {
  // Copiar todo de docs/browser a docs
  const files = fs.readdirSync(browserPath);
  
  files.forEach(file => {
    const srcPath = path.join(browserPath, file);
    const destPath = path.join(docsPath, file);
    
    fs.moveSync(srcPath, destPath, { overwrite: true });
  });
  
  // Eliminar carpeta browser vacía
  fs.removeSync(browserPath);
  
  // Crear archivo .nojekyll para GitHub Pages
  fs.writeFileSync(path.join(docsPath, '.nojekyll'), '');
  
  console.log('✓ Archivos movidos correctamente');
  console.log('✓ Archivo .nojekyll creado');
} else {
  console.log('⚠ No se encontró la carpeta docs/browser');
}