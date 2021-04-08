import { GetPartitionIdx } from "../../src/application/use-cases/get-partition-idx";
import { ARRAY_LENGHT_ERROR, INVALID_VALUE_ERROR, KEY_MUST_BE_ARRAY_ERROR, NO_ARRAY_ERROR, NUMBER_NEGATIVE_ERROR } from "../../src/constants/ErrorResponses";
import { CustomError } from "../../src/types/CustomError";

describe('Get Partition Idx - use case', () => {
    test('Empty key', async () => {
        const useCase = GetPartitionIdx({});
        
        try {
            useCase.execute();            
        } catch (error) {
            expect(error).toEqual(new CustomError(NO_ARRAY_ERROR));            
        }
    });

    test('Key must be array', async () => {
        const useCase = GetPartitionIdx({arr: 'henlo fren'});
        
        try {
            useCase.execute();            
        } catch (error) {
            expect(error).toEqual(new CustomError(KEY_MUST_BE_ARRAY_ERROR));            
        }
    });

    test('Array lenght', async () => {
        const useCase = GetPartitionIdx({arr: [1]});
        
        try {
            useCase.execute();            
        } catch (error) {
            expect(error).toEqual(new CustomError(ARRAY_LENGHT_ERROR));            
        }
    });

    test('Array with negative elements', async () => {
        const useCase = GetPartitionIdx({arr: [ 1, 2, 6, -3]});
        
        try {
            useCase.execute();            
        } catch (error) {
            expect(error).toEqual(new CustomError(NUMBER_NEGATIVE_ERROR));            
        }
    });

    test('Array with NaN value', async () => {
        const useCase = GetPartitionIdx({arr: [ 1, 2, 6, 'f']});
        
        try {
            useCase.execute();            
        } catch (error) {
            expect(error).toEqual(new CustomError(INVALID_VALUE_ERROR));            
        }
    });

    test('Partition number example A', async () => {
        const useCase = GetPartitionIdx({arr: [ 1, 2, 6, 3]});
        
        const idx = useCase.execute();
        expect(idx).toEqual(2);
    });

    test('Partition number example B', async () => {
        const useCase = GetPartitionIdx({arr: [2, 1, 2, 1, 3, 2]});
        
        const idx = useCase.execute();
        expect(idx).toEqual(3);
    });

    test('Partition number example C', async () => {
        const useCase = GetPartitionIdx({arr: [2, 2, 2, 2, 2, 2, 2, 6, 10, 3, 1, 5, 2, 5, 3, 1, 3, 14]});
        
        const idx = useCase.execute();
        expect(idx).toEqual(10);
    });
});