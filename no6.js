var tglHariIni = new Date()
console.log('hari' +' ' + 'ini' + ' '+ 'tanggal' + ' ' + tglHariIni.getDate() + '-' + (tglHariIni.getMonth() + 1) + '-' + (tglHariIni.getFullYear()));
console.log('besok' +' '+ 'tanggal' + ' ' + (tglHariIni.getDate()+1) + '-' + (tglHariIni.getMonth() + 1) + '-' + (tglHariIni.getFullYear()));
console.log('kemarin' +' '+ 'tanggal' + ' ' + (tglHariIni.getDate()-1) + '-' + (tglHariIni.getMonth() + 1) + '-' + (tglHariIni.getFullYear()));
