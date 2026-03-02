import { Home } from "./screens/Home";
import AppRouter from "./navigation/AppRouter";
import './App.css'

function App() {
  return (
    <>
      <AppRouter />
      <Home />
    </>
  )
}

export default App