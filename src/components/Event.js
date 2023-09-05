const E1=()=>{
    return (
    <button style={{
        backgroundColor:'white',
        color:'black'
    }}>Click</button>
    )
}

function E2(){
    function handleOnClick(){
       alert('ypu clicked me');
    }
    return(
        <button onClick={handleOnClick}>click me</button>
    )
}

const E3=()=>{
    var v1=10;
    function add(){
        v1=v1+1;
       alert(v1);
    }
    return(
        <div> 
        <button onClick={add}>addby1</button>
        </div>
    )
}

export default function En(){
    return(
        <div> 
  <E1/>
  <E2/>
  <E3/>
  </div>
    )
 }