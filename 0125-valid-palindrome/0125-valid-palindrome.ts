const isPalindrome = (str: string): boolean => {
    const nonAlphaNumReg = /[^a-zA-Z0-9]/g

    const palindromStr: string = str.toLowerCase().replace(nonAlphaNumReg, "").split("").reverse().join("")
    const withoutSpacesStr: string = str.toLowerCase().replace(nonAlphaNumReg, "").split("").join("")

    return withoutSpacesStr === palindromStr
};