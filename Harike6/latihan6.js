// let mobil = ['Alya','Xenia','Avanza'];

// console.log(mobil)
// console.log(mobil.toString())
// console.log(mobil.join(' , '))

// let mobil = ['Alya','Xenia','Avanza'];
// let w = mobil.length;
// mobil.sort();
// console.log(mobil)
// mobil.reverse();
// console.log(mobil)
// let z = mobil.indexOf('Avanza');

// console.log(w)
// console.log(z)

// let buah = ['Jeruk','Nanas','Apel'];

// buah.shift();
// console.log(buah)
// buah.unshift('Lemon');
// console.log(buah)

// let buah = ['Jeruk','Nanas','Apel'];

// buah.splice(2, 0, 'Lemon', 'Kiwi');
// console.log(buah)
// buah.splice(0, 1);
// console.log(buah)
// delete buah[0];
// console.log(buah)

// let buah = ['Banana', 'Orange',
// 'Lemon', 'Apple', 'Mango'];

// let buah2 = buah.slice(1);
// console.log(buah2)

// let buah4 = buah.slice(1,4);
// console.log(buah4)

// let buah = ['Jeruk','Nanas','Apel'];

// buah.push('Duku');
// console.log(buah)

// buah[buah.length] = 'Pisang';
// console.log(buah)

// buah[6] = 'Mangga';
// console.log(buah)

// let nama1 = ['Andi','Budi'];
// let nama2 = ['Caca','Dede','Euis'];
// let nama3 = nama1.concat(nama2);
// let nama4 = nama2.concat(nama1);

// console.log(nama3)
// console.log(nama4)

//ascending
// var x = [40, 100, 1, 5, 25, 10];

// for(var i =0; i < x.length-1; i++)
// {
//     for(var j = i+1; j < x.length; j++)
//     {
//         if(x[i] > x[j])
//         {
//             var temp = x[i]
//             x[i] = x[j]
//             x[j] = temp
//         }
//     }   
// }
// console.log(x)

//descending
// var x = [40, 100, 1, 5, 25, 10];

// for(var i =0; i < x.length-1; i++)
// {
//     for(var j = i+1; j < x.length; j++)
//     {
//         if(x[i] < x[j])
//         {
//             var temp = x[i]
//             x[i] = x[j]
//             x[j] = temp
//         }
//     }   
// }
// console.log(x)

// var jumlahkan = function(fn, array){
//     for(var i = 0; i < array.length-1; i++)
//     {
//         for(var j = i+1; j < array.length; j++)
//         {
//             array[i] = fn(array[i], array[j])
//         }
//     }
//     return array;
// }

// var arr = [10,20,30]
// var jumlah = jumlahkan(function(a,b){
//                             return a+b
//                         }, arr);
// console.log(jumlah);

//pr
function sort(fn, arr){
    for(var i = 0; i < arr.length-1 ; i++)
    {
        for(var j = i+1; j < arr.length; j++)
        {
            var hasil = fn(arr[i], arr[j]);
            if(hasil > 0)
            {
                var temp = arr[i];
                arr [i]  = arr[j];
                arr[j]   = temp;
            }
        }
    }
    return arr;
}
var fnAminusB = function(a,b){return a-b;}
var fnBminusA = function(a,b){return b-a;}

let x = [-40, 100, 1, -5, 25, 10];

var xAsc = sort (fnAminusB, x);
console.log (xAsc);

var xDsc = sort (function(a,b){return b-a}, x);
console.log (xDsc);


//mencari max & min
// var arr = [40, 100, 1, 4, 2, 5];
// var min = arr[0];
// var max = arr[0];

// for(var i = 1; i < arr.length; i++)
// {
//     if(min > arr[i])
//     {
//         min = arr [i];
//     }
//     if(max < arr[i])
//     {
//         max = arr [i];
//     }
// }
// console.log ('Min : ' + min + '\nMax : ' + max);

