const frutas = ["uva", "morango", "maça","pêra", "laranja"]

frutas.forEach((fruta, index) => {
     console.log (fruta, index)
})

frutas.map((fruta) =>{
    console.log(fruta.startsWith("u"))
})
const frutasComM =  frutas.filter((fruta) => {
    return fruta.startsWith ("m")
})
console.log(frutasComM)