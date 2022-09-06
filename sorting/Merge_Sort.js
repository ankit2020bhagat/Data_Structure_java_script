let arr = [45, 6, 41, 23, 5, 67];
function MergeSort(arr) {

    var len = arr.length;
    console.log("array Length: ",len);
    if (len <= 2) {
        return;
    }
   
    var mid = Math.floor(len/2);
    console.log("mid: ", mid);
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < mid; i++) {
        leftArr[i] = arr[i];
    }
    console.log("left Arr");
    leftArr.forEach(function (data) {
        console.log(data)
    })
    for (let j = 0; j < len - mid; j++) {
        rightArr[j] = arr[mid + j];
    }
    console.log("right arr");
    rightArr.forEach(function (data) {
        console.log(data);
    })
    MergeSort(leftArr);
    MergeSort(rightArr);
    Merge(leftArr, rightArr, arr);


}
function Merge(leftArr, rightArr, arr) {
      var nL=leftArr.length;

      var nR=rightArr.length;
      let i=0,j=0,k=0
      while(i<nL && j<nR){
        if(leftArr[i]<rightArr[j]){
           arr[k]=leftArr[i];
           i++;
        }
        else{
            arr[k]=rightArr[j];
            j++;
        }
        k++;

      }

      while(i<nL){
        arr[k]=leftArr[i];
        i++;
      }
      while(j<nR){
        arr[k]=rightArr[j];
        j++;
      }
}
console.log("Before Sorting ",arr);
MergeSort(arr);
console.log("After Sorting ",arr);
