// document.getElementById('convert').onclick = tempConvert;
// document.getElementById('clear').onclick = clearForm;
// let allInputs = document.querySelectorAll("input[type='radio']")
// function tempConvert() {
//
//     var fahrenheit = document.getElementById("fahrenheit").value;
//     // var celsius = document.getElementById("celsius").value;
// //   const data=c[index];
// //   if (c) {
// //         celsius = (parseFloat(fahrenheit) - 32) / 1.8;
// //     } else {
// //         fahrenheit = (parseFloat(celsius) * 1.8) + 32;
// //     }
// const ans = getAnswer()
// if(ans==='1'){
//     celsius = (parseFloat(fahrenheit) - 32) / 1.8;
// }
// else {
//     celsius = (parseFloat(fahrenheit) - 32) / 1.8+273.15;
// }5445.0
//
//
//
//     document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
//     document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
// }
// const getAnswer = () => {
//     let ans;
//     allInputs.forEach(
//         (inputEl) => {
//             if (inputEl.checked) {
//                 ans = inputEl.value;
//             }
//         }
//     )
//     return ans;
//     }
//
//
// function clearForm() {
//     document.getElementById('fahrenheit').value = '';
//     document.getElementById('celsius').value = '';
// }


document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert() {

    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;

  if (fahrenheit != '') {
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    } else {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }



    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
}


function clearForm() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
}
