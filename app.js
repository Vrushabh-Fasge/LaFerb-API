//init buttons
var inputText=document.querySelector("#input-text");

var outputText=document.querySelector("#container-output");

var btnTranslate=document.querySelector("#btn-translate");

//server url

var serverURL="https://api.funtranslations.com/translate/ferb-latin.json";

//fetch url

function getTranslationURL(text){
    return serverURL+ "?" + "text=" +text;
}

function errorHandler(error){
    console.log("error occured",error)
    alert("Something went wrong. Please try again in some time.")
}

function clickHandler(){

    var input=inputText.value;

    fetch(getTranslationURL(input))
    .then(response =>response.json())
    .then(json=>{
        outputText.innerText=json.contents.translated;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click",clickHandler);
