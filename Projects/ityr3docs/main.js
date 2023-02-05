function alerts(){
    alert("click to continue");
}

function deletes(){
    var a = confirm("confirm input");
    if(a == true){
        alert("continuing with page");
    }
    else{
        alert("stopped input");
    }
}

function prompts(){
    var name = prompt("enter your name");
    
    if(name != null && name != ""){
        document.write("hello " + name + " welcome to the site")
    }
    else{
        document.write("no name provided")
    }
    // alert("welcome to the site " + name )
}