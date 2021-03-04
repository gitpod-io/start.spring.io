const url = process.argv[2].replace('-','=').replace('_','/');
console.log(Buffer.from(url, 'base64').toString())