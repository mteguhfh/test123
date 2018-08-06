// var w = [0,1,2,3,4,5]
// // ============filter================
// function fungsifilter(data,kondisi)
// {
//     temp=[];
//      for(j=0;j<data.length;j++)
//     {
//         // temp[j]<
//         if(kondisi(data[j]))
//         {
//          temp.push(data[j]);
//         }
//     } 
//     return temp;
// }
// var cobafilter = fungsifilter(w,function(x){
//     return x!==3;
//  } );
//  console.log(cobafilter);
//  console.log(w);
// // =============map=============
// function fungsimap(data,kondisi)
// {temp=[];    
//     for(i=0;i<data.length;i++)
//     {
//         data[i]=kondisi(data[i])
//        temp.push(data[i]);
           
//     }
//     return temp;
// }
// var cobamap = fungsimap(w,function(x){
//     return x**3;
//  } );
//  console.log(cobamap);
let buah = ['Banana', 'Orange',
'Lemon', 'Apple', 'Mango'];
buah.splice(1,1);
console.log(buah)