export const ProblemDefinition = () => {
    return (
        <>
            <h1>Problem</h1>

            <p>You are given an unordered array consisting of positive integers where the array’s size doesn’t have any limitations. Create an algorithm which finds the <b>index</b> number at which the left and right side of the array gives the same result.</p>

            <h2 id="example-a">Example A:</h2>
            <ul>
                <li>[ 1, 2, 6, 3 ], the answer is "2" because "1+2=3" equals the last number "3" and the partition number is "6".</li>
            </ul>

            <h2 id="example-b">Example B:</h2>
            <ul>
                <li>[2, 1, 2, 1, 3, 2] , the answer is "3" because "2+1+2=5" equals the last side sum "3+2=5" so the partition number is "1".</li>
            </ul>

            <h2 id="example-c">Example C:</h2>
            <ul>
                <li>[ 2, 2, 2, 2, 2, 2, 2, 6, 10, 3, 1, 5, 2, 5, 3, 1, 3, 14], the answer is "10" so the partition number is "1"</li>
            </ul>
        </>
    )
}