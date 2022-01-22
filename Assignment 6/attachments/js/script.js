
function changeTax() {
    var income = document.getElementById('inc').value
    var wealth = document.getElementById('wel').value
    document.getElementById("tax").value = (0.35 * income) + (0.25 * wealth)

    // tax(income, wealth) = (0.35 * income) + (0.25 * wealth)
}