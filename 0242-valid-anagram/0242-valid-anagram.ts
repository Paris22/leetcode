function isAnagram(s: string, t: string): boolean {
 const arrS:Array<string> = s.split('').sort()
 const arrT:Array<string> = t.split('').sort()
 if (JSON.stringify(arrS) === JSON.stringify(arrT)){
 return true
 }
return false
};