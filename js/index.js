function testeoJava() {
    console.log('holi');
}
// Experimento para checkbox

function sumaStreaming() {
    // Obteniendo el objeto de elementos de checkbox
    let seleccionados = document.getElementById("miform").streaming;
    let valores = [];
    for (let i=0; i < seleccionados.length; i++) {
        if (seleccionados[i].checked) {
            valores.push(Number(seleccionados[i].value));
            // acumulador = acumulador + Number(checkboxes[x].value);
            }
        }
    const acumular = (acumulador,numero) => acumulador + numero;
    const acumulado = valores.reduce(acumular,0);
    return acumulado;
}

function testeo2() {
    console.log(sumaStreaming());
}

function peliculas (numMovies) {
    return numMovies * 45;
}

function operacion1() {
    const auxiliar = document.getElementById('pelicula');
    const value = auxiliar.value;
    console.log(`Valor: ${value}`);
}