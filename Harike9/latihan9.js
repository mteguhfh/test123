// let buah = {nama : 'apel', warna : 'merah', tebal : 5};
// console.log(buah);

// let test = {...buah, warna : 'hijau', tebal : 20}
// console.log(test);


// var arr = [1,2,3];
// var arr2 = [4,5,6];
// var arr1 = [...arr, ...arr2];
// console.log(arr1)


// let halo = (nama) => {
//     console.log(`Halo ${nama}`)
// }
// halo('Andi');
// let hai = nama => console.log(`Hai ${nama}`)
// hai('Budi');

// let x = function () {
//     console.log('Hai ini X!');
// };
// let y = function (callback) {
//     console.log('Halo ini Y!');
//     callback();
// };
// y(x);

// var w = [0,1,2,3,4,5]

// var x = w.filter((val) => val !== 2);
// var y = w.filter((val) => val % 2 == 0);
// var z = w.filter((val) => val % 2 !== 0);

// console.log(x);
// console.log(y);
// console.log(z);

// var orang = [
//     {nama : "Andi", marga: "Hasibuan"},
//     {nama : "Budi", marga: "Sinaga"},
//     {nama : "Caca", marga: "Pasaribu"}
// ];
// function namaLengkap(item, index) {
//     var fullname = [item.nama,item.marga].join(" ");
//     return fullname;
// }
// function tesMap() {
//     console.log(orang.map(namaLengkap));
//     console.log(orang.map(namaLengkap)[0]);
//     console.log(orang.map(namaLengkap)[1]);
//     console.log(orang.map(namaLengkap)[2]);
// }
// tesMap()  

let janji = new Promise(function(tepati,ingkari){
    let dipenuhi = false;
    if(dipenuhi){
        tepati('Janji Kutepati.');
    } else {
        ingkari('Janji Kuingkari.');
    }
});
janji.then(function(janjiDitepati) {
    console.log(janjiDitepati);
}).catch(function(janjiDiingkari) {
    console.log(janjiDiingkari);
})