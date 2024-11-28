
var products = [
  {
    question: "Q.1 Whta is html?",
    ans : ["Hyper text markup languague" , "Hyper text  languague" , "Hyper  languague"],
    correct  : 0,
  },
  {
    question: "Q.2 What css stands for ?",
    ans : ["Hyper text markup languague", "Casting style sheet" , "Cascading style sheet"],
    correct  : 2,
  },
  {
    question: "Q.3 What is javascript?",
    ans : ["Hyper languague" , "Computer languge" , "Programming language"],
    correct  : 2,
  },
  {
    question: "Q.4 Is Javascript case sensitive",
    ans : ["YES" , "NO" , "none of those" ],
    correct  : 0,
  },
  {
    question: "Q.5 How do you add a commit in javascript",
    ans : ["// comment" , " none of them " , "/* comment" ],
    correct  : 0,
  },
  {
    question: "Q.6 How do you add a commit in css",
    ans : ["// comment //" , "/* comment */" , "// comment" ],
    correct  : 1,
  },
 
];


var next = document.getElementById("next")
var con = document.getElementById("content")
var ul = document.getElementById("ul")
var opt = document.querySelectorAll(".li")

var ques = document.getElementById("ques")



var score = 0
var currques = 0
var selcans = false


function quizapp(){
 var ques = document.getElementById("ques")
 ques.innerHTML = products[currques].question;

for(var i = 0 ; i < opt.length ; i++){

  opt[i].innerHTML = products[currques].ans[i]
     opt[i].style.backgroundColor =  "white"
}
selcans = false

next.style.background = "white"
}




function lione(lionenumber){

  if(selcans)
    return;

  var crectans = products[currques].correct;
  var opt = document.querySelectorAll(".li");


  for(var i = 0 ; i < opt.length ; i++){
  if(i === crectans){

   opt[i].style.backgroundColor =  " #58ff6f"

  }

  else if(i === lionenumber){
    opt[i].style.backgroundColor =  "red"
  }

  else{
     opt[i].style.backgroundColor =  " #ffd1c4"
  }
  }

  if(lionenumber === crectans){
    score++
   
  }

 selcans = true
 next.style.background = " #58ff6f"
}


function nextf(){
  
 currques++  
 if(currques < products.length ){
   
     quizapp()
  }
  else{
resulttt()
  }
}

var res = document.getElementById("sco")
var img = document.getElementById("pic")
var para = document.getElementById("pic2")

function resulttt(){
  con.style.display = "none"
  if(score <= 3){
    para.innerHTML = "Need to improve"
  }

  else if(score >= 4){
 pic.style.display = "block"
 para.innerHTML = "Great job"
  }
 
    res.innerHTML = "score : " + score +  " / " + products.length
}

quizapp();