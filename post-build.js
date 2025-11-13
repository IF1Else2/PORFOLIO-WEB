const fs = require('fs-extra');
const path = require('path');

const browserPath = path.join(__dirname, 'docs', 'browser');
const docsPath = path.join(__dirname, 'docs');

console.log('🔄 Moviendo archivos de docs/browser a docs...');

// Verificar que existe docs/browser
if (fs.existsSync(browserPath)) {
  // Obtener lista de archivos en docs/browser
  const files = fs.readdirSync(browserPath);
  
  console.log(`📦 Encontrados ${files.length} elementos para mover`);
  
  // Mover cada archivo/carpeta
  files.forEach(file => {
    const srcPath = path.join(browserPath, file);
    const destPath = path.join(docsPath, file);
    
    try {
      fs.moveSync(srcPath, destPath, { overwrite: true });
      console.log(`  ✓ Movido: ${file}`);
    } catch (err) {
      console.error(`  ✗ Error moviendo ${file}:`, err.message);
    }
  });
  
  // Eliminar carpeta browser vacía
  fs.removeSync(browserPath);
  console.log('🗑️  Carpeta browser eliminada');
  
  // Crear archivo .nojekyll para GitHub Pages
  fs.writeFileSync(path.join(docsPath, '.nojekyll'), '');
  console.log('📄 Archivo .nojekyll creado');
  
  // Verificar que assets existe
  const assetsPath = path.join(docsPath, 'assets');
  if (fs.existsSync(assetsPath)) {
    console.log('✅ Carpeta assets verificada en docs/');
  } else {
    console.warn('⚠️  ADVERTENCIA: No se encontró carpeta assets en docs/');
  }
  
  console.log('✅ Proceso completado correctamente');
} else {
  console.error('❌ No se encontró la carpeta docs/browser');
  process.exit(1);
}