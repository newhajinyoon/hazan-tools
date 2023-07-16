function convertText() {
    const inputText = document.getElementById('inputText').value;
    const ipaResult = document.getElementById('ipaResult');
    const hangulResult = document.getElementById('hangulResult');

    const conversionTable = {
        'a': '아',
        'e': '이',
        'è': '으',
        'o': '어',
        'u': '우',
        'p': '프',
        'μ': '누',
        's': '스',
        'x': '시',
        'g': '기',
        'kk': '크',
        'k': '키',
        'l': '르',
        'w': '와',
        'v': '브',
        'z': '지',
        'j': '주',
        'p': '피',
        'q': '크',
        'f': '포',
        'ώ': '위',
        'h': 'ㅎ',
        'ʒ': '스'
    };

    const ipaConversionTable = {
        'a': 'a',
        'e': 'i',
        'è': 'ə',
        'o': 'ɔ',
        'u': 'u',
        'p': 'p',
        'μ': 'n',
        's': 's',
        'x': 'ʃi',
        'g': 'gi',
        'k': 'ki',
        'l': 'ɾ',
        'w': 'woaː',
        'v': 'vː',
        'z': 'z',
        'j': 'zu',
        'p': 'pi',
        'q': 'k',
        'f': 'fo',
        'h': 'h',
        'ώ': 'we',
        'ʒ': 'su'
    };

    let convertedTextIPA = '';
    let convertedTextHangul = '';
    for (let char of inputText) {
        if (char in conversionTable) {
            convertedTextHangul += conversionTable[char];
        } else {
            convertedTextHangul += char;
        }

        if (char in ipaConversionTable) {
            convertedTextIPA += ipaConversionTable[char];
        } else {
            convertedTextIPA += char;
        }
    }

    // Replace specific patterns
    convertedTextHangul = convertedTextHangul.replace("키키", "크");
    convertedTextHangul = convertedTextHangul.replace("와아", "와");
    convertedTextHangul = convertedTextHangul.replace("누아", "놔");
    convertedTextHangul = convertedTextHangul.replace("아브", "압");
    convertedTextHangul = convertedTextHangul.replace("르우", "루");
    convertedTextHangul = convertedTextHangul.replace("기키", "깈");
    convertedTextHangul = convertedTextHangul.replace("어아", "어아");
    convertedTextHangul = convertedTextHangul.replace("크와", "콰");

    ipaResult.value = convertedTextIPA;
    hangulResult.value = convertedTextHangul;
}
