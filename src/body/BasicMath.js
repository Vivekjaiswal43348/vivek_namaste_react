
/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns sum of two number
 */
export const sum = (a, b) =>{
    return a + b;
}
/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns subtraction of two numbers
 */
export const subtract =(a, b) => {
    return a > b ? a-b : b-a;
}
/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns multiplication of two numbers
 */
export const multiply = (a,b) =>{
    return a*b;
}
/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns division of two numbers, if b is zero then it will return an error message
 */
export const divide = (a,b) =>{
    if(b === 0){
        return "Error: Division by zero is not allowed.";
    }  
    return a/b;
}