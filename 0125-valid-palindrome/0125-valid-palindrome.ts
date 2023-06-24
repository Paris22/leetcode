const isPalindrome = (str: string): boolean => {
    const nonAlphaNumReg = /[^a-zA-Z0-9]/g

    const palindromStr: string = str.toLowerCase().replace(nonAlphaNumReg, "").split("").reverse().join("")
    const withoutSpacesStr: string = str.toLowerCase().replace(nonAlphaNumReg, "").split("").join("")

    return withoutSpacesStr === palindromStr
};

//Not my but so good resolve
// function isPalindrome(s: string): boolean {
//     s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     let left = 0, right = s.length - 1;
//     while(left < right){
//         if(s[left] !== s[right]) return false;
//         left++;
//         right--;
//     }
//     return true;
// };