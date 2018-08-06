//console.log()
//object. methode / function (paramter)

//mengunakan function
//1
// function contoh() {
//     console.log('Halo Dunia!');
//    }

//    contoh();

//2
// var contoh = function () {
//     console.log('Halo Dunia!');
//    }

//    contoh();

//3
//    let x = 10
//    let y = 50

//     function contoh() {
//         console.log(x+y)
//    }
//    contoh();

// function namaku(nama) {
//     console.log (nama+' Susilo');
//    }

//    namaku('Adi');
//    namaku('Budi');
//    namaku('Caca');
//    namaku('Dedi');

// function printNamaDanTahun(nama,tahunLahir) {
//     console.log (nama+' Lahir th '+tahunLahir);
//     }

// printNamaDanTahun('Adi','1990');
// printNamaDanTahun('Budi','1991');
// printNamaDanTahun('Caca','1992');
// printNamaDanTahun('Dedi','1993');

// function printNamaDanTahun(nama,tahunLahir) {
//     console.log (arr[0]+' Lahir th '+arr[1]);
//     }

// printNamaDanTahun(['Adi','1990']);

//return function
// function total(x,y) {
//     z = x + y
//     return z
// }
// function minus(x,y) {
//     z = x - y
//     return z
// }
// var hasil1 = total(4,5);
// var hasil2 = minus(4,5);
// console.log(hasil1);
// console.log(hasil2);

//recrusive function
// function Pangkat(x,y){
//     if (y == 1) {
//     return x;
//     }
//     else {
//     return x=x*Pangkat(x,y-1);
//     }
//    }
//    console.log(Pangkat(7,2))

//Fn dlm Fn
// function kali(x) {
//     if (x < 2) {
//         return 1;
// }
//     else {
//         return (x * tiga());}
//     }
// function tiga(){
//      return 3;
// }
// console.log(kali(5))

//settimeout
// function waktu() {
//     console.log('Halo');
// }
// setTimeout(waktu, 1000);
// console.log('Yuk');

//clear timeout
// function waktu() {
// console.log('Halo');
// }
// var x = setTimeout(waktu, 3000);
// clearTimeout(x)
// console.log('Yuk');

//set interval
// function waktu() {
// console.log('Halo');
// }
// setInterval(waktu, 1000);

// var count = 0;
// function waktu() {
//     console.log('Halo');
//     count++;
//     if(count == 5)
//     {
//         clearInterval(x);
//     }
// }
// var x = setInterval(waktu, 1000)

function waktu() {
    var date = new Date();
    console.log('menit ke: ' + date.getMinutes() + ' detik ke: ' + date.getSeconds())
}
var x = setInterval(waktu, 1000);




// var tambah = function(numbers){
//     return (numbers[0] + numbers [1]);
// }
// var kurang = function(numbers){
//     return (numbers[0] - numbers [1]);
// }
// function printHasil(fn, numbers){
//     var hasil = fn(numbers);
//     console.log(hasil);
// }
// printHasil(kurang, [4,2]);