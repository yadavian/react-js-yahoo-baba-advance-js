import React from 'react'

const RestOperator = () => {
    {/* 
        REST SPREAD - OBJ LITERALS -  ARRAY OBJ DESTRUCTURING

        REST OPERATOR :
        PROBLEM 1 : SAMJHO MAINE EK FUNCTION BANAYA JO 2 NO'S KA ADDITION KARTA H, LEKIN AGAR MUJHE 3 NO'S, 4 NO'S YA USSE BHI JYADA KA KARNA HOGA TAB KYA KARENGE ? 

        PROBLEM 2 : ISS PROBLEM KO SOLVE KARNE KE LIYE ARGUSEMENTS KARKE EK FUNCTION AATA H JO HAR VALUES KO EK SINGLE ARRAY ME BADAL DETA H TO, SUM KARNA TOH WO HOJAAYEGA, BUT KISINE STRING BHEJ DIYA TOH CONCAT HO JAAYEGA.

        PROBLEM 3 : MAIN PROBLEM H KI OOSE ARGUEMENTS ME SE NUMBERS KO ALAG KARNA.
    */}

    console.log("-----REST-----");
    function sum_rest(name, ...numbers) {
        console.log(`arguments  =>`, arguments)
        console.log(`name  =>`, name)
        console.log(`numbers  =>`, numbers)
    }
    sum_rest("name", 20, 30)

    {/* 
        SPREAD OPERATOR :
        PROBLEM  : NORMALLY JAB HUM "name",10,20 bhejte h fun(name, ...numbers) ko toh ...numbers ye soch raha hota hai ki usko multiple values aayenge but ussi jagah agar hum array bhej denge jo ki single value h, toh apna rest operator osse array ko ek aur array me daal deta h. isliye array ko multiple values me change karke bhejna hoga ho ...spread operator se hota h.
    */}

    console.log("-----SPREAD-----");
    function sum_spread(name, ...numbers) {
        console.log(`arguments  =>`, arguments)
        console.log(`name  =>`, name)
        console.log(`numbers  =>`, numbers)
    }
    sum_spread("name", ...[20, 30])

    {/*
        OBJECT LITERALS : 
        1. OBJECT KE KEY VALUE KA SAME NAME H TOH UNKO EK HI BAAR LIKH SAKTE H
        2. VARIABLE KO AS KEY USE KARNA HO TOH [VAR_NAME]: "VALUE"
        3. OBJ KE ANDAR KE FUNCTION ME AB FUNCTION KEYWORD MANDATORY NAHI H.
    */}

    let name = "Yahoo"
    let obj = {
        name: name
    }
    let obj_var_key_same_name = { name }

    let obj_var_as_key = { [name]: "YAho" }

    let obj_removed_fun_in_obj_value_before = {
        show: function () {
            console.log("first")
        }
    }

    let obj_removed_fun_in_obj_value = {
        show() {
            console.log("show will be key, value will be bofy==dy of function")
        }
    }


    {/*
        AARAY DISTRUCTURING :  
    */}

    let user = ["yahoo", 25, ['m', 5000]];
    let title = user[0];
    let age = user[1];

    let [title1 = "defaukt", age1, [gender, salary]] = user;

    let user2 = ['hai', 52, 'delhi'];
    let [tile2, ...args] = user2;


    {/*
        OBJECT DISTRUCTURING :  
    */}

    let userObj = {
        name3: "ankit",
        age3: 25
    }
    let { name3, age3: age6 } = userObj;
    console.log(`name3  =>`, name3)
    console.log(`age3  =>`, age6)


    return (
        <>
            <h1 className='mt-5'>1. REST</h1>
            <h1>2. SPREAD</h1>
            <h1>3. OBJECT LITERALS</h1>
            <h1>4. ARRAY DESTRURING</h1>
            <h1>5. OBJECT DESTRURING</h1></>
    )
}

export default RestOperator