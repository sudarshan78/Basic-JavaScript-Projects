const button = document.querySelectorAll(".button");
const text = document.querySelector("#text")
const body = document.querySelector("body");

button.forEach((button)=>{
      button.addEventListener("click", (e) => {
         if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
            text.style.color = "red"
         }else if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id;
             text.style.color = "aqua"
        }else if(e.target.id === "green"){
            body.style.backgroundColor = e.target.id;
             text.style.color = "pink"
        }else if(e.target.id === "pink"){
            body.style.backgroundColor = e.target.id;
             text.style.color = "purple"
          }else if(e.target.id === "purple"){
            body.style.backgroundColor = e.target.id;
             text.style.color = "yellow"
          }
      })
});