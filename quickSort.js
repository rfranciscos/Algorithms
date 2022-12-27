// Quicksort - https://en.wikipedia.org/wiki/Quicksort
// Videos:
//  https://www.youtube.com/watch?v=MZaf_9IZCrc,
//  https://www.youtube.com/watch?v=uXBnyYuwPe8,
//  https://www.youtube.com/watch?v=0SkOjNaO1XY,
//  https://www.youtube.com/watch?v=wx5juM9bbFo
// Explanation:
//  Quicksort is an algorithm that use the approach divide and conquer. Basic has a iteration for each element of array to find the correct position of element, and to do this the algorithm "dived" the array between number less then and greater then the pivot. 
// Steps:
//  1 - iterate each element of arr;
//  2 - set and pivot (element that want find the correct position);
//  3 - set all numbers less then pivot to left side and greater then pivot to right side;
//  4 - return the right position of pivot for the next iteration;

const partition = (arr, initialIndex, finalIndex) => {
  const pivotValue = arr[finalIndex]; // O(1)
  let pivotPosition = initialIndex; // O(1)
  for(let i = initialIndex; i <  finalIndex; i++) { // O(n)
    if (arr[i] <= pivotValue) {
      [arr[i], arr[pivotPosition]] = [arr[pivotPosition], arr[i]];
      pivotPosition++;
    }
  }
  [arr[pivotPosition], arr[finalIndex]] = [arr[finalIndex], arr[pivotPosition]];
  return pivotPosition;
}

const quickSort = (arr, initialIndex, finalIndex) => {
  if(initialIndex >= finalIndex) return; // O(1)
  const p = partition(arr, initialIndex, finalIndex); // O(N)

  quickSort(arr, initialIndex, p - 1); // O(N)
  quickSort(arr, p + 1, finalIndex); // O(N)
} // O(nˆ2)


const arrTest = [-1,-7,0,4,12,8,2,10];
console.log('Input', arrTest);
quickSort(arrTest, 0, arrTest.length - 1);
console.log('output', arrTest);