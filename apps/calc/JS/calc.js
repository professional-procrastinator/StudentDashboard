oper = '';

function exec(type){
    switch(type){
        case "clear":
            document.getElementById("main_input").value = "";
            document.getElementById("label").innerHTML = "";
    
        
    }
}

n1 = 0.0;
n2 = 0.0;
function inputFunc(event,prevVal){
    var key = event.keyCode;

    
    if(key == 187 ){
       
        oper = 'add';
        document.getElementById("label").innerHTML = prevVal;
        document.getElementById("main_input").value = "";
        n1 = parseFloat(prevVal);
        
    }

   
    
    if((key == 13) && (oper=='add')){
        n2 = parseFloat(document.getElementById("main_input").value);
        
        document.getElementById("main_input").value = n1+n2;
        document.getElementById("label").innerHTML = "";
    }

    if(key == 189){
        oper = 'sub';
        document.getElementById("label").innerHTML = prevVal;
        document.getElementById("main_input").value = "";
        n1 = parseFloat(prevVal);
        
    }

    if((key==189 && event.shiftkey == false) && (oper=='sub')){
        n2 = parseFloat(document.getElementById("main_input").value);
        
        document.getElementById("main_input").value = n1+n2;
        document.getElementById("label").innerHTML = "";
    }
    
    else if((key == 13) && (oper=='sub')){
        n2 = parseFloat(document.getElementById("main_input").value);
        
        document.getElementById("main_input").value = n1+n2;
        document.getElementById("label").innerHTML = "";
    }
}
