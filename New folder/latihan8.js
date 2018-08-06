// var orang = {
//     namaDpn : "Andi",
//     namaBlkg : "Susilo",
//     usia : 50, 
//     pekerjaan : "Politisi",
//     berjalan:function(){
//         console.log(this.namaDpn+ ' sedang berjalan')
//     },
//     lari : function(nama,kecepatan)
//     {
//         console.log(nama+' sedang berjalan secepat'+ kecepatan +'km/jam')
//     },
//     nama2Saudara:['toni','jefri','putra']
//     };


//     console.log(orang.pekerjaan);
//     orang.berjalan();
//     orang.lari('budi',20);
//     console.log(orang.nama2Saudara[1]);

// =========================================

// var Andi = new Object();

// Andi.namaDpn ='Andi';
// Andi.namaBlkg='Susilo';
// Andi.pekerjaan='PNS';
// Andi.usia='50';
// Andi.berjalan=function(){
//     console.log(this.namaDpn+ ' berjalan')
// }

// Andi.berjalan();

// =========================================

// =============function cetakan object=============
// var orang = function(nama,usia,job)
// {
//     this.namaDpn= nama;
//     this.umur= usia;
//     this.pekerjaan = job;
// }
// andi object orang cetakan=======================
// var Andi= new orang('Andi',30,'PNS');
// console.log(Andi.umur);
// var Budi = new orang('Budi',25,'Pengamen');
// console.log(Budi.pekerjaan);
// var Jojon = new orang('Jojon',20,'Banci Thailand');
// console.log(Jojon.namaDpn);
// Jojon.kelamin ='waria';
// console.log(Jojon.kelamin);

// ======================================================
// class orang {
//     constructor(nama, usia, job) {
//     this.namaDpn = nama;
//     this.umur = usia;
//     this.pekerjaan = job;
//     }
//     } 


// class guru extends orang {
//     constructor(nama, usia,job,bidang)
//     { super(nama,usia,job);
//         this.bidang= bidang;
//     }
// }

// var Andi = new guru('Andi', 30, 'PNS','spesialis');
//     console.log(Andi)

// ====================TURUNAN INHERITANCE===============
// class makhlukhidup{
//     constructor(nama,usia)
//     {
//         this.nama= nama;
//         this.umur= usia;
//     }
// }

// class manusia extends makhlukhidup{
//     constructor(nama,usia,job,marga)
//     {
//         super(nama,usia);
//         this.pekerjaan= job;
//         this.marga= marga;
//     }
// }

// class guru extends manusia{
//     constructor(nama,usia,job,marga,bidang)
//     {
//         super(nama,usia,job,marga)
//         this.bidang= bidang;
//     }
// }


// var budi = new guru('budi',20,'maling','xyz','curanmor')
// console.log(budi.bidang);

// function orang(awal, akhir, usia) {
//     this.nama = {awal, akhir};
//     this.usia = usia;
//     }
//     var Andi = new orang ('Andi','Susilo',20);
//     console.log(Andi)
//     console.log(Andi.nama.awal)
//     console.log(Andi.nama.akhir)

// ACCESS METHOD===================
    // var orang = {
    //     namaDpn : "Andi",
    //     namaBlk : "Susilo",
    //     usia : 50,
    //     namaFull : function() {
    //     return this.namaDpn + " " + this.namaBlk;
    //     }
    //     }; console.log(orang.namaFull)
    //     console.log(orang.namaFull())
// =================LOOPING DARI Object===============
    // var manusia = {
    //     kepala: 1,
    //     mata: 2,
    //     telinga: 2,
    //     tangan: 2,
    //     kaki: 2,
    //     };
      
    //     for (namaProp in manusia) {
    //     console.log(namaProp + ":" + manusia[namaProp]);
    //     }

// ================ARRAY OF Object======================
// objectdulu[array].namaproperty
var gangkucing=[{nama:'anggora'},{nama:'garfil'}];
for (var kucing in gangkucing)
{

    console.log(gangkucing[kucing].nama+""+kucing);
}

// =================ARRAY IN OBJECT=================
//objectdulu.namaproperty[array];
var umagon ={suara:["merume","maruru"]}
var prop="suara"
console.log(umagon.suara[0]);
var test1= umagon.suara[1]
console.log(umagon["suara"][1])
console.log(umagon[prop][1])

function masakan()
{
    return {masak:"muska",
    fn:function()
    {
        console.log("test");
    }
}
}
// ====================SKIP AJA======================
// function Orang(nama, lahir, job) {
//     this.nama = nama;
//     this.lahir = lahir;
//     this.job = job;
//     }
//     Orang.prototype.marga = 'Hasibuan';
//     Orang.prototype.usia = function() {
//     return 2017 - this.lahir;
//     };
//     var budi = new Orang('Budi', 1992, 'PNS');
//     console.log(budi.marga);
//     console.log(budi.usia());

// var jomblo = true
// var Andi =
// {usia:27, job:'Polisi'};
// var Budi =
// Object.assign({}, {usia:32, job:'Pilot'});
// var Caca =
// Object.assign({}, Budi, {job:'Akuntan'});
// var Dedi =
// Object.assign({}, {job:'Guru'}, {jomblo});
// console.log(Budi);
// console.log(Caca);
// console.log(Dedi);