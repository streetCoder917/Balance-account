var input_pay = document.getElementById('inp_pay')
var input_get = document.getElementById('inp_get')

var button_pay = document.getElementById('will_pay')
var button_get = document.getElementById('will_get')

var result_get = document.getElementById('res_get')
var result_pay = document.getElementById('res_pay')


button_pay.addEventListener('click', () => {
    var paying = Math.ceil((input_get.value * 10) / 7)
    if (isNaN(paying) || paying == '') {
        alert('من فضلك أدخل رقم !!')
    } else {
        result_pay.innerHTML = `${paying} جنيه مصرى`
    }
})


button_get.addEventListener('click', () => {
    var getting = Math.floor(input_pay.value * 0.7)
    if (isNaN(getting) || getting == '') {
        alert('من فضلك أدخل رقم !!')
    } else {
        result_get.innerHTML = `${getting} جنيه مصرى`
    }
})