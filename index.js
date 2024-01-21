//MODO 01
let balance = count(10, 5)
let category = level(balance)

// Cada vitória atribui um ponto para o rank e cada derrota subtrai um ponto do rank.

console.log ("O Herói tem de saldo de " + balance + " pontos e está no nível de " + category)

function count(victories, defeats){
    let balance = victories - defeats
    return balance
}

function level(rank){
    let category = "falha"
    if (rank < 10){category = "Ferro"}
        else if (rank > 10 && rank <= 20){category = "Bronze"}
        else if (rank > 20 && rank <= 50){category = "Prata"}
        else if (rank > 50 && rank <= 80){category = "Ouro"}
        else if (rank > 80 && rank <= 90){category = "Diamante"}
        else if (rank > 90 && rank <= 100){category = "Lendário"}
        else {category = "Imortal"}
    return category

}

//MODO 02
let balance2 = count(10, 5)
let category2 = setBadge(balance2, "Ferro Bronze Prata Ouro Diamante Lendário Imortal")

// Cada vitória atribui um ponto para o rank e cada derrota subtrai um ponto do rank.

console.log ("O Herói tem de saldo de " + balance2 + " pontos e está no nível de " + category2)

function count(victories, defeats){
    let balance = victories - defeats
    return balance
}
function setBadge(rank, badge){
    if (rank < 10){badge = badge.split (" ")[0]}
        else if (rank > 10 && rank <= 20){badge = badge.split (" ")[1]}
        else if (rank > 20 && rank <= 50){badge = badge.split (" ")[2]}
        else if (rank > 50 && rank <= 80){badge = badge.split (" ")[3]}
        else if (rank > 80 && rank <= 90){badge = badge.split (" ")[4]}
        else if (rank > 90 && rank <= 100){badge = badge.split (" ")[5]}
        else {badge = badge.split (" ")[6]}
    return badge
}