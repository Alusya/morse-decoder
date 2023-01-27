const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const splitedArray = [];
    const iterationLength = expr.length / 10;
    for (let i = 0; i < iterationLength; i++) {
        splitedArray.push(expr.slice(i * 10, 10 * (i + 1)))
    }
    return splitedArray.map((el)=> {
      if (el === '**********') {
        return ' '
      }
        const newEl = el.replace(/\*+/gi, ' ')
        .replace(/10/gi, '.').replace(/11/gi, '-').replace(/00/gi, '')
        return MORSE_TABLE[newEl]
    }).join('');
}

module.exports = {
    decode
}