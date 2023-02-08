function encryptVigenere(plaintext, key) {
  let result = '';
  let keyIndex = 0;
  for (let i = 0; i < plaintext.length; i++) {
    let charCode = plaintext.charCodeAt(i);
    if (isUppercase(charCode)) {
      charCode = ((charCode - 65 + key.charCodeAt(keyIndex) - 65) % 26) + 65;
      keyIndex = (keyIndex + 1) % key.length;
    } else if (isLowercase(charCode)) {
      charCode = ((charCode - 97 + key.charCodeAt(keyIndex) - 97) % 26) + 97;
      keyIndex = (keyIndex + 1) % key.length;
    }
    result += String.fromCharCode(charCode);
  }
  return result;
}

function decryptVigenere(ciphertext, key) {
  let result = '';
  let keyIndex = 0;
  for (let i = 0; i < ciphertext.length; i++) {
    let charCode = ciphertext.charCodeAt(i);
    if (isUppercase(charCode)) {
      charCode = ((charCode - 65 - (key.charCodeAt(keyIndex) - 65) + 26) % 26) + 65;
      keyIndex = (keyIndex + 1) % key.length;
    } else if (isLowercase(charCode)) {
      charCode = ((charCode - 97 - (key.charCodeAt(keyIndex) - 97) + 26) % 26) + 97;
      keyIndex = (keyIndex + 1) % key.length;
    }
    result += String.fromCharCode(charCode);
  }
  return result;
}

function isUppercase(charCode) {
  return charCode >= 65 && charCode <= 90;
}

function isLowercase(charCode) {
  return charCode >= 97 && charCode <= 122;
}

document.getElementById('encrypt-button').addEventListener('click', function() {
  let plaintext = document.getElementById('text-input').value;
  let key = document.getElementById('key-input').value;
  let result = encryptVigenere(plaintext, key);
  document.getElementById('result').innerHTML = result;
});

document.getElementById('decrypt-button').addEventListener('click', function() {
  let ciphertext = document.getElementById('text-input').value;
  let key = document.getElementById('key-input').value;
  let result = decryptVigenere(ciphertext, key);
  document.getElementById('result').innerHTML = result;
});
