export interface IErrorResponse {
    code: number;
    msg: string;
}

export const NO_ARRAY_ERROR : IErrorResponse = {
    code: 424,
    msg: 'Array of numbers must be given'
}

export const KEY_MUST_BE_ARRAY_ERROR : IErrorResponse = {
    code: 424,
    msg: "'arr' key value must be an Array"
}

export const ARRAY_LENGHT_ERROR : IErrorResponse = {
    code: 424,
    msg: "'arr' key value must contain more than 2 values"
}

export const NUMBER_NEGATIVE_ERROR : IErrorResponse = {
    code: 424,
    msg: "All numbers in array must be positive"
}

export const INVALID_VALUE_ERROR : IErrorResponse = {
    code: 424,
    msg: "All elements in array must be positive number"
}