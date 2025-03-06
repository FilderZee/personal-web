import Navbar from "./components/Navbar"
import Navlink from "./components/Navlink"

const App = () => {
  return (
    <Navbar>
      <Navlink linkText="Projekty"/>
      <Navlink linkText="Informace"/>
      <Navlink linkText="Kontakty"/>
    </Navbar>
  )
}
export default App;