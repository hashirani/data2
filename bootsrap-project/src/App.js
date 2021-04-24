import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Body1 from './components/Body1/Body1';


function App() {
  // const carous =[
  //   {width:1 ,itemsToShow:1},
  //   {width:550 ,itemsToShow:2,itemsToScroll: 2 },
  //   {width:768 ,itemsToShow:3},
  //   {width:1200 ,itemsToShow:4},
    
  // ]
 
  return (     
   <div>  
 <Header></Header>
<Body></Body>
<Body1></Body1>
   </div> 
  
  );
}

export default App;
