function testeoJava() {
    console.log('holi');
}
// Experimento para checkbox

function sumaStreaming() {
    let seleccionados = document.getElementById("miform").streaming;
    let test = [];
    console.log(seleccionados);
    for (let i=0; i < seleccionados.length; i++) {
        if (seleccionados[i].checked) {
            test.push(Number(seleccionados[i].value));
            // acumulador = acumulador + Number(checkboxes[x].value);
            }
        }
    const acumular = (acumulador,numero) =>  acumulador+ numero;
    const acumulado = test.reduce(acumular,0);
    console.log(test);
    console.log(acumulado);
    return acumulado;
}

function peliculas (numMovies) {
    return numMovies * 45;
}

function operacion1() {
    const auxiliar = document.getElementById('pelicula');
    const value = auxiliar.value;
    console.log(`Valor: ${value}`);
}