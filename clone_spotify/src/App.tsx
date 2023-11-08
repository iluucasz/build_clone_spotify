import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Plans } from "./components/plans";
import { Proposal } from "./components/proposal";
import { Values } from "./components/values";
import "./styles/tailwind.css";

function App() {
  return (
    <>
      <Header />
      <Values />
      <Proposal />
      <Plans />
      <Footer />
    </>
  )
}

export default App
