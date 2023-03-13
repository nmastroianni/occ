const fs = require('fs')
console.log('BUILDING...')

fs.readFile('./src/index.html', 'utf-8', (err, data) => {
  if (err) throw err
  const result = data
    .replace(/(sm:)/g, 'sm-')
    .replace(/(md:)/g, 'md-')
    .replace(/(lg:)/g, 'lg-')
    .replace(/(xl:)/g, 'xl-')
    .replace(/(hover:)/g, 'hover-')
  fs.writeFile('./dist/index.html', result, 'utf-8', (err) => {
    if (err) throw err
  })
})

fs.readFile('./dist/output.css', 'utf-8', (err, data) => {
  if (err) throw err
  const result = data
    .replace(/(sm\\:)/g, 'sm-')
    .replace(/(md\\:)/g, 'md-')
    .replace(/(lg\\:)/g, 'lg-')
    .replace(/(xl\\:)/g, 'xl-')
    .replace(/(hover\\:)/g, 'hover-')
  fs.writeFile('./dist/output.css', result, 'utf-8', (err) => {
    if (err) throw err
  })
})
