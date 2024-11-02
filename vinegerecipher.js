// video:-https://www.youtube.com/watch?v=GQrKEwLZcPY

let obj={
    key: "generated_key",
    encrypted_text: "encrypted_text",
  }
  console.log(obj)
//   let obj1={
//     "key": "generated_key",
//     "encrypted_text": "encrypted_text",
//   }
//   console.log(obj1)//both are same

  function deCryptCipher(text,key){
    console.log(text.length)
    let str="", start=0
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(let i=0;i<text.length;i++){
        const textChar=text.charAt(i).toUpperCase()
        let index=alphabet.indexOf(textChar);
        if (index !== -1) {
            const keyChar = key.charAt(start % key.length).toUpperCase();
            let keyIndex = alphabet.indexOf(keyChar);
            const char = alphabet.charAt((index - keyIndex + 26) % 26);
            str += char;
        } else {
            str += textChar;
        }
       start++
    }
    return str;
  }

  console.log(deCryptCipher(obj.encrypted_text,obj.key))