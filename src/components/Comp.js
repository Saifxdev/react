 
function Comp1(){
    return (
        <div className="d1">
         <b style={
            {
              backgroundColor:'blue',
              borderRadius:'30px',
              borderColor:'white',
              color:'white',
              wordSpacing:'100px',
              borderWidth:'5px',
              borderStyle:'double'
            }
         }>    
         <b>Home</b>
         <b>Org</b>
         <b>About</b>
         <b>Login</b>
         <b>Contact</b>
         </b>
        </div>
    )
} 
function Comp2(){
return(
    <div className="d2">
   <form > 
    <label for="name">Name</label>  <br/>
    <input type="text"/> <br/>
    <label for="age">Age</label>  <br/>
    <input type="text"/> <br/>
    <label for="email">Email</label>  <br/>
    <input type="email"/> <br/>
    <label for="password">Password</label>  <br/>
    <input type="password"/> <br/>
    <button>Register</button>
    <button>Login</button>
   </form>
    </div>
)
}

function Comp3(){
    return(
        <div className="d3"> 

        <div className="d4">

        <img
      src="https://thumbs.gfycat.com/DopeyDemandingAnhinga-size_restricted.gif"
      alt="Katherine Johnson"
    />
            </div>


            <div className="d4">
        <img
      src="https://i.pinimg.com/originals/00/ec/ff/00ecffdc7134e3fa132ebe3505d73ae4.gif"
      alt="hrirtik"
    />
        </div>
   
   
        <div className="d4">
        <img
      src="https://i.gifer.com/Gl9y.gif"
      alt="hrirtik"
    />
        </div> 
        </div>
    )
}

function Comp4(){
    return(
        <div className="d3"> 
 
 <div className="d4">

<img
src=" https://thumbs.gfycat.com/WhimsicalGreenBeardedcollie-max-1mb.gif"
alt="Katherine Johnson"
/>
    </div>


    <div className="d4">
<img
src=" https://media2.giphy.com/media/aIU9nrI16xVIfbDLGL/200w.gif?cid=6c09b952gfg3tm6n2k3e1yiuvlmht3b5ar48n382d07h15xf&ep=v1_gifs_search&rid=200w.gif&ct=g"
alt="hrirtik"
/>
</div>


<div className="d4">
<img
src=" https://media.tenor.com/CZPernqitI4AAAAM/jus-reign-driving.gif"
alt="hrirtik"
/>
</div> 
    
        </div>
    )
}

function Comp5(){
    return(
        <div>
            <h2 >My car </h2>
            <section>
                <p>The Ford Mustang is a series of American automobiles manufactured by Ford. In continuous production since 1964, the Mustang is currently the longest-produced Ford car nameplate. Currently in its sixth generation, it is the fifth-best selling Ford car nameplate. The namesake of the "pony car" automobile segment, the Mustang was developed as a highly styled line of sporty coupes and convertibles derived from existing model lines, initially distinguished by "long hood, short deck" proportions.[3]</p>
            </section>
            <section>
            Originally predicted to sell 100,000 vehicles yearly, the 1965 Mustang became the most successful vehicle launch since the 1927 Model A.[4] Introduced on April 17, 1964[5] (16 days after the Plymouth Barracuda), over 400,000 units were sold in its first year; the one-millionth Mustang was sold within two years of its launch.[6] In August 2018, Ford produced the 10-millionth Mustang; matching the first 1965 Mustang, the vehicle was a 2019 Wimbledon White convertible with a V8 engine.[7]
            </section>
        </div>
    )
}

// we can write javascritp using curley braces{}
function Comp6(){
  const img="https://img.freepik.com/free-photo/3d-rendering-emotions_23-2149081943.jpg"; 
  const des="this is my car:";

    return(
         <img 
         className="car123"
          src={img}
          alt={des}
         />
    )
}

function Comp7(){
 
     function add(){
        var n1;
        var n2; 
        var sum;
        n1=parseInt(document.getElementById("num1").value);
        n2=parseInt(document.getElementById("num2").value);
        sum=n1+n2;
        document.getElementById("result").value=sum;
     }

     function sub(){
        var n1;
        var n2;
        var su;
        n1=parseInt(document.getElementById("num3").value);
        n2=parseInt(document.getElementById("num4").value);
        if(n2>n1){
            su=n2-n1;
        }
        else{
            su=n1-n2;
        }
        document.getElementById("result1").value=su;
     }
       
     function mol(){
        var n1;
        var n2;
        var ml;
        n1=parseInt(document.getElementById("num5").value);
        n2=parseInt(document.getElementById("num6").value);
        ml=n1*n2;
        document.getElementById("res2").value=ml;
     }

     function div(){
     var n1;
     var n2;
     var di;
     n1=parseInt(document.getElementById("num7").value);
     n2=parseInt(document.getElementById("num8").value);
     di=n1/n2;
     document.getElementById("res3").value=di;

     }
    return (
          <div className="d12">

          <div className="d21">   
           <b>First_Number<input type="text" id="num1"/></b> 
           <b>Second_Number<input type="text" id="num2"/></b> 
           <button onClick={add}>Add</button>
           <b><input type="text" id="result"/></b>
          </div>

          <div className="d21">   
           <b>First_Number<input type="text" id="num3"/></b> 
           <b>Second_Number<input type="text" id="num4"/></b> 
           <button onClick={sub}>Sub</button>
           <b><input type="text" id="result1"/></b>
          </div>
           
          <div className="d21">
            <b>First_Number<input type="text" id="num5"/></b>
            <b>Second_Number<input type="text" id="num6"/></b>
            <button onClick={mol}>Mul</button>
            <b><input type="text" id="res2"/></b>
          </div>

          <div className="d21">
            <b>First_Number<input type="text" id="num7"/></b>
            <b>Second_Number<input type="text" id="num8"/></b>
            <button onClick={div}>Div</button>
            <b><input type="text" id="res3"/></b>
          </div>

          </div>
    )
}

function Comp8(){
    const v1=10;
    const v2=20;
    function f1(){
        document.getElementById('id1').innerHTML=v1+v2;
    }
    return (
        <div 
        style={
            {
               backgroundColor:'white',
               color:'black',
               heigth:'300px',
               width:'300px',
               borderColor:'red',
               borderStyle:'double',
               borderWidth:'4px',
               margin:'10px',
              
            }

        }
        >
         <p> this is a hello world program</p>
         <p>this is how you can wirte css in jsx frame</p>
         <p>the sum of {v1} and {v2} is = {v1+v2}</p>
         <p>this is how you are going to make javascritp withinn a jsx</p>
         <p id="id1"></p>
         <button onClick={f1}>click me</button>
        </div>
    )
}
// sending multiple time
  export default function Compn(){
    return(
        <> 
        <Comp1/> 
        <Comp3/>
        <Comp4/>
        <Comp5/>
        <Comp6/>
        <Comp7/>
        <Comp8/>
        <Comp2/> 
        </>
    )
 }
