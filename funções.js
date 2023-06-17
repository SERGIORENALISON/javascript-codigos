

function calculaMedia (media) {

    if (media >= 7) {
        console.log("Passou!")
    } else if (media >= 5 && media < 7) {
        console.log("Recuperação!")
    } else {
        console.log("Reprovado!")
    }
}
calculaMedia(7)
calculaMedia(9)
calculaMedia(6)

function calculaDobro(valor){
    console.log(valor * 2)
}
calculaDobro(3)