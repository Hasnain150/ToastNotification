const div = document.querySelector(".div");

const notificationsDiv = document.querySelector(".notifications");
const success = "Success : The Operation was Successfull";
const errorMsg = "Error : The Operation Failed";
const invalid = "Invalid : The Input was invalid";

function toast(mesg) {
  console.log("working");
  let p = document.createElement("p");
  let img = document.createElement("img");
 
  if (mesg.includes("Success")) {
    img.setAttribute("src", "imgs/success.png");
    
  } else if (mesg.includes("Error")) {
    img.setAttribute("src", "imgs/error.png");
    p.classList.add("error");

  } else if (mesg.includes("Invalid")) {
    img.setAttribute("src", "imgs/invalid.png");
    p.classList.add("invalid");

  }
  p.appendChild(img);
  p.innerHTML += mesg;


  notificationsDiv.appendChild(p);
  setTimeout(() => {
    p.remove();
  }, 5000);
}
