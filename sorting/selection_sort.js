let arr = [34, 67, 4, 2, 45];
console.log(arr.length);


function seletion_Sort(arr) {
    console.log("Before Sorting ");
    arr.forEach(function (data) {
        console.log(data);
    })
    
    let iMin;
    for(let i=0;i<arr.length-1;i++){
        iMin=i;
        for(let j=i+1;j<arr.length;j++){
           if(arr[j]<arr[iMin]){
            iMin=j;
           }
        }
        let temp=arr[i];
        arr[i]=arr[iMin];
        arr[iMin]=temp;

    }
    console.log("After Sorting");
    arr.forEach(function(data){
        console.log(data);
    })

}
seletion_Sort(arr);


