/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(unorder_list){
  // code goes here
  let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < unorder_list.length - 1; i++) {
            if (unorder_list[i] > unorder_list[i + 1]) {
                swapped = true;
                [unorder_list[i], unorder_list[i + 1]] = [unorder_list[i + 1], unorder_list[i]];
            }
        }
}
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const  unorder_list = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(unorder_list);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

