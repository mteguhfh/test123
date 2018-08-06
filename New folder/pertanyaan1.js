// kapan kita kasih function sebagai parameter pake kurung sama tidak

function coba() {
    return 5+7;
}

//#function coba dipakai didalam function kucing12anak (dia cuma sbg parameter/blom dipanggil)
function kucing12anak(fn) {
    //function coba baru dijalankan
    console.log("Kucing umur 70 tahun, ajaibnya punya " + fn() + " keturunan");
    //console.log("Kucing umur 70 tahun, ajaibnya punya " + 12 + " keturunan")
}
function lembu12anak(jmlKeturunan) {
    console.log(`Lembu umur 120 tahun, ajaibnya lebih tua dari manusia, 
                    dan punya ${jmlKeturunan} keturunan`);
}
//function coba disini belum dijalankan
kucing12anak(coba);
//function coba disini langsung dijalankan
lembu12anak(coba());

//kenapa pakai buka tutup kurung si function coba?
//var a = coba();
//#original
console.log(coba());
//sama#1
//console.log(12);
//sama#2
//console.log(a);

//function buat test function setInter buatan kita
function testInter(num) {
    console.log("Hello " + num);
}

function setInter(fn, ms) {
    var a = 1;
    for(var count = 0;;count++) {
        if(count == ms * 1000000)
        {
            fn(a);
            count = 0;
            a++;
        }
    }
}
setInter(testInter, 1000);