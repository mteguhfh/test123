var jarak = 120;
var kecepatanA = 60;
var KecepatanB = 40;
var pukulMulai = 9;

var lamawaktuDetik = (120/((60/3600) + (40/3600)));
console.log('lama waktu detik: ' + lamawaktuDetik);
var jamTabrakan = pukulMulai + (Math.floor(lamawaktuDetik/3600));
console.log('jam tabrakan: ' + jamTabrakan);
var menitTabrakan = Math.floor(lamawaktuDetik%3600)/60;
console.log('menit tabrakan: ' + menitTabrakan);
var detikTabrakan = ((lamawaktuDetik%3600)%60);
console.log('detik tabrakan: ' + detikTabrakan);

console.log('total lama waktu tempuh dalam detik' + lamawaktuDetik);
console.log(' tabrakan terjadi pada waktu jam ' + jamTabrakan + ' menit ' + menitTabrakan + ' detik ' + detikTabrakan);