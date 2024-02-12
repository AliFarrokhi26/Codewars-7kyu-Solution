// DESCRIPTION:
// No Story

// No Description

// Only by Thinking and Testing

// Look at result of testcase, guess the code!

//! ** Solution 1 **
function testit(s){
    let arr=s.split(" ");
    for(let i=0;i<arr.length;i++){
     let lastLetter=arr[i].slice(-1);
      let upperLastLetter=lastLetter.toUpperCase();
      arr[i]=arr[i].slice(0,-1) + upperLastLetter;
    }
    return arr.join(" ");
  }

  //! ** Solution 2 **
  function testit(s){
    return s.split(" ").map(item=>item.slice(0,-1)+item.slice(-1).toUpperCase()).join(" ");
  }