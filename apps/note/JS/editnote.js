
document.body.onload = loadNote();




function loadNote(){
    const nameStr = window.location.search;

    namePar = new URLSearchParams(nameStr);

    const note_name = namePar.get('note');

    if(note_name == null || note_name == ""){
        location.href ="../../apps/note/note.html"
    }

    document.getElementById("nameh2").innerHTML += " "+note_name;
    
    if(localStorage.getItem("note"+note_name) == null || localStorage.getItem("note"+note_name) == undefined){
        location.href ="../../apps/note/note.html";
    }
    else {
        
        document.getElementsByClassName("txtDiv")[0].innerHTML = localStorage.getItem("note"+note_name);
    }


    setInterval(function(){
       localStorage.setItem("note"+note_name,document.getElementsByClassName("txtDiv")[0].innerHTML);
        
    }, 2000);
}






function find(){
    
}