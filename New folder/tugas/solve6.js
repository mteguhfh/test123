let x= ["apel","doni","budi"];
for (i=0;i<x.length-1;i++)
{

    for(j=i+1;j<x.length;j++)
    {
        if(x[i]<x[j])//tanda
        {
            var sort=x[i];
            x[i]=x[j];
            x[j]=sort;
        }
    }
}
console.log(x);

// ===============FUNCTION PELAJARI====================
// var jumlahkan= function(fn,array)
// {
//     for(i=0;i<array.length-1;i++)
//     {
//         for(j=i+1;j<array.length;j++)
//         { array[i]=fn(array[i],array[j]);
//         }
//     }
//     return array;
// }
// var arr=[10,20,30];
// var jumlah = jumlahkan(function(a,b){return a+b}, arr);
// console.log(jumlah);
