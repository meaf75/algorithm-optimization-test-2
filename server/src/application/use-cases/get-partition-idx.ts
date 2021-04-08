import { CustomError } from "../../types/CustomError";
import { ARRAY_LENGHT_ERROR, INVALID_VALUE_ERROR, KEY_MUST_BE_ARRAY_ERROR, NO_ARRAY_ERROR, NUMBER_NEGATIVE_ERROR } from "../../constants/ErrorResponses";

interface IGetPartitionIdx {
    arr?: any;
}

export const GetPartitionIdx = (args: IGetPartitionIdx) => {
       
    const { arr } = args;
    
    const validateFields = () => {
        if(!arr)
            throw new CustomError(NO_ARRAY_ERROR);

        if(!Array.isArray(arr))
            throw new CustomError(KEY_MUST_BE_ARRAY_ERROR);

        if(arr.length < 3)
            throw new CustomError(ARRAY_LENGHT_ERROR);
    }

    const FindPartitionIndex = () => {

        let values : number[] = (arr as number[]).reverse();

        let leftSum = 0,
            rightSum = 0, 
            idx = values.length - 1;
        
        // Make the complete sum of the left side
        leftSum = values.reduce((total,b) => {
            
            // Also check the number state
            if(+b < 0)
                throw new CustomError(NUMBER_NEGATIVE_ERROR);

            return +total + +b
        },0)
        
        if(isNaN(leftSum))  // Check all sum is ok instad of verify each element
            throw new CustomError(INVALID_VALUE_ERROR);
        

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

    const execute = () => {
        validateFields();
        return FindPartitionIndex();
    }
    
    return {
        execute
    };
}