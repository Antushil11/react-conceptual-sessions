import Users from "./Components/Users"
import User from "./Components/User"
function App() {
  const person = {
    name : "jakaria",
    age: 45,
    team:"li"
  }
  return (
    <>
      <h1> Hello world</h1>
      <Users person={person}></Users>
      <User></User>


    </>
  )



}

export default App