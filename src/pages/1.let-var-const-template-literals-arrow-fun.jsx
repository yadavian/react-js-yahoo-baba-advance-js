import React from 'react'

const LetVarConst = () => {

    {/* 
        LET - VAR - CONST
        TEMPLATE LITERALS
        ARROW FUNCTION

        RE-DECLARATION, RE-ASSIGNING, SCOPING
        VAR   =>   RE-DECLARE -Y, RE-ASSIGNING - Y, SCOPING - G.
        LET   =>   RE-DECLARE -N, RE-ASSIGNING - Y, SCOPING - L. 
        const =>   RE-DECLARE -N, RE-ASSIGNING - N, SCOPING - L.   
    */}

    var name = "ankit";
    var msg = `welcome ${name}`

    // arrow functions
    function hello() {
        console.log("hello");
    }
    hello()

    let hello1 = function () {
        console.log("hello-1");
    }
    hello1()

    let hello2 = () => {
        console.log("hello-arrow");
    }
    hello2()

    return (
        <>
            <h1 className='mt-5'>1. LET - VAR - CONST </h1>
            <h1>2. TEMPLATE LITERALS</h1>
            <h1>3.  ARROW FUNCTION</h1>

        </>
    )
}

export default LetVarConst