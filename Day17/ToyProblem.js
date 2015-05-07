var checkIfPalindrome = function(str){
	// var firstHalf = str.split((str.length /2));
	// var secondHalf = str.
	if (str === str.split('').reverse().join('')){
		return true;
	}
	return false;
}

// return str ===str.split('').reverse().join('') ? true : false;

var str = 'abcba';//true
var str2 = 'abccba';//true
var str3 = 'abcd';//false