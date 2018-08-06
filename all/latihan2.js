//var x = 'Halo Dunia';

//console.log(x.length);
//console.log(x.indexOf('Dunia'));
//console.log(x.indexOf('o'));
//console.log(x.substr(5, 3));
//console.log(x.substr(2, 5));
//console.log(x.slice(5, 8));
//console.log(x.slice(2, 5));
//console.log(x.split(' ')); 
//console.log(x.split('u'));
//console.log(x.split('a'));

//var x = 'Halo Dunia Mars Test';
//var jerapah = ['Halo', 'Dunia', 'Mars', 'Test'];
//var jerapah1 = x.split(' ');
//var marsSplit = jerapah1[2].split('a');

//console.log(jerapah);
//console.log(jerapah1);
//console.log(marsSplit);
//console.log(x.split(' ')[1]);

//var x = 'halohaha';
//var y = 'DUNIA';
//var z = 12345;

//console.log(x.toUpperCase());
//console.log(y.toLowerCase());
//console.log(x.replace('ha', 'mi'))
//slash g ngubah semua
//console.log(x.replace(/ha/g, 'mi'))
//console.log(z.toString())
//console.log(typeof(z.toString()))

//mengubah string jd integer/float(desimal)
//let a = parseInt('123');
//let b = parseFloat('123');
//let c = parseInt('1234.5678');
//let d = parseFloat('1234.5678');
//let e = parseInt('Halo Dunia');
//let f = parseFloat('Halo Dunia');
//console.log(a)
//console.log(b)
//console.log(c)
//console.log(d)
//console.log(e)
//console.log(f)

//pengunaan matematika
//.PI = sebuah properti
//console.log(Math.PI);
//console.log(Math.abs(-4.7));
//.pow yg dpn angka yg mau di pangkat, mau pangkat brp
//console.log(Math.pow(8, 2));
//sqrt akar 2
//console.log(Math.sqrt(64));
//cbrt akar 3
//console.log(Math.cbrt(8));

//.random => menghasilkan angka random dr 0-0.9999xxx
//console.log(Math.random());
//.random => menghasilkan angka maks 100
//console.log(Math.floor(Math.random()*100) + 1;
//console.log(Math.max(1,3,5));
//console.log(Math.min(1,3,5));

//let a = new Date()

//console.log(a.getFullYear())
// get month mulai dr 0 makanya + 1
//console.log(a.getMonth()+1) 
//console.log(a.getDate())
// get day mulai dr 0 dan minggu = 0 makanya + 1
//console.log(a.getDay()+1)
//console.log(a.getHours())
//console.log(a.getMinutes())
//console.log(a.getSeconds())
//console.log(a.getMilliseconds())

var tglHariIni = new Date()

console.log(tglHariIni.getDate() + '/' + (tglHariIni.getMonth() + 1) + '/' + (tglHariIni.getFullYear()));