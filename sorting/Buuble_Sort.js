let arr=[2,7,4,1,5,3];
let count=0;

for(let k=0;k<arr.length;k++){
    let flag=0;
    for(let i=0;i<arr.length-k-1;i++){
        count++;
        if(arr[i]>arr[i+1]){
            flag=1;
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
    }
    if(flag==0){
        break;
    }
}
console.log(count);
arr.forEach(function(data){
    console.log(data)
})