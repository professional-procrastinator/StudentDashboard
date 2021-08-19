oper = '';

function exec(type){
    
        if(type=='1'){
            document.getElementById("main_input").value = document.getElementById("main_input").value+ "1";
            document.getElementById("main_input").focus();
        }
        else if(type=='2'){
            document.getElementById("main_input").value = document.getElementById("main_input").value+ "2";
            document.getElementById("main_input").focus();
        }
        else if(type=='3'){
            document.getElementById("main_input").value = document.getElementById("main_input").value+ "3";
            document.getElementById("main_input").focus();
        }
        else if(type=='4'){
            document.getElementById("main_input").value = document.getElementById("main_input").value+ "4";
            document.getElementById("main_input").focus();
        }
        else if(type=='5'){
            document.getElementById("main_input").value = document.getElementById("main_input").value+ "5";
            document.getElementById("main_input").focus();
        }
        else if(type=='6'){
            document.getElementById("main_input").value = document.getElementById("main_input").value+ "6";
            document.getElementById("main_input").focus();
        }
        else if(type=='7'){
            document.getElementById("main_input").value = document.getElementById("main_input").value+ "7";
            document.getElementById("main_input").focus();
        }
        else if(type=='8'){
            document.getElementById("main_input").value = document.getElementById("main_input").value+ "8";
            document.getElementById("main_input").focus();
        }
        else if(type=='9'){
            document.getElementById("main_input").value = document.getElementById("main_input").value+ "9";
            document.getElementById("main_input").focus();
        }

        else if(type=="clear"){

        
           
            document.getElementById("main_input").value = "";
            
            document.getElementById("label").innerHTML = "";
            document.getElementById("main_input").focus();
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
