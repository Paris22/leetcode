// Space complexity: O(1), Time complexity: O(n)
const alphaNumericReg = /[a-zA-Z0-9]/

const isEquil = (char1: string, char2: string): boolean => {
    return char1.toLowerCase() === char2.toLowerCase()
}

const isAlphaNumeric = (char: string): boolean => {
    return alphaNumericReg.test(char)
}

const isPalindrome = (str: string): boolean => {
    let startIdx = 0;
    let endIdx = str.length - 1;

    while (startIdx < endIdx) {
        const startChar = str[startIdx]
        const endChar = str[endIdx]

        if (!isAlphaNumeric(startChar)) {
            startIdx += 1;
            continue;
        }

        if (!isAlphaNumeric(endChar)) {
            endIdx -= 1;
            continue;
        }

        if (!isEquil(startChar, endChar)) return false

        startIdx += 1;
        endIdx -= 1;
    }

    return true;
}