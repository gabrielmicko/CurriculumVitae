#!/usr/bin/env node
const profile = require('../app/config/profile.json');
const program = require('commander');
const html = require('./');
const pdf = require('html-pdf');
const fs = require('fs');

program
  .option(
    '-f, --format [format]',
    'format of the document (A3, A4, A5, Legal, Letter, Tabloid)',
    /^(A3|A4|A5|Legal|Letter|Tabloid)$/i,
    'A4'
  )
  .option(
    '-o, --orientation [orientation]',
    'orientation of the document (portrait or landscape)',
    /^(portrait|landscape)$/i,
    'portrait'
  )
  .option('-d, --debug', 'generate html output')
  .parse(process.argv);

const options = {
  format: program.format,
  orientation: program.orientation,
  border: {
    top: '10mm',
    right: '10mm',
    bottom: '10mm',
    left: '10mm'
  },
  zoomFactor: 1
};

if (program.debug) {
  fs.writeFileSync(`./public/downloads/${profile.pdf.filename}.html`, html);
  return;
}

pdf.create(html, options).toFile(`./public/downloads/${profile.pdf.filename}.pdf`, (err, res) => {
  if (err) {
    console.log('Failed to generate PDF:');
    return console.log(err);
  } else {
    console.log('PDF has been geenrated: ' + res.filename);
  }
});
