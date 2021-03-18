const minimo=1, maximo=20
let numeros = []
let auxAleat
let repeticionesMayor
i=0


while(i<20){
    auxAleat = obtenerNumeroAleatorio(minimo, maximo)
    numeros.push(auxAleat)
    i++
}

numeros = ordenarArreglo(numeros)
repeticionesMayor = obtenerRepeticionesMayor(numeros)

console.log(numeros)
console.log("Numero mayor= "+ numeros[numeros.length-1])
console.log("Cantidad de veces que se repitio el mayor= "+repeticionesMayor)






function obtenerNumeroAleatorio(min, max){
    //retorna un numero entero aleatorio entre [min, max], no esta verificado que siga distribucion aleatoria uniforme
    let al
    al = ((Math.random() * maximo) +minimo ).toFixed(0)
    al = parseInt(al)
    return al
}

function intercambiar (numeros, ind1, ind2){
    let aux
    aux = numeros [ind1]
    numeros [ind1] = numeros [ind2]
    numeros [ind2] = aux
    return numeros
}

function ordenarArreglo(numeros){
    let i=0
    let cambio = true
    while (cambio == true){
        cambio = false
        i=0
        while (i<numeros.length-1) {
            //onsole.log("numeros["+i+"]="+ numeros[i] +"---numeros["+ (i+1) +"]="+numeros[i+1])
            if ( numeros[i] > numeros[i+1] ) { 
                //console.log("Procedemos a intercambiar")
                numeros = intercambiar(numeros, i, i+1)
                cambio = true
            }
            //console.log("numeros["+i+"]="+ numeros[i] +"---numeros["+ (i+1) +"]="+numeros[i+1])
            i++
    
            //console.log("===================================================================")
        }
    }
    return numeros
}

function obtenerRepeticionesMayor(numeros){
    let i=0
    let indMaximo = numeros.length-1
    let repeticionesMayor = 0
        console.log("numeros["+indMaximo+"]="+ numeros[indMaximo] +"---numeros["+ (indMaximo-i) +"]="+numeros[indMaximo-i])
    while(numeros[indMaximo] == numeros[indMaximo-i]){
        console.log("numeros["+indMaximo+"]="+ numeros[i] +"---numeros["+ (indMaximo-i) +"]="+numeros[i+1])
        repeticionesMayor ++
        i++
    }
    return repeticionesMayor
}