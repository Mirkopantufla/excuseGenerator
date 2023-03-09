let parrafo = document.querySelector('.mensaje');

let mensaje = '';
let quien = ['Mi perro', 'Mi gato', 'Mi abuela', 'Mi papá', 'Mi elefante', 'Mi pajaro'];
let accion = ['se comio', 'quemó' , 'rompio', 'mojó', 'destruyó'];
let cosa = ['el trabajo', 'la televisión', 'el computador'];
let cuando = ['en la noche', 'en la tarde', 'en la plaza', 'en la cocina', 'en el cerro', 'en la mañana'];

function randomize(){
    let palabra1 = quien[Math.floor((Math.random()*quien.length))];
    let palabra2 = accion[Math.floor((Math.random()*accion.length))];
    let palabra3 = cosa[Math.floor((Math.random()*cosa.length))];
    let palabra4 = cuando[Math.floor((Math.random()*cuando.length))];

    mensaje = palabra1 + ' ' + palabra2 + ' ' + palabra3 + ' ' + palabra4;
    parrafo.innerHTML = mensaje;
};

console.log(randomize());

