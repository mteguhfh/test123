// var z='';
// for(var x=1;x<=5;x++)
// {
//     z+='\n * '
//     for(var y=1;y<=5;y++)
//     {
//         z+=' * '
//     }
// }
// z+='\n';
// for(var x=1;x<=5;x++)
// {
//     for(var y=1;y<=x;y++)
//     {
//         z+=' * '
//     }
//     z+='\n'
// }
// z+='\n';
// solve 17 18
// for(var x=1;x<=5;x++)
// {
//     for(var y=5;x<=y;y--)
//     {
//         z+=' * '
//     }
//     z+='\n'
    
// }
// for(var x=2;x<=5;x++)
// {
//     for(var y=1;y<=x;y++)
//     {
//         z+=' * '
//     }
//     z+='\n'
// }
// console.log(z);
// solve 19    
// for(var x=1;x<=9*2;x+=2)
// {
//     for(var y=9*2;x<=y;y--)
//         {
//             z+=' '
//         }

//     for(var y=1;y<=x;y++)
//     {
//         z+='* '
//     }
//     z+='\n'
// }
// solve 20
for(var x=0;x<=5*2;x+=2)
{
    
    for(var y=1;y<=x;y++)
    {
        z+=' '
    }
    for(var y=5*2;x<=y;y--)
        {
            z+='* '
        }

    z+='\n'
}
//solve 21
for(var x=1;x<=9*2;x+=2)
{
    for(var y=9*2;x<=y;y--)
        {
            z+=' '
        }

    for(var y=1;y<=x;y++)
    {
        z+='* '
    }
    z+='\n'
}
for(var x=0;x<=9*2;x+=2)
{
    
    for(var y=1;y<=x;y++)
    {
        z+=' '
    }
    for(var y=9*2;x<=y;y--)
        {
            z+='* '
        }

    z+='\n'
}
console.log(z);