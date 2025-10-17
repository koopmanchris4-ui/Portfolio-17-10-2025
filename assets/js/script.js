

//eerst rootpath bepalen voor diepere (projecten paginas)
let rootPath = ""; // pad is niet (gewone root paginas)
if (window.location.pathname.includes("/koppelingen/")) { // als er beginscherm inzit
    rootPath = "../../../"; // ga naar de root
}


//druk op ander thema




function anderThema() {
    const body = document.body;

    const knop = document.getElementById("anderthema");
    const isDark = body.dataset.theme === "dark"




    // body dark

    if (!isDark) {
        // Zet donkere modus
        body.dataset.theme = "dark";
        body.style.backgroundImage = `url('${rootPath}assets/Afbeeldingen/nachtachtergrond.jpg')`; // root en link naar plaatje vanaf daar
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center";
        body.style.minHeight = "100vh";
        body.style.backgroundColor = "black"





        const plaatjeChris = document.getElementById("plaatjechris");
        if (plaatjeChris) {
            plaatjeChris.src = "assets/Afbeeldingen/plaatjechris-donker.png";
        }

        // navbar dark


        const navbar = document.querySelector(".navbar");
        if (navbar) {
            navbar.style.boxShadow = "10px 20px 50px rgb(0, 0, 0)";
            navbar.style.background = "rgb(46, 56, 103)";
        }

        // ----------------------------------------------------------------------------------------------------------
        // pagina - over

        //grijsvlak dark

        const grijsvlak = document.getElementById("grijsvlak");
        if (grijsvlak) {
            grijsvlak.style.backgroundColor = "rgb(43, 54, 80)";
            grijsvlak.style.boxShadow = "10px 20px 50px rgb(0, 0, 0)";
            const h1 = grijsvlak.querySelector("h1");
            if (h1) h1.style.color = "white";
        }

        //grijsvlak2 dark


        const grijsvlak2 = document.getElementById("grijsvlak2");
        if (grijsvlak2) {
            grijsvlak2.style.backgroundColor = "rgb(43, 54, 80)";
            grijsvlak2.style.color = "white";
            const h1 = grijsvlak2.querySelector("h1");
            if (h1) h1.style.color = "white";
        }


        // ----------------------------------------------------------------------------------------------
        // pagina - projecten

        // text zwart op cards bij dark


        const cards = document.getElementsByClassName("cards");
        for (let card of cards) { //pakt alle cards en noemt ze card
            card.style.color = "black";
            card.style.boxShadow = "20px 20px 20px rgba(82, 82, 82, 1)";
            card.style.backgroundColor = "lightgrey";
            card.style.border = "none"

        }


        // grijsvlak projecten dark

        const grijsvlakProjecten = document.getElementById("grijsvlak-projecten");
        if (grijsvlakProjecten) {
            grijsvlakProjecten.style.backgroundColor = "grey"
        }

        // ---------------------------------------------------------------------------------------------------
        //pagina - contact

        //contact vlak donker en tkest wit maken

        const contactVlak = document.getElementById("contact-vlak");
        if (contactVlak) {
            contactVlak.style.backgroundColor = "rgb(40, 52, 78)";
            contactVlak.style.boxShadow = "10px 20px 30px rgba(33, 33, 33, 1)";


            // alle tekst wit maken
            const texts = contactVlak.querySelectorAll("p, b, i, h1, h2, h3, span"); // alle text in contact-vlak
            texts.forEach(el => el.style.color = "white");


            // plaatje media donker
        }
        const plaatjemedia = document.getElementsByClassName("plaatje-media");
        for (let plaatjemedias of plaatjemedia) { // pakt alle plaatjes en noemt ze plaatjemedias
            plaatjemedias.style.boxShadow = "10px 20px 30px rgba(33, 33, 33, 1)";
        }

        // input donker

        const input = document.getElementsByClassName("input");
        for (let inputs of input) {
            inputs.style.backgroundColor = "rgb(40, 52, 78)"
            inputs.style.color = "white"

        }

        // ---------------------------------------------------------------------------------------------------------------------------
        //projecten paginas

        // text vlak donker

        const textVlak = document.getElementById("text-vlak")
        if (textVlak) {
            textVlak.style.backgroundColor = "lightgrey"
            textVlak.style.boxShadow = "10px 20px 50px rgba(0, 0, 0, 1)";
        }

        //plaatje donker (boxshadow)


        const plaatje = document.querySelector(".plaatje")
        if (plaatje) {
            plaatje.style.boxShadow = "rgba(46, 67, 90, 0.3) 15px 15px 10px 3px";
        }





        // knop icoontje + localstorage aanpassen als gedrukt op knop

        if (knop) knop.innerHTML = "<b>🌙</b>";
        localStorage.setItem("theme", "dark");



        // anders (lichte modus)


    } else {


        // body terug naar normaal

        body.dataset.theme = "light";
        body.style.backgroundImage = "";
        body.style.color = "black";
        body.style.backgroundColor = "white"





        //plaatje chris terug naar normaal

        const plaatjeChris = document.getElementById("plaatjechris");
        if (plaatjeChris) {
            plaatjeChris.src = "assets/Afbeeldingen/plaatjechris.png";
        }


        // navbar terug naar normaal

        const navbar = document.querySelector(".navbar");
        if (navbar) {
            navbar.style.boxShadow = "";
            navbar.style.background = "";
        }

        // grijsvlak terug naar normaal

        const grijsvlak = document.getElementById("grijsvlak");
        if (grijsvlak) {
            grijsvlak.style.backgroundColor = "";
            grijsvlak.style.boxShadow = "";
            const h1 = grijsvlak.querySelector("h1");
            if (h1) h1.style.color = "";
        }

        // grijsvlak 2 terug naar normaal

        const grijsvlak2 = document.getElementById("grijsvlak2");
        if (grijsvlak2) {
            grijsvlak2.style.backgroundColor = "";
            grijsvlak2.style.color = "";
            const h1 = grijsvlak2.querySelector("h1");
            if (h1) h1.style.color = "";
        }

        //grijsvlak projecten terug naar normaal

        const grijsvlakProjecten = document.getElementById("grijsvlak-projecten");
        if (grijsvlakProjecten) {
            grijsvlakProjecten.style.backgroundColor = ""
        }

        //cards terug naar normaal boxshadow

        const cards = document.getElementsByClassName("cards");
        for (let card of cards) { //pakt alle cards en noemt ze card
            card.style.boxShadow = "";
            card.style.backgroundColor = "";

        }

        // contact vlak + text terug naar normaal

        const contactVlak = document.getElementById("contact-vlak");
        if (contactVlak) {
            contactVlak.style.backgroundColor = ""
            contactVlak.style.boxShadow = "";
            const texts = contactVlak.querySelectorAll("p, b, i, h1, h2, h3, span"); // alle text in contact-vlak
            texts.forEach(el => el.style.color = "black"); // terug naar zwart
        }

        // plaatje media terug naar normaal

        const plaatjemedia = document.getElementsByClassName("plaatje-media");
        for (let plaatjemedias of plaatjemedia) { // pakt alle plaatjes en noemt ze plaatjemedias
            plaatjemedias.style.boxShadow = "";
        }


        // input terug naar normaal

        const input = document.getElementsByClassName("input");
        for (let inputs of input) {
            inputs.style.backgroundColor = ""
            inputs.style.color = ""

        }


        // text vlak terug naar normaal

        const textVlak = document.getElementById("text-vlak")
        if (textVlak) {
            textVlak.style.backgroundColor = ""
            textVlak.style.boxShadow = "none";
        }

        //plaatje donker (boxshadow)


        const plaatje = document.querySelector(".plaatje")
        if (plaatje) {
            plaatje.style.boxShadow = "none";
        }


        if (knop) knop.innerHTML = "<b>☀️</b>";
        localStorage.setItem("theme", "light");
    }
}


//lcht/donker onthouden bij alle tabs

window.onload = function () {
    const theme = localStorage.getItem("theme") || "light"; // thema is dark of light
    const knop = document.getElementById("anderthema"); // knop 
    
    if (theme === "dark") { // als thema dark is
        anderThema(); // activeer dark mode
    } else {
        if (knop) knop.innerHTML = "<b>☀️</b>"; // zonnetje - nu dagmode
    }
}
