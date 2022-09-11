


function Quick_sort(arr, start, end) {
 
    if (start < end) {
        let pindex = Partition(arr, start, end);
        Quick_sort(arr, start, pindex - 1);
        Quick_sort(arr, pindex + 1, end);
    }
    return;
}
function Partition(arr, start, end) {
    let pivot = arr[end];
    let pindex = start;
    for (let i = start; i < end; i++) {
        if (arr[i] <= pivot) {
            let temp = arr[i];
            arr[i] = arr[pindex];
            arr[pindex] = temp;
            pindex++;
        }
    }
    let temp = arr[end];
    arr[end] = arr[pindex];
    arr[pindex] = temp;
    return pindex;
}

let arr = [7, 2, 1, 6, 8, 5, 3, 4];
console.log("Before Soritng :");
console.log(arr);
// arr.forEach(element => {
//     console.log(element);
// });
Quick_sort(arr, 0, arr.length - 1);

console.log("After Sorting ");
console.log(arr);
// arr.forEach(element => {
//     console.log(element);
// })