import pkg from 'crypto-js';
const { enc, AES, mode: _mode, pad } = pkg;

const KEY = enc.Utf8.parse('cTY/OJukmaVM4w4UxiUI4cTYq2QGDB8c');
const IV = enc.Utf8.parse('gqeSw9OvjqA3kmGP');

const argv = process.argv.slice(2);
const type = argv[0];
const val = argv[1];

if(val) {
    switch(type) {
        case '-e':
            console.log(encrypt(val))
            break;
        case '-d':
            console.log(decrypt(val))
            break;
        default:
            console.log('No se puede procesar la información');
    }
} else {
    console.log('Hace falta información para poder continuar');
}

function encrypt(data) {
    const encrypted = AES.encrypt(data ? data : '', KEY, {
        iv: IV,
        mode: _mode.CBC,
        padding: pad.Pkcs7
    });
    return encrypted.toString();
}

function decrypt(data) {
    const encrypted = AES.decrypt(data ? data : '', KEY, {
        iv: IV,
        mode: _mode.CBC,
        padding: pad.Pkcs7
    });
    return encrypted.toString(enc.Utf8);
}