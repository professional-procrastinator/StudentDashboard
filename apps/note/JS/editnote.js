

document.body.onload = loadNote();




function loadNote(){
    const nameStr = window.location.search;

    namePar = new URLSearchParams(nameStr);

    const note_name = namePar.get('note');

    console.log(localStorage.getItem(note_name));

    document.getElementById("nameh2").innerHTML += " "+note_name;
    
    if(localStorage.setItem(note_name,document.getElementsByClassName("txtArea")[0].value) == null){
       document.getElementsByClassName("txtArea")[0].value = "";
    }else{
        document.getElementsByClassName("txtArea")[0].value = localStorage.setItem(note_name,document.getElementsByClassName("txtArea")[0].value);
    }


    setInterval(function(){
    localStorage.setItem(note_name,document.getElementsByClassName("txtArea")[0].value);
    
    }, 2000);
}






function find(){
    
}