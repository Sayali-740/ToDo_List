let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = input.value;
    
    let delBtn= document.createElement("button");
    delBtn.innerText = "Delete";
    // delBtn.classList.add=("Delete");
    delBtn.classList.add("Delete");

    ul.appendChild(item);
    item.appendChild(delBtn);
    input.value="";
});

// deleting

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
   
});




// delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//        let par= this.parentElement;
//        console.log(par);
//        par.remove();
//     });
// }
