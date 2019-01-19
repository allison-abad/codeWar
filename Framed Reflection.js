function frame(text, symbol) {
 let phrase = text;
 let frame = symbol;
 let len = text.length;

 let coconut = phrase.split(" ").reverse().join(" ");
 console.log(coconut);

 var count = 0;

 do {
   count ++ ;
   console.log(frame);
 }while (count < len.length) {

 };

 console.log(len);

 //console.log(frame);

 console.log(frame + ' ' + phrase + " " +frame)
}

frame("i like dogs", "~");
