import React from 'react'

const Promises = () => {
    {/*
    1. KAL DOST KO MILNE JANA H, YE MAINE DOST KO PROMISE KIYA.
    2. YE PROMISE KO HUM 3 STAGE H, PENDING, FULFILLED, REJECTED
    3. KAL JAB TAK HUM NHI MILENEGE WO PEOMISE PENDING ME RAHEGA.
    4.MIL GAYE TO FUILFILLED.
    5. AGAR NAHI JAA PAAYA TO FAILED.
    6. SAMJHO AGAR MILNA H TOH KUCH DINNER KA BHI PLAN HOGA MATLAB, PROMISE FULFILLED HONE PE KYA KARNA H YE FULFILLED HONE PE DECIDE HOGA
    7.  AGAR NAHI GYA TOH KISI AUR DIN MIL LENGE YE REJECTED PE DECIDE HIGA
     
                        REJECT   ==> CATCH()
    PROMISES  
                        RESOLVE  ==> THEN()

    PROM EK OBJ BANTA H, JISME EK FUNCTION PASS KARTE H, AGAR CONDTION SATISFY HUA TOH RESOLVE KARKE EK FUNCTION HOTA H WO CALL HOGA JO EK THEN KO CALL KAREGA ELSE REJECT NAAME KE FUNCTION KO CALL KARTE H.

    CONDITION TRUE => RESOLVE("SUCCESS") => THEN => ON_FULLFILMENT(DATA)
    CONDITION FALSE => REJECT("FAILURE") => CATCH => ON_REJECTION(ERR_MSG)
    */}

    let complete = true;
    let prom = new Promise((resolve, reject) => {
        if (complete) {
            resolve("Success")
        } else {
            reject("Failed")
        }
    })

    let onFulfillment = (result) => {
        console.log(`result  =>`, result)
    }

    let onFailed = (err) => {
        console.log(`err  =>`, err)
    }

    prom.then(onFulfillment)
    prom.catch(onFailed)

    {/**
        EK HI TYPE KE BAHOT SAARE PROMISE H TOH PROMISE.ALL(), LEKIN AGAR EK BHI PROMISE REJECT HUYE TOH SAB REJECT HO JAAYNGE.
    */}

    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("First Promise.")
            resolve(1)
        }, 1000);
    })

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("second Promise.")
            reject("failed")
        }, 2000);
    })

    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Third Promise.")
            resolve(3)
        }, 3000);
    })

    Promise.all([p1, p2, p3]).then((result) => {
        console.log(result);
    }).catch(error => {
        console.log(error)
    })


    return (
        <h1>Promises</h1>
    )
}

export default Promises