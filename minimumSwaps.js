/* Write a function to find the number of minimum swaps needed to sort a given array */

function minimumSwaps(arr) {
 
    if (!Array.isArray(arr)) {
      throw Error('Must be an array');
    }

    let newArr = [];
    const temp = Array(arr.length).fill(false);
    let num = 0;

    arr.map((value, index) => {
        newArr[index] = { value, index };
    });

    newArr = newArr.sort((a, b) => b.value - a.value);

    for (let i = 0; i <  arr.length; i++) {
        if (temp[i] || newArr[i].index === i) continue;
        let x = 0;
        let y = i;
        while (!temp[y]) {
            temp[y] = 1;
            y = newArr[y].index;
            x++;
        }

        if (x > 0) num += x - 1;
    }

    return num;
}

minimumSwaps([3, 1, 2, 4]);
