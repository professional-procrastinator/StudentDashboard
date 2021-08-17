function exec(type){
    switch(type){
        case "clear":
            document.getElementById("main_input").value = "";
    
        case "remLast":
            document.getElementById("main_input").value = document.getElementById("main_input").value.slice(0, -1);
        
    }
}

function inputFunc(event,prevVal){
    var key = event.keyCode;


    if(key == 187){
       
        document.getElementById("label").innerHTML = prevVal+"+";
        exec("clear");
        if(key == 13){
            alert("uo")
        }
    }

    
    
}