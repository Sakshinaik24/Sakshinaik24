const ascendingArray=[1,2,3,4,5];
const descendingArray=[5,4,3,2,1];
const unsortedArray=[3,4,5,6,2,];
	
function checkArrayOrder(arr)
{
let isAscending = true;
let isDescending = true;

for(let i=0;i < arr.length-1;i++){
if( arr[i] < arr[i-1])
{
isAscending=false;
}
if(arr[i] > arr[i=1])
{
isDescending=false;
}
}
}
if(isAscending)
{
return 1;
}
else if( isDescending)
{
return -1;
}
else
{
return 0;
}
const result1=checkArrayOrder(ascendingArray);
const result2=checkArrayOrder(descendingArray);
const result3=checkArrayOrder(unsortedArray);

console.log(result1);
console.log(result2);
console.log(result3);


