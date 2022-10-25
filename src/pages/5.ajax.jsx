import React from 'react'

const Ajax = () => {
    {/**
        JAB BHI HUM CLIENT SE REQUEST KARTEH TAB SERVER RESPONSE SEND KARTA H JO TEXT, XML, JSON HO SAKTA H, AUR PAGE REFRESH HO JAATA H.
        AJAX ME JAB HUM REQUEST BHEJTE H TOH JS KA EK CLASS XMLHTTPREQUEST OOSE BACKGROUNF ME BHEJTA H AUR RESPONSE WITHOUT REFRESH DIKHTA H.
        JAB HUM XmlHttpRequest use karteh toh oosme 5 step hote h : readyState
        readyState 0 : req not initialized
        readyState 1 : server connection banate h local system ke sath, req send karte h
        readyState 2 : matlab request receeved hua
        readyState 3 : request ko process karta h
        readyState 4 : request finished aur response is ready.

        3rd boolean matlab async ya sync
    */}

    function loadData() {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(`this.responseText  =>`, this.responseText)
            }
        };
        xhttp.open("GET", "readme.txt",true);
        xhttp.send();
    }

    loadData()

    return (
        <h1 className='mt-5'>Ajax</h1>
    )
}

export default Ajax