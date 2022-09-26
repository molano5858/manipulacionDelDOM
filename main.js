let h1= document.querySelector('h1');
let input1=document.querySelector('#calculo1');
let input2=document.getElementById('calculo2');
let btn=document.querySelector('#btnCalcular');
let miVariable="ejemplo";
let mostrarResultado=document.getElementById('mostrarResultado')

// ESCUCHAR EVENTOS CON addEventListener
// primero entre comillas el evento, luego la funcion o el codigo que queremos ejecutar

btn.addEventListener('click', btnOnClick )


function btnOnClick(){
    let valorInput1String= input1.value;
    let valorInput2String= input2.value
    let resultadoString=valorInput1String+valorInput2String
    //OJO QUE ESTOS valorInput1 y valorInput2 EN ESTE MOMENTO SON STRINGS
    console.log(`Strings ${valorInput1String} y ${valorInput2String} son los valores a sumar ${resultadoString}`)

    let valorInput1Number=parseInt(input1.value);
    let valorInput2Number=parseInt(input2.value);
    let resultado= valorInput1Number+ valorInput2Number
    console.log(`Numbers ${valorInput1Number} y ${valorInput2Number} son los valores a sumar y su resultado es: ${resultado} `)

    mostrarResultado.innerHTML="El resultado de la suma es "+ resultado;

    
}




