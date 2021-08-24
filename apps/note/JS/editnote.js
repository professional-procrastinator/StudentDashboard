

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






function find(){
    
}