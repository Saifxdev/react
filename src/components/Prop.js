 

function Prop1(props){
    return(
        <div 
         style={{
            color:'white'
         }} 
        
        > 
            <img src={props.img} alt="hello"/>
            <p>my name is {props.name}</p>
            <p>my age is {props.age}</p>
            <p>my </p>
        </div>

    )
}
 

function Prop2(props){
      const {name,age,gender,aldress}=props;
      
    return(
       <>
       <p>name is: {name}</p>
       <p>age is: {age}</p>
       <p>gender is: {gender}</p>
       <p>aldress is: {aldress}</p>
       </>
    )
}
function Prop(){
    return(

        <div style={{
            display:'flex'
        }}> 

        <div
        style={{
            display:'flex',
            borderColor:'red',
            borderStyle:'double',
            borderWidth:'4px',
            width:'max-content'
        }}
        >
             <Prop1
             img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSku_hrG9FNwMcaDyF-7XV5Z_t2mOBvD6LAZg&usqp=CAU" 
             name="saif" 
             age="21" 
             />
        </div>
        
        <div>
            <Prop2
            name="saif"
            age="22"
            gender="male"
            aldress="allahabad"
            />
        </div>


        
        </div>
    )
}
export default Prop;