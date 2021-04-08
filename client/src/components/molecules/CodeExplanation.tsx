import FullCodeImg from '../../assets/full-code.png';
import Explanation1Img from '../../assets/explanation-1.png';
import Explanation2Img from '../../assets/explanation-2.png';
import Explanation3Img from '../../assets/explanation-3.png';
import Explanation4Img from '../../assets/explanation-4.png';


export const CodeExplanation = () => {
    return (
        <>
            {/* Solution full code */}
            <h1 id="solution-typescript">Solution (Typescript)</h1>
            <img src={FullCodeImg} alt='full code' id='code'></img>

            {/* Explanation */}
            <h2 id="explanation">Explanation</h2>

            {/* Explanation #1 */}
            <p>First of all we need to declare our variables.</p>

            <p>In the code excecution we need to check the sum of elements from left and right to later compare them and try to get the partition index.</p>

            <p>For the left sum the order of the elements dont really care so thats why I reverse array of elements to later start making the sum from right</p>

            <ul>
                <li>The original code implements a lot of validations like check if the given array is not empty or every element is a positive number.</li>
            </ul>

            <img src={Explanation1Img} alt='explanation-1' id='code'></img>

            {/* Explanation #2 */}
            <p>Get the total sum of each element in the array<br />I parse each element to number by adding a "+" before the variable #JsThings</p>

            <ul>
                <li>The original code implements a validation checking if each element is a positive number.</li>
                <li>After of this process the final result is validated to check if the result is a number because it could be a NaN if one of the elements.</li>
                <li>Instead of checking by each cycle I verify at the end if is a NaN, in my opinion this is more performance friendly but it could change.</li>
            </ul>

            <img src={Explanation2Img} alt='explanation-2' id='code'></img>

            {/* Explanation #3 */}
            <p>Time to check, in each cycle i verify with my total result (leftSum) vs the current right sum, so in each iteration if the leftSum and the rightSum does not match I increase the right sum value  (Remember the array is reversed) so a new add if from the right to left in the original array.</p>
            <p>In case of the leftSum and the rightSum does not match the leftSum value the current checking right value must be reduced from the leftSum</p>

            <img src={Explanation3Img} alt='explanation-3' id='code'></img>

            {/* Explanation #4 */}
            <p>This exercise depends on the input, so not all array's received can be succesfully resolved</p>

            <img src={Explanation4Img} alt='explanation-4' id='code'></img>
        </>
    )
}