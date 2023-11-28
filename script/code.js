let intOutput = document.querySelector('[data-interest]')
let totalOutput = document.querySelector('[data-total]')
let btn = document.querySelector('[data-btn]')

function interest(){
    let principleAmt = +document.querySelector('[data-principle]').value
    let int = +document.querySelector('[data-i]').value
    let intAmnt = Math.round((int/100)*principleAmt)
    let total = principleAmt+intAmnt
    intOutput.textContent = 'Total interest: '+ intAmnt
    totalOutput.textContent = 'Total amount due: '+total

}

btn.addEventListener('click', interest)