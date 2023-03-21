function CheckPalindrome(str){

    ReverseString = str.split('').reverse().join('');

    if(ReverseString == str){
      console.log(ReverseString, "is a palindrome. Reading from forward & backward give same meaning")
      return true; 

    }else{
      console.log("they are not the same.", ReverseString,  "&",  str);
      return false;
    };
    
  };
  console.log(CheckPalindrome("book"));