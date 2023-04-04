//import React from 'react'
//import { useState } from 'react';
//import axios from 'axios'
// import Navbar from './Routers/Navbar';
// import { BrowserRouter , Route , Routes} from 'react-router-dom';
// import Home from './Routers/Home';
// import Dashboard from './Routers/Dashboard';
// import About from './Routers/About';
//import BusTicket from './BusTicket.jpg'

//HOC (Higher Order Component)
//is function that takes a component and returns a new component
// import React from "react";
// import Hoc from './Hoc'
// const App = () =>{

//   return(
//     <div>
//       <center>
//         <h4>Welcome!!</h4>
//       </center>
//     </div>

//   )
// }

// export default Hoc(App);



// // Context-API
// import React, { createContext ,useState } from 'react'
// //import { ComponentA } from './Context/ComponentA';
// //import { ComponentB } from './Context/ComponentB';
// import { Count } from './Context/Count'
// import { Display } from './Context/Display'

// export const store = createContext()
// export const App = () => {
//   const [names,setnames] = useState('')
//   const AddHandler = ad =>{
//     setnames(ad.target.value)
//   } 

//   const SubmitHandler = sh => {
//     sh.preventDefault()
//     setdata([...data,{Brandname:names}])
//   }


//   const [data,setdata] = useState([
//     {
//       Brandname : "OnePlus7T"
//     },
//     {
//       Brandname : "Samsung"
//     },
//     {
//       Brandname : "MI"
//     },
//     {
//       Brandname : "IPhone"
//     },
    
//   ])
//   return (
//     <store.Provider value={[data,setdata]}>
//       <center>
//         {/* <ComponentA />
//         <ComponentB /> */}
//         <Count />
//         <Display />
//         {/* <button onClick={() => setdata(data+1)} >Increment</button> */}
//         <form onSubmit={SubmitHandler}>
//           <input type='text' placeholder='Enter Your Brandname' onChange={AddHandler}/>
//           <input type='submit' value='Add'/>
//         </form>
//       </center>
//     </store.Provider>
//   )
// }


//UseState - re-render when the content change and update in UI
//UseRef - doesnt notify you when its content changes. Mutating the (.current) property doesnt cause a re-render
// import React , {useEffect, useRef} from 'react'
// export const App = () => {
//   const data = useRef(null);

//   const submitHandler = sh =>{
//     sh.preventDefault();
//     console.log(data.current.value)
//   }

//   useEffect(() => { 
//     data.current.focus()
//   },[])

//   return (
//     <div>
//       <center style={{marginTop :'30px'}}>
//         <form onSubmit={submitHandler}>
//           <input ref={data} type='text' placeholder='Enter Text' /> <br/><br/>
//           <input type='submit'/>
//         </form>
//       </center>
//     </div>
//   )
// }
 




//Class Component
//rcc
// import React, { Component } from 'react'
// import ClassComponentA from './ClassComponentA';
// class App extends Component {
//   state = {
//     name : "Pavan",
//     products : []
//   } 
//   componentDidMount(){   //Like UseEffect
//     fetch('http://localhost:8081/Employees/get').then(pro => pro.json())
//     .then(datass => this.setState({products : datass})).catch(err => console.log(err))
//   }

//   render() {
//     return (
//       <div>
//         <center>
//           {/* <ClassComponentA data={this.state.name}/> */}
//           <ClassComponentA data = {this.state.products} />
//           <br />
//           <button onClick={() => this.setState({
//             name : "Kusampudi Pavan"
//           })} >Go</button>
//           {/* {this.state.products.map(product => <li key={product.id}>{product.first_name}</li>)} */}
//         </center>
//       </div>
//     )
//   }
// }



// Mounting - the process of outputting or additional component to the DOM 
// Unmounting - the process of removing or blocking them from the DOM(Document Object Model)
// Virtual DOM - is extremely faster because it is an abstraction of the Html Dom and lightweight.
// Real DOM - is bit slower beacuse of update the content, structure,and style of a document.

// export const App = () => {
//   const [data,setdata] = useState(true);
//   return (
//     <div>
//       <center style={{marginTop: '50px'}}>
//         {data?<h2>Component Mounted</h2>:null}<br/>
//         <button onClick={() => setdata(!data)}>{!data?<p>Mounting</p>:<p>Unmounting</p>}</button>
//       </center>
//     </div>
//   )
// }


// import datas from './citydata.json'
// //Search Filter
// export const App = () => {
//   const [data,setdata] =useState('')
//   const filterHandler = fh =>{
//     setdata(fh.target.value)
//   }

//   return (
//     <div>
//       <center><br/>
//         <input type='text' placeholder='Enter city' value={data} onChange={filterHandler}  />
//         {datas.filter(city => city.name.toLowerCase().includes(data.toLowerCase())).map(city => {
//                                                                       return <div key={city.id}>
//                                                                       {city.name}
//                                                                       </div>
//                                                                     }
//         )}
//       </center>
//     </div>
//   )
// }




// //Email 
// //import emailjs from 'emailjs-com'
// export const App = () => {
//   const [data,setdata] = useState({
//     subject: '',
//     email:'',
//     message:'',
//   })

//   const {subject,email,message} = data;

//   const EmailHandler = eh =>{
//     setdata({...data,[eh.target.name]:eh.target.value})
//   }

//   const submitHandler = sh =>{
//     sh.preventDefault()
//     console.log(data)
//     // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//     // .then((result) => {
//     //     console.log(result.text);
//     // }, (error) => {
//     //     console.log(error.text);
//     // });
//     //e.target.reset();
//   }

//   return (
//     <div>
//       <center>
//         <br/>
//         <form onSubmit={submitHandler}>
//           {/* <label>Subject is:</label><br/> */}
//           <input type='text' value={subject} name='subject' placeholder='Enter Subject' onChange={EmailHandler} /> <br/> <br />
//           <input type='email' value={email} name='email' placeholder='Enter Email' onChange={EmailHandler} /><br/> <br/>
//           <input type='text' value={message} name='message' placeholder='Enter Message' onChange={EmailHandler} /><br/> <br />
//           <input type='submit' name='submit' />
//         </form>
//       </center>
//     </div>
//   )
// }

// Redux - use to store values in redux-store
// useReducer - use to store state values to local const variables
// import React, {useReducer} from "react";

// const first = {count: 0};

// function reducer(state,action)
// {
//   switch(action.type){
//     case "INCREMENT" :
//         return {count: state.count+1};
//     case "DECREMENT" :
//         return {count: state.count-1};
//     default:
//         throw new Error();
//   }
// }

// function App(){
//   const [state,dispatch] = useReducer(reducer,first);
//   return (
//     <center>
//       Count: {state.count}
//       <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
//       <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
//     </center>
//   )
// }


// //Redux - is an open source javaScript library for managing application state.
// //npm install redux ,react-redux,redux-thunk,redux-devtools-extension
//import { main } from './Redux/main';

//import image from './BusTicket.jpg'
//import student from './student'

//racf
//Redux - Managing State values in multiple components at the same time using redux
// export const App = ({count}) => {
//   return (
//     <div>
//       <center>
//         Component From App.js : {count} <br/>
//         <main />
//       </center>
//     </div>
//   )
// }


// import {ColorSchemesExample} from './file'
// //export const contexts = React.createContext()

// export const App = () => {
//   return (
//     <div>
//       {/* <center>
//         <contexts.Provider value={"Pavan"}>
//           <About/>
//         </contexts.Provider>
//       </center> */}
      
//       <BrowserRouter>
//         <Navbar />
//         {/* <img scr={BusTicket} alt="BusTicket" ></img>
//         <a href='BusTicket' download="BusTicket">click here to download</a> */}
//         <Routes>
//           <Route path='/' element={<Home></Home>} />
//           <Route path='/dashboard/:name' element={<Dashboard></Dashboard>} />
//           <Route path='/about' element={<About></About>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }




//fetching data using Axios

// export const App = () => {
//   const [data,setdata] = useState([])

//   useEffect(() => {
//     axios.get('http://localhost:8081/Employees/get').then(response => setdata(response.data) )
//   },[])
//   return (
//     <div>
//       {data.map(item => <li key={item.id} > {item.first_name}</li>)}
//     </div>
//   )
// }



// fetching data
// export const App = () => {
//   const [data,setdata] = useState([])

//   // useEffect(() => {
//   //   fetch('http://localhost:8081/Employees/get').then(response => response.json()).then(json => setdata(json))
//   // })
//   const backendDataHandler = bdh =>{
//     fetch('http://localhost:8081/Employees/get').then(response => response.json()).then(json => setdata(json))
//   }


//   return (
//     <div>
//       {/* {data.map(item=> <li key={item.id}>{item.first_name}</li>)} */}
//       <button onClick={backendDataHandler}>Click Here to get data</button>
//       <h4>Data is : {data.map(item=> <li key={item.id}>{item.first_name}</li>)}</h4>
//     </div>
//   )
// }





//inputculator
// import './App.css'
// export const App = () => {
//   const [input,setinput] = useState('')
//   const [output,setoutput] = useState(0)

//   const inputHandler = ih =>{
//     setinput(ih.target.value)
//   }

//   const outputHandler = oh =>{
//     setoutput(eval(input))
//   }

//   const clrHandler = ch =>{
//     setinput('');
//     setoutput('0');
//   }

//   return (
//     <div>
//       <center>
//         <input type='text' placeholder='Enter value' value={input} name='value' onChange={inputHandler} />
//         <br/>
//         <button onClick={outputHandler}>Result</button>
//         <h4>Result is : {output}</h4>

//         <button onClick={() => setinput(input+'1')}>1</button>
//         <button onClick={() => setinput(input+'2')}>2</button>
//         <button onClick={() => setinput(input+'3')}>3</button>
//         <button onClick={() => setinput(input+'4')}>4</button>
//         <button onClick={() => setinput(input+'5')}>5</button><br/>

//         <button onClick={() => setinput(input+'6')}>6</button>
//         <button onClick={() => setinput(input+'7')}>7</button>
//         <button onClick={() => setinput(input+'8')}>8</button>
//         <button onClick={() => setinput(input+'9')}>9</button>
//         <button onClick={() => setinput(input+'0')}>0</button><br/>

//         <button onClick={() => setinput(input+'+')}>+</button>
//         <button onClick={() => setinput(input+'-')}>-</button>
//         <button onClick={() => setinput(input+'*')}>*</button>
//         <button onClick={() => setinput(input+'/')}>/</button>
//         <button onClick={clrHandler}>CLR</button>
       


//       </center>
//     </div>
//   )
// }



//import React, { useState } from "react";


// const App = () => 
// {
//   //Sign up 
//   const [data,setdata] = useState({
//     username : '',
//     firstname : '',
//     lastname : '',
//     login : {
//       "email" : '',
//       "password" : '',
//       "confirmPassword" : '',
//     }
//   })

//   //Object Destruction


//   //Handler Function
//   const SignUpHandler = suh =>{
//     setdata({...data, [suh.target.name]: suh.target.value})
//   }
//   const SubmitHandler = sh =>{
//     sh.preventDefault();
//     //axios.post('https://storedataforsignup-default-rtdb.firebaseio.com/store.json',data).then(()=> alert("Submitted Successfully!"))
//     console.log(data)
//   //  if(username.length < 5){
//   //   alert("Username must be 5 characters")
//   //  }
//   //  else if(password !== confirmPassword){
//   //     alert ("Password did not match!!")
//   //   }else{
//   //     console.log(data)
//   //   }
//    }


//   return (
//     <div>
//       <center>
//         <form autoComplete="off" onSubmit={SubmitHandler}>
//           <input type="text" placeholder="Enter Username" name="username" value={data.username} onChange={SignUpHandler} /> <br />
//           <input type="text" placeholder="Enter Firstname" name="firstname" value={data.firstname} onChange={SignUpHandler} /> <br />
//           <input type="text" placeholder="Enter Lastname" name="lastname" value={data.lastname} onChange={SignUpHandler} /> <br />
//           <input type="email" placeholder="Enter Email" name="email" value={data.email}  onChange = {SignUpHandler} /> <br />
//           <input type="password" placeholder="Enter Password" name="password" value={data.password} onChange = {SignUpHandler}  /> <br />
//           <input type="password" placeholder="Enter Confirm Password" name="confirmPassword" value={data.confirmPassword} onChange ={SignUpHandler} /> <br />
//           {password !== confirmPassword ?<p style={{"color" : "red"}}>Password did not match</p> : null}
//           <input type = "submit" name = "submit" />
//         </form>
//         {username}<br />
//         {firstname}<br />
//         {lastname}<br />
//         {email}<br />
//         {password}<br />
//         {confirmPassword}<br />
        
        
//       </center>
//     </div>
//   )
// }


//   const arr= ["pavan","hema","hemanth","aravind","mani","sriram","manoj"]
//   const arr = [10,20,23,30,40,54,63,12,34]
//   const filtered = arr.filter(name => name.includes('m'))
//   const filtered = arr.filter( items => items<50)

//  const [plus ,setplus] = useState(0)
//  const [minus, setminus] = useState(0)
//  useEffect(() => console.log(plus),[plus])
//  const [username,setusername] = useState("")
//  const [password, setpassword] = useState("")
//  const usernamefunction = a => {
//  setusername(a.target.value)
// }
// const passwordfunction = b =>{
//   setpassword(b.target.value)
// }

// Form
// const [data,setdata] = useState({
//   username:'',
//   password:'',
// })

// const {username,password} = data
// const dataFunction = a =>{

//   setdata({...data,[a.target.name]: [a.target.value]})
// }

// const SubmitFunction = b =>{
//   b.preventDefault();
//   console.log(data);
//   // axios.post('url',data); to send data to backend
// }
//    return (
//      <div>
//         <center>
//           {
//             filtered.map (
//               (values,index) => <li key={index}>{values}</li>
//             )
//           }
//            <form onSubmit={SubmitFunction}>
//              <input type="text" placeholder='Enter Username' value={username} name="username"
//              onChange={dataFunction} /> <br />
//              <input type="text" placeholder='Enter Password' value={password} name="password"
//             onChange={dataFunction} /> <br />
//              <input type="submit" name="submit" />
//            </form>
//           <input type= "text" placeholder="Enter Your Name" value={username} name="username" onChange={usernamefunction} /> 
//           <input type= "text" placeholder="Enter Your Password" value = {password} name= "password" onChange={passwordfunction} /> 
          

//           <h1>You have clicked {plus} times</h1>
//           <h1>{minus}</h1>
//           <button onClick={() => setplus(plus+1)}> + </button>
//           <button onClick={() => setminus(minus-1)}> - </button>
//            <br/>
//            {username} <br/> 
//           {password}
          
//          </center>
//      </div>
//   )
//}

export default App;
