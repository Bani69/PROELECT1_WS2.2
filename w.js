
const indicator = document.getElementById("indicator")
document.getElementById("increment").addEventListener("click", function () {
    indicator.innerHTML = parseInt(indicator.textContent) + 1
    var currentp = parseFloat(currentprice.textContent)
    totalproduct.textContent = `${parseFloat(totalproduct.textContent) + currentp}`;


})
document.getElementById("decrement").addEventListener("click", function () {

    const currentval = indicator.innerHTML = parseInt(indicator.textContent)
    if (currentval !== 0) {
        indicator.innerHTML = parseInt(indicator.textContent) - 1
    }
    var currentp = parseFloat(currentprice.textContent)

    var currentproductprice = parseFloat(totalproduct.textContent);

    if (currentproductprice > currentp) {

        totalproduct.textContent = `${parseFloat(totalproduct.textContent) - currentp}`;
    }


})


const solo = document.getElementById("solo")
const goodfor4=document.getElementById("good4")


function check(event) {
    if(goodfor4.checked) {

        document.getElementById("tooltipgroup").style.display="flex"

    }
    else {
        document.getElementById("tooltipgroup").style.display="none"

    }

    if(solo.checked) {

        document.getElementById("tooltipsolo").style.display="flex"

    }
    else {
        document.getElementById("tooltipsolo").style.display="none"
    }
}

