pgGenerated = 0;

document.body.onload = loadNote();




function loadNote(){
    const nameStr = window.location.search;

    namePar = new URLSearchParams(nameStr);

    const note_name = namePar.get('note');

    if(note_name == null || note_name == ""){
        location.href ="../../apps/note/note.html"
    }

    document.getElementById("nameh2").innerHTML += " "+note_name;
    
    if(localStorage.getItem(note_name) == null || localStorage.getItem(note_name) == undefined || localStorage.getItem(note_name) == ""){
      console.log('ye')
        document.getElementsByClassName("txtArea")[0].value = "";
    }
    else {
        
        document.getElementsByClassName("txtArea")[0].value = localStorage.getItem(note_name);
    }


    setInterval(function(){
    localStorage.setItem(note_name,document.getElementsByClassName("txtArea")[0].value);
    
    }, 2000);
}



function checkForLine(textarea) {
    
    var textLines = textarea.value.substr(0, textarea.selectionStart).split("\n");
    var currentLineNumber = textLines.length;
    
    console.log(currentLineNumber);

    
    if(currentLineNumber == 40){
        if(pgGenerated == 1 && textarea==document.getElementsByClassName('txtArea')[0]){
            return;
        }
        createNewPage();
    }
}

function createNewPage(){
    newTextArea = document.createElement("textarea");
    newTextArea.className = "txtAreaNew";
    newTextArea.onkeyup = "checkForLine(this)"
    newTextArea.cols=100;
    newTextArea.rows=45;


    document.getElementsByClassName('mainTextArea')[0].appendChild(newTextArea);
    pgGenerated++;

}


function find(){
    
}