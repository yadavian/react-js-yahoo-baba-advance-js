import React from 'react'

const AsyncAwait = () => {
    {/**
    why async await => promise me resolve aur reject gunction declare karne hote the, jinki calling pe hi then and catch call hote the.

    async function ke andar await lagate hi js bahar ke code ko execute karne kadta h jab tak await wala chal nhi jata, await chalne ke baad hi function ke andar await ke aage ka execute hota h
    */}


    let test = async () => {
        return "Hello"
    }

    // async function test() {
    //     return "Hello"
    // }

    console.log(test())
    console.log(test().then(data => console.log(`data  =>`, data)))

    console.log("------------await------------")
    async function test2() {
        console.log("2 : Message");
        await console.log("3 : Message");
        console.log("4 : Message");
    }

    console.log("1 : Message");
    test2()
    console.log("5 : Message");

    return (
        <h1 className='mt-5'>AsyncAwait</h1>
    )
}

export default AsyncAwait