// buat object cara 1
// var orang = {
//     namaDpn : "Andi", 
//     namaBlkg : "Susilo",
//     usia : 50, 
//     pekerjaan : "Politisi",
//     berjalan : function(nama, kecepatan){
//         console.log(nama+ ' sedang berjalan secepat ' + kecepatan + ' km/jam ')
//     }
// };

// orang.berjalan('budi', 20);

// buat object cara 2
// var Andi = new Object();
// Andi.namaDpn = 'Andi';
// Andi.namaBlkg = 'Susilo';
// Andi.usia = 50;
// Andi.pekerjaan = 'PNS';
// Andi.kucing = 'Anggora';
// Andi.berjalan = function(){
//     console.log(this.namaDpn + ' berjalan ')
// }

// Andi.berjalan();

//buat object cara 3
// var orang = function(nama, usia, job) {
//     this.namaDpn = nama;
//     this.umur = usia;
//     this.pekerjaan = job;
// }

// var Andi = new orang('Andi', 30, 'PNS');
// console.log(Andi.umur);
// var Budi = new orang('Budi', 25, 'Pengamen');
// console.log(Budi.pekerjaan);
// var Jojon = new orang('Jojon', 20, "banci Thailand");
// Jojon.kelamin = 'waria'
// console.log(Jojon.kelamin);

// class makhlukHidup {
//     constructor(nama, usia) {             //=========================>klo mau default value = constructor(nama = 'Andi', usia = 20) biar gak undefined
//         this.nama = nama;
//         this.umur = usia;
//     }
// }
// class manusia extends makhlukHidup {
//     constructor(nama, usia, job, marga){
//         super(nama, usia);  //======================================> buat manggil parents constructor
//         this.pekerjaan = job;
//         this.marga     = marga;
//     }
// }
// class guru extends manusia {
//     constructor(nama, usia, job, marga, bidang){
//         super(nama, usia, job, marga);  //======================================> buat manggil parents constructor
//         this.bidang = bidang;
//     }
// }
// var Andi = new guru('Andi', 30, 'Guru', 'Sihombing', 'Programming');
// console.log(Andi)

// function orang(awal, akhir, usia) {
//     this.nama = {awal1 : awal, akhir1 : akhir};   //=====================> jika nama properti = nama parameter langsung aja tulis nama propertinya
//     this.usia = usia;
// }
// var Andi = new orang('Andi','Susilo',20);
// console.log(Andi)
// console.log(Andi.nama.awal1)
// console.log(Andi.nama.akhir1)

//for each
// var manusia = {
//     kepala: 1,
//     mata: 2,
//     telinga: 2,
//     tangan: 2,
//     kaki: 2,
// };
// for (var namaProp in manusia) {
//     console.log(namaProp + ":" + manusia[namaProp]);
// }

// var arr = [1,2,3,4,5];
// for(var index in arr)
// {
//     console.log(arr[index]);
// }

// var genkKucing = [{nama : 'Anggora'},{nama : 'Garfield'}];
// for(var kucing in genkKucing)
// {
//     console.log(genkKucing[kucing].nama);
// }

// class membuatPersegi {
//     constructor(luas, keliling){
//         this.luas = luas;
//         this.keliling = keliling ;
//     }
// }

// var Persegi = new membuatPersegi(25, 20);
// console.log('Luas: ' + Persegi.luas + ', Keliling: '+ Persegi.keliling);

//object assign
var jomblo = true
var Andi = {usia:27, job:'Polisi'};
var Budi = Object.assign({}, {usia:32, job:'Pilot'});
var Caca = Object.assign({}, Budi, {job:'Akuntan'});
var Dedi = Object.assign({}, {job:'Guru'}, {jomblo});
console.log(Budi);
console.log(Caca);
console.log(Dedi);