function mlkLoad (){
const weight = document.getElementById('weight').value
const ldMorph = document.getElementById('ldMorph').value
const ldLido = document.getElementById('ldLido')
const ldKeta = document.getElementById('ldKeta')
const loadLido = ldLido.value
const loadKeta = ldKeta.value
const wldM = weight * ldMorph / 10
const wldL = (weight * loadLido) / 20
const wldK = (weight * loadKeta) / 100
document.getElementById('result').innerHTML = "The loading doses are as follows <br><br>" + 
"Morphine "+ (wldM).toFixed(2) + " ml <br>Lidocaine " + (wldL).toFixed(2) + " ml <br>Ketamine " + (wldK).toFixed(2) + " ml"
}

