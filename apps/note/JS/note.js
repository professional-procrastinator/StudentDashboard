document.body.onload = fetchNotes();
recentDiv = document.getElementsByClassName("recentDIV")[0];
addDiv = document.getElementsByClassName("addNewNoteDIV")[0];


function fetchNotes(){
    
        var list = [],
        keys = Object.keys(localStorage),
        i = keys.length;

        
        
        for(x=0;x<i;x++){
            noteA = document.createElement("a");
            noteA.innerHTML = keys[x].replace("note","");
            noteA.href = "editnote.html?note="+keys[x].replace("note","");
            noteA.className = "notesA"
            
            document.getElementsByClassName("divTable")[0].appendChild(noteA);
            
        }
}

function createNote(){
    promptDIV = document.createElement("DIV");
    promptDIV.className = "promptdiv";

    promptDIVcon = document.createElement("DIV");
    promptDIVcon.className = "promptcon";

    h2Heading = document.createElement("H2");
    h2Heading.className = "smallheading";
    h2Heading.innerHTML = "Create a New Note";

    

    
    nameInput = document.createElement("INPUT");
    nameInput.className = "tinyInput1";
    nameInput.placeholder = "Name";
    

    descInput = document.createElement("textarea");
    descInput.className = "descInput";
    descInput.placeholder = "Description (Optional)"

    createBtn = document.createElement("button");
    createBtn.className = "createBtn";
    createBtn.innerHTML = "Go";

    createBtn.onclick = function proceed(){
        if(nameInput.value == ""){
            nameInput.focus();
            nameInput.style.borderBottom = "1px solid red";

            setTimeout(() => {
                nameInput.style.border = "none";
                nameInput.style.borderBottom = "2px solid green";
            }, (2000));
        }else{
            localStorage.setItem("note"+nameInput.value,"");
            location.href = "editNote.html?note="+encodeURIComponent(nameInput.value);
        }
    }

    closeBtn = document.createElement("button");
    closeBtn.className = "closeBtn";
    
    closeBtn.onclick = function closeDiv(){
        promptDIV.remove();
    }

    closeIco = document.createElement("I");
    closeIco.className = "fa fa-times";
    
    closeBtn.appendChild(closeIco);

   
    promptDIVcon.appendChild(h2Heading);
    promptDIVcon.appendChild(closeBtn);
    promptDIVcon.appendChild(nameInput);
    promptDIVcon.appendChild(descInput);
    promptDIVcon.appendChild(createBtn);
    promptDIV.appendChild(promptDIVcon);
    
    
    addDiv.appendChild(promptDIV);
}