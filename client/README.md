# Getting Started with React App
In this client app you can cosume the Rest API server located in this reposity, it displays how the algorithm of the following problem was made

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


# Problem
You are given an unordered array consisting of positive integers where the array’s size doesn’t have any limitations. Create an algorithm which finds the <b>index</b> number at which the left and right side of the array gives the same result.

## Example A:
- [ 1, 2, 6, 3 ], the answer is "2" because "1+2=3" equals the last number "3" and the partition number is "6".

## Example B:
- [2, 1, 2, 1, 3, 2] , the answer is "3" because "2+1+2=5" equals the last side sum "3+2=5" so the partition number is "1".

## Example C:
- [ 2, 2, 2, 2, 2, 2, 2, 6, 10, 3, 1, 5, 2, 5, 3, 1, 3, 14], the answer is "10" so the partition number is "1"

<br/>

# Solution (Typescript)

You can find the full solution + extras at [get-partition-idx.ts](../server/src/application/use-cases/get-partition-idx.ts)

```ts

const arr = [1, 2, 6, 3];

const FindPartitionIndex = () => {
    let values : number[] = (arr as number[]).reverse();

    let leftSum = 0,
        rightSum = 0, 
        idx = values.length - 1;
    
    // Make the complete sum of the left side
    leftSum = values.reduce((total,b) => {
        return +total + +b
    },0)

    // Increase value from right and compare with the left sum
    for (let i = 0; i < values.length; i++) {
        const num = +values[i];
        
        rightSum += num
        
        if(rightSum == leftSum)
            return idx

        idx = idx - 1
        leftSum -= num
    }

    // Index not found :O
    return -1
}

console.log('The partition index is: '+FindPartitionIndex());
```

## Explanation
First of all we need to declare our variables.

In the code excecution we need to check the sum of elements from left and right to later compare them and try to get the partition index.

For the left sum the order of the elements dont really care so thats why I reverse array of elements to later start making the sum from right

- The original code at [get-partition-idx.ts](../server/src/application/use-cases/get-partition-idx.ts) implements a lot of validations like check if the given array is not empty or every element is a positive number.

```ts
let values : number[] = (arr as number[]).reverse();

let leftSum = 0,
    rightSum = 0, 
    idx = values.length - 1;
```

Get the total sum of each element in the array\
I parse each element to number by adding a "+" before the variable #JsThings

- The original code at [get-partition-idx.ts](../server/src/application/use-cases/get-partition-idx.ts) implements a validation checking if each element is a positive number.
- After of this process the final result is validated to check if the result is a number because it could be a NaN if one of the elements.
- Instead of checking by each cycle I verify at the end if is a NaN, in my opinion this is more performance friendly but it could change.

````ts
// Make the complete sum of the left side
leftSum = values.reduce((total,b) => {
    return +total + +b
},0)
````

Time to check, in each cycle i verify with my total result (leftSum) vs the current right sum, so in each iteration if the leftSum and the rightSum does not match I increase the right sum value  (Remember the array is reversed) so a new add if from the right to left in the original array.

In case of the leftSum and the rightSum does not match the leftSum value the current checking right value must be reduced from the leftSum

````ts
// Increase value from right and compare with the left sum
for (let i = 0; i < values.length; i++) {
    const num = +values[i];
    
    rightSum += num
    
    if(rightSum == leftSum)
        return idx

    idx = idx - 1
    leftSum -= num
}
````

This exercise depends on the input, so not all array's received can be succesfully resolved
````ts
// Index not found :O
return -1
````