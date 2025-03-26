function visibleSideBar(){
    
    var x = document.getElementById("view-details")
    if (x.style.display === "none"){
        x.style.display = "block";
        console.log(x);

    } else{
        x.style.display = "block";
    }
        
}

function invisibleSideBar(){
    
    var x = document.getElementById("view-details")
    if (x.style.display === "block"){
        x.style.display = "none";
        console.log(x);

    } else{
        x.style.display = "none";
    }
        
}

function showDetails(id){
    var x = document.getElementsByClassName("c-items")
    console.log(x);

    if (x.length > 0) { // Ensure there are elements with the given class
        for (var i = 0; i < x.length; i++) {
           x[i].style.display = "none"
           console.log(x[i])
        }
    }

    var y = document.getElementById(id)
    if (y.style.display === "none"){
        y.style.display = "block";

    } else{
        y.style.display = "block";
    }
        
} 