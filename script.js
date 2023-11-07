// variables
const btnel=document.querySelector("#btn");
const line1=document.querySelector(".thiru");
const meaning=document.querySelector(".mean");
const line2=document.querySelector(".thiru2");

    line1.classList.remove("fade");
    line2.classList.remove("fade");
    meaning.classList.remove("fade");
    
let count=0;
btnel.addEventListener("click",taskfn);



async function taskfn(){
    let counts=count++
     //console.log(counts);
    //line1.classList.remove("fade");
   // line2.classList.remove("fade");
   // meaning.classList.remove("fade");
    
    const data=await fetch(`https://api-thirukkural.vercel.app/api?num=${counts}`).then((res)=>
       res.json()

    ).then((msg)=>{
        let object=msg;
        //console.log(msg.line1,msg.line2)
        line1.innerHTML=((object.line1)),
        line2.innerHTML=((object.line2)),
        meaning.innerHTML=((object.tam_exp))
        line1.classList.add("fade")
        line2.classList.add("fade")
        meaning.classList.add("fade")
      
      }

    )
        
        
}