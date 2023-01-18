/*
Papá Noel está empezando a recibir un montón de cartas pero tienen un montón de problemas de formato. Para mejorar la lectura, va a escribir un programa que, dado un texto, lo formatea de acuerdo a las siguientes reglas:

Eliminar espacios al inicio y al final
Eliminar múltiples espacios en blanco y dejar sólo uno
Dejar un espacio después de cada coma
Quitar espacios antes de coma o punto
Las preguntas sólo deben terminar con un signo de interrogación
La primera letra de cada oración debe estar en mayúscula
Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
Poner un punto al final de la frase si no tiene puntuación
Las cartas las escriben inglés y aquí tenemos un ejemplo:

fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.
*/
function fixLetter(letter) {
    letter = letter.trim()
    letter = letter.replace(/\s+/g,' ')
    letter = letter.replace(/\s+(=?\?)/g,'?')
    letter = letter.replace(/\s+(=?\.)/g,'.')
    letter = letter.replace(/\s+(=?\,)/g,',')
    letter = letter.replace(/\,(?!\s)/g,', ')
    letter = letter.replace(/\?+/g,'?')
    letter = letter.replace(/(Santa claus|santa claus|santa Claus)/g,'Santa Claus')
  
    let xx = letter.match(/(\.|\?|\!)(=?\s\w+)/g)
    if(xx != null){
      for(const x of xx){
        letter = letter.replace(
          x, x.substr(0,2)+x.substr(2,1).toUpperCase()+x.substr(3,x.length)
        )
      }
    }
    if(letter.substr(letter.length - 1, 1) != '.' && letter.substr(letter.length - 1, 1) != '?' && letter.substr(letter.length - 1, 1) != '!'){
      letter = letter + '.'
    }
    letter = letter.substr(0,1).toUpperCase() + letter.substr(1,letter.length)
    return letter
}
fixLetter(' hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  ')

