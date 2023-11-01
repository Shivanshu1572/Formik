import AddtoCart from "./Component/AddtoCart"
import FormApp from "./Component/Form"
import Todos from "./Component/Todos"
import Navbar from "./Component/navbar"

const App = () => {
  return (
    <div>
      {/* <FormApp/> */}
      <Navbar/>
      <AddtoCart/>
      <Todos/>
    </div>
  )
}

export default App