/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
let app = (function () {
    "use strict"


    // About Button Click event handler

    function AboutButtonClick() {
        console.log("About Button Clicked!");
    }

    function AboutButtonOver(event) {
        event.currentTarget.style.opacity = 0.3;
    }

    function AboutButtonOut(event) {
        event.currentTarget.style.opacity = 1.0;
    }

    function HomeContent() {
        let AboutButton = document.getElementById("AboutButton");

        AboutButton.textContent = "About";

        // About Button event listener
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AboutButtonOut);
    }

    function ReturnPI() {
        return Math.PI;
    }

    function AboutContent() {
        let myNumber = ReturnPI();
        console.log("My Funky Number: " + myNumber);

        let paragraph = document.getElementById("paragraph");

        let mySentence = "'Say 'gosh' or nothing instead of 'g**', and 'heck' or nothing instead of 'h***', and just don't say mild verson of the S-word 'c***' so that your tv show is accepted by more channels";

        paragraph.textContent = mySentence;

        let myArray = [
            { name: "tom", age: 25 },
            { name: "tod", age: 6 },
            { name: "top", age: 275 },

        ];

        myArray.push({ name: "tofp", age: 15 });

        let content = document.getElementsByClassName("content");
        console.log(myArray);
        console.log("my arrray llngth" + myArray.length);
    }

    function Start() {
        // local variable
        let title = document.title;

        console.log("App Started!");
        console.log("----------------------------");
        console.log("Title: " + title);

        switch (title) {
            case "COMP125 - Home":
                HomeContent();
                break;

            case "COMP125 - About":
                AboutContent();
                break;

            default:
                break;
        }
    }


    //window.onload = Start;

    window.addEventListener("load", Start);

    return {
        title: document.title,
    };
})();