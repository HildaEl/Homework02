
// Task1 readString()

function readString(word){
       
       var i=word.indexOf('$');
       var j=word.lastIndexOf(']');
       return word.substring(i,j);
           
}

console.log(readString('[object ${name}]'));


// Task2 randomColorGenerator()

function randomColorGenerator() {
    var hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    var color = '#';
    // as there are combinations of 3 colors each represented by 2 hex nums
    for (var i = 0; i < 6; i++ ) {
        color += hex[Math.floor(Math.random() * 16)];  // mult. by 16 in order to get an index from range 1-16
    }
    return color;
}
  console.log(randomColorGenerator());


  // task 3 guid generator
  function guidGenerator(){
      var format="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
       var hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
      var result='';
    for (var i = 0; i <36; i++ ) {
        if(format.charAt(i)==="X")
        result+= hex[Math.floor(Math.random() * 16)];  
        else
        result+='-';
  }
        return result;
  }

  console.log(guidGenerator());