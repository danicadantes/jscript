function revert   (word) {
    let revertWord = '';
    for (let i = word.length-1; i >= 0; i--) {
       revertWord += word[i];        
    }    
    return revertWord;
}
console.log(revert('CIVIC'));
console.log(revert('KAYAK'));
console.log(revert('NOON'));
console.log(revert('?SDROW ESOHT EES OT YNNUF TI DNIF UOY DID'));