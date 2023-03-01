function convertStrLowercaseAndFirstLetterLarge(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function convertStrToSpacesCorrect(str) {
    let resultStr = str.replace(/\s+/g, ' ').trim() //удаление множественных пробелов
        .replace(/\s+([.,!":])/g, '$1') //удаление пробелов перед пунктупцией
        .replace(/([.,!":])\s/g, '$1') //удаление пробелов после пунктуации
        .replace(/([.,!":])/g, '$1 '); //добавление пробелов после пунктуации

    return resultStr;
}

function countWords(str) {
    let frequentlyUsedConjuctions = ['и', 'а', 'но'];

    let count = 0;
    let arrayWords = str.toLowerCase().split(/[.,!,?,,]/);
    arrayWords = arrayWords.reduce((prev, current) => prev + current).split(' ');

    for(let word of arrayWords) {
        if (frequentlyUsedConjuctions.includes(word))
            continue;
        else
            count++;
    }

    return count;
}

function countUniqueWords(str) {
    let wordMap = new Map();

    let count = 1;
    let arrayWords = str.toLowerCase().split(/[.,!,?,,]/);
    arrayWords = arrayWords.reduce((prev, current) => prev + current).split(' ');

    for(let word of arrayWords) {
        if (wordMap.has(word)) {
            let current = wordMap.get(word);
            wordMap.set(word, ++current);
        }
        else
            wordMap.set(word, count);
    }

    return JSON.stringify(Object.fromEntries(wordMap));
    
}

export {
    convertStrLowercaseAndFirstLetterLarge as convertStrLowCAndFirstLetLarge, 
    convertStrToSpacesCorrect, 
    countWords, 
    countUniqueWords};
