#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment process...');

try {
  // Build the project
  console.log('📦 Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Check if dist folder exists
  if (!fs.existsSync('dist')) {
    throw new Error('Build failed - dist folder not found');
  }

  console.log('✅ Build completed successfully!');
  console.log('📁 Files ready for deployment in ./dist folder');
  
  // Display deployment options
  console.log('\n🌐 Deployment Options:');
  console.log('1. Vercel: npx vercel --prod');
  console.log('2. Netlify: npx netlify deploy --prod --dir=dist');
  console.log('3. GitHub Pages: Push to gh-pages branch');
  console.log('4. Manual: Upload ./dist folder to your hosting service');

} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}