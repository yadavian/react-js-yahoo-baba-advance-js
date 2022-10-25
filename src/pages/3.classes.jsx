import React from 'react'

const Classes = () => {

    class student {
        constructor() {
            console.log("student constructor");
        }
        hello() {
            console.log("hello")
        }
    }

    class manager extends student {
        constructor() {
            super()
            console.log("manager constructor");
        }
        info() {
            console.log("info")
        }
    }

    let a = new manager()
    a.hello()
    a.info()

    return (
        <h1>Classes</h1>
    )
}

export default Classes