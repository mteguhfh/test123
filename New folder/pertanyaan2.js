var kucing = { 
    nama: "Anggo",
    umur: 120,
    kelamin: "Jantan",
    kesehatan: "patah hati",
    karir: "Pensiunan di panti jompo",
    mantanIstri: 15,
    penyakit: function (namas) {
        //ini error
        //console.log(nama + " terkena penyakit " + namas);
        //ini bisa
        console.log(kucing.nama + " terkena penyakit " + namas);
        //ini bisa juga karena this nunjuk ke object kucing itu sendiri
        //console.log(this.nama + " terkena penyakit " + namas)
    }
};

kucing.penyakit("Alzheimer");

class KucingGaul {
    constructor(nama) {
        this.nama = nama,
        this.umur = 120,
        this.kelamin = "Jantan",
        this.kesehatan = "patah hati",
        this.karir = "Pensiunan di panti jompo",
        this.mantanIstri = 15
    }
}
class objKosong {
    constructor() {

    }
}
var newobj = new objKosong();
newobj.nama = "Test";
console.log(newobj);

//tidak bikin error tapi property nama dari kucingSans itu undefined karena tidak diisi
var kucingSans = new KucingGaul();
//nama yang tadi undefined jadi Sans
kucingSans.nama = "Sans";
//cara kedua isi nama langsung pas buat objectnya lewat constructor
var kucingGas = new KucingGaul("Gas");

console.log(kucingSans.nama + " sahabat " + kucingGas.nama);

//Inheritance

class Hewan {
    constructor(nama) {
        this.nama = nama;
        this.umur = 0;
        this.kelamin = "";
    }
}

class Kucing extends Hewan {
    constructor(nama) {
        //super itu menjalankan constructor dari parentnya
        super(nama);
        this.meong = function () {
            console.log(this.nama + " sedang meong-meong");
        }
    }
}

class Anjing extends Hewan {
    constructor() {
        super();
        this.gong = function () {
            console.log(this.nama + " sedang gong-gong");
        }
    }
}

var kucingSlowBro = new Kucing("Mordekai");
 console.log(kucingSlowBro.nama);
 kucingSlowBro.meong();

 //function itu alat yang bisa menerima parameter. (seperti alat pemotong apel)
 //parameter itu sesuatu yang dikirim kedalam sebuah function. (apelnya)
 //method itu sebenernya sebuah function, tapi kenapa disebut method,
 //karena dia berada didalam sebuah object.


 var umagon = { suara: ["merumerume", "maruru"] };
 var prop = "suara";
 console.log(umagon.suara[0]);
 var test1 = umagon["suara"];
 //isi test1 = ["merumerume", "maruru"]
 console.log(test1[1]);
 //sama kyk diatas
 console.log(umagon["suara"][1]);
 //sama kyk diatas 
 console.log(umagon[prop][1]);

 //konsep yg sama seperti diatas
 function test23() {
     return 5;
 }
 var check = test23();
 check = check.toString();
 //dibawah ini sama kyk diatas
 var check = test23().toString();
 //konsep sama kyk yg diatas
 function masakan(isiMasak) {
     //yg direturn itu object
     return { 
         masak: isiMasak, 
         fn: function() {
            console.log("test");
        } 
    };
 }

 var newCreation = masakan("Muska"); 
 //yang atas artiya yg bawah
//  newCreation = { 
//     masak: "muska", 
//     fn: function() {
//         console.log("test");
//     } 
//  };
newCreation.fn();
masakan().fn();
console.log(masakan("Masuk").masak);

//array awal ikut berubah
var arr = [5,2,3];
var arr1 = arr;
arr1[0] = 7;
console.log(arr); //[7,2,3]

//kalo mau duplikat terpisah
var arr2 = [];
for(var index in arr)
{
    arr2.push(arr[index]);
}
arr2[0] = 9;
console.log(arr); //[7,2,3]

//singkatan duplikat dari diatas
var arr3 = [...arr];
arr3[1] = 3;
console.log(arr); //[7,2,3]



