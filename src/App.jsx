
//=========================================INLINE CSS======================================================================================
// const Stl=()=>{
//   return(
//     <>
//         <h1 style={{color:"red",textDecoration:"overline"}}>Welcome To React Classes!!! This Is Our Work Time!!!</h1>
//     </>
//   )
// }
// export default Stl;

//============================================INLINE CSS WITH VARIABLE===========================================================================
// const clr={
//   color:"green",
//   textDecoration:"underline"
// }
// const App=()=>{
//   return(
//     <>
//       <h1 style={clr}>Welcome To React!!!</h1>

//     </>
//   )
// }
// export default App;
//==========================================CSS IMPORT FILE IN MAIN.JSX===============================================================================

import Home from "./pages/Home";
import About from "./pages/About";

const Fel=()=>{
  return(
    <>
       <p className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, consectetur sed. Fugit fuga sapiente voluptatibus. Velit voluptatibus consequatur delectus cumque architecto accusantium tempore quasi, nobis cum in, maxime iusto? Similique.</p>
       <Home/>
       <About/>
       
    </>
  )
}
export default Fel;