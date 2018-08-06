// ==========SORT ASC DESC Function()============
function sort(fn,arr){//2//4
  for (i=0;i<arr.length-1;i++)
  {
  
      for(j=i+1;j<arr.length;j++)
      {
          var hasil= fn(arr[i],arr[j]);//3
          if(hasil>=0)//6
          {
              var temp=arr[i];
              arr[i]=arr[j];
              arr[j]=temp;
          }
      }
  }
  return arr;
}
let x= [40,100,1,5,25,10];
var xAsc = sort(function(a,b){return a-b},x);//1//5
console.log(xAsc);
var xDsc = sort(function(a,b){return b-a},x);
console.log(xDsc);

// ============MIN AND MAX=============
// var arr=[400,100,12,5,25,10];
// var min= arr[0];
// var max= arr[0];
// for(i=1;i<=arr.length;i++)
// {
//         if(arr[i]<min)
//         {
//             min=arr[i];
            
//         }           
//         if(arr[i]>max)
//         {
            
//             max=arr[i];
           
//         }
        
// }

// console.log('Min:'+min);
// console.log('Max:'+max);