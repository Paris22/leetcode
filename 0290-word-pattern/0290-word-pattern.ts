const wordPattern = (pattern: string, s: string): boolean => {
    const arrS: Array<string> = s.split(" ")

    if (arrS.length !== pattern.length) return false

    for (let i = 0; i < arrS.length; i++) {
        if (arrS.indexOf(arrS[i]) !== pattern.indexOf(pattern[i])) return false
    }

    return true
};