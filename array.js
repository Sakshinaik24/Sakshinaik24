const arr = [7,8,9,10];
const arr2 = [8,7,1,15];


function checksorted(arr)
{
for (let i=0; i < arr.lenght - 1; i++)
{
if (arr [i] > arr[i+1])
{
return false;
}
}
return true;
}

console.log("the array is :" + checksorted(arr));
console.log("the array is :" + checksorted(arr2) );
