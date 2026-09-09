function showOptions() {
    document.querySelector(".home").style.display = "none";
    document.querySelector(".options").style.display = "block";
}

function showLetter() {
    document.querySelector(".options").style.display = "none";
    document.querySelector(".letter").style.display = "block";
}

function showMemories() {
    document.querySelector(".options").style.display = "none";
    document.querySelector(".memories").style.display = "block";
}

function showReasons() {
    document.querySelector(".options").style.display = "none";
    document.querySelector(".reasons").style.display = "block";
}

function backToOptions() {
    document.querySelector(".letter").style.display = "none";
    document.querySelector(".memories").style.display = "none";
    document.querySelector(".reasons").style.display = "none";

    document.querySelector(".options").style.display = "block";
}