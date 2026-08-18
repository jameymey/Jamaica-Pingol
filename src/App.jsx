import { Navbar } from "./layout/Navbar"
import { Hero } from "./pages/Hero"
import { What } from "./sections/What";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
      <Hero />
      <What />
      </main>

    </div>
  )
}

export default App
