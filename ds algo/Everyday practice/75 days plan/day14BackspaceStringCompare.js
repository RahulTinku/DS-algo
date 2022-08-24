/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s,t){
     s = useBackSpace(s);
     t = useBackSpace(t);
    return s === t;
}

/**
 * run loop till string contains #,
 * remove the previous element & # from the string
 * @param {*} str 
 * @returns 
 */
const useBackSpace = function(str){
    // run loop till string contains #
    while(str.includes('#')){
        //find the index of #
        const index = str.indexOf('#');
        // remove previous charater and the # symbol from the string
        str = str.substring(0, index-1) + str.substring(index+1, str.length)
    }
    //return string after using all backspace
    return str;
}

console.log(backspaceCompare('ab##', 'a#d#'))