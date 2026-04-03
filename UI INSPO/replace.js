const fs = require('fs');
const path = require('path');

const files = [
  'src/styles/theme.css',
  'src/app/components/Layout.tsx',
  'src/app/components/Navbar.tsx',
  'src/app/components/CrowdfundingHero.tsx',
  'src/app/pages/Browse.tsx'
];

const replacements = [
  // Fix theme.css specific replacements FIRST
  { from: /@apply bg-\[#DCCCBB\] dark:bg-\[#646E78\] text-\[#646E78\] dark:text-\[#DCCCBB\]/g, to: '@apply bg-white dark:bg-[#111827] text-slate-900 dark:text-[#DCCCBB]' },

  // Layout Blob fix (replacing the third blob to keep #DCCCBB in use)
  { from: /bg-\[#8D98A7\]\/20 dark:bg-\[#8D98A7\]\/10/g, to: 'bg-[#DCCCBB]/60 dark:bg-[#DCCCBB]/20' },

  // Light mode backgrounds (were #DCCCBB)
  { from: /bg-\[#DCCCBB\](?![\w/])/g, to: 'bg-white' }, 
  { from: /bg-\[#DCCCBB\]\/([0-9]+)/g, to: 'bg-white/$1' },
  { from: /from-\[#DCCCBB\](?![\w/])/g, to: 'from-white' },
  { from: /from-\[#DCCCBB\]\/([0-9]+)/g, to: 'from-white/$1' },
  { from: /to-\[#DCCCBB\]\/50/g, to: 'to-slate-50' },
  { from: /to-\[#DCCCBB\](?![\w/])/g, to: 'to-white' },
  { from: /to-\[#DCCCBB\]\/([0-9]+)/g, to: 'to-white/$1' },
  { from: /via-\[#DCCCBB\](?![\w/])/g, to: 'via-white' },
  { from: /via-\[#DCCCBB\]\/([0-9]+)/g, to: 'via-white/$1' },

  // Dark mode backgrounds (were #646E78)
  { from: /bg-\[#646E78\](?![\w/])/g, to: 'bg-[#111827]' },
  { from: /bg-\[#646E78\]\/([0-9]+)/g, to: 'bg-[#111827]/$1' },
  { from: /from-\[#646E78\](?![\w/])/g, to: 'from-[#111827]' },
  { from: /from-\[#646E78\]\/([0-9]+)/g, to: 'from-[#111827]/$1' },
  { from: /to-\[#646E78\](?![\w/])/g, to: 'to-[#111827]' },
  { from: /to-\[#646E78\]\/([0-9]+)/g, to: 'to-[#111827]/$1' },
  { from: /via-\[#646E78\]\/90/g, to: 'via-[#111827]' },
  { from: /via-\[#646E78\](?![\w/])/g, to: 'via-[#111827]' },

  // Light mode primary text
  { from: /text-\[#646E78\]/g, to: 'text-slate-900' },
  
  // Muted / Secondary elements (were #8D98A7)
  { from: /text-\[#8D98A7\]/g, to: 'text-slate-500' },
  { from: /border-\[#8D98A7\](?![\w/])/g, to: 'border-slate-200' },
  { from: /border-\[#8D98A7\]\/([0-9]+)/g, to: 'border-slate-200/$1' },
  { from: /bg-\[#8D98A7\](?![\w/])/g, to: 'bg-slate-200' },
  { from: /bg-\[#8D98A7\]\/([0-9]+)/g, to: 'bg-slate-200/$1' },
  { from: /placeholder-\[#8D98A7\]/g, to: 'placeholder-slate-400' },

  // Dark mode borders (were #DCCCBB/x)
  { from: /border-\[#DCCCBB\]\/5(?!0)/g, to: 'border-white/5' },
  { from: /border-\[#DCCCBB\]\/10/g, to: 'border-white/10' },
  { from: /border-\[#DCCCBB\]\/20/g, to: 'border-white/20' },
  { from: /border-\[#DCCCBB\]\/30/g, to: 'border-white/30' },
  
  // Ensure primary button text is white instead of #DCCCBB for contrast
  { from: /text-\[#DCCCBB\] rounded/g, to: 'text-white rounded' },
  { from: /text-\[#DCCCBB\] font-bold rounded/g, to: 'text-white font-bold rounded' }
];

files.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if(fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    replacements.forEach(r => {
      content = content.replace(r.from, r.to);
    });
    fs.writeFileSync(fullPath, content);
    console.log(`Updated ${file}`);
  }
});
