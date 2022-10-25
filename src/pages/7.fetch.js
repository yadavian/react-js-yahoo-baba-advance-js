import React from 'react'

const Fetch = () => {
    {/**
        ajax ka code lenghty h isliye fetch ko laaye
        fetch ek promise return karta h, fir then function call hota h
        but then function bhi ek promise return karta h 
    */}

    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
        // console.log(`res  =>`, res.text())
        return res.json();
    }).then((data) => {
        console.log(`data  =>`, data)
    })

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => console.log(`data  =>`, data))
        .catch(error => console.log(`error  =>`, error))

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

    return (
        <h1 className='mt-5'>Fetch</h1>
    )
}

export default Fetch