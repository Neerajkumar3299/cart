import Navbar from "./Component/Navbar";
import Cart from "./Component/Cart";
import { useGlobalContext } from "./Context";
function App() {
  return (
    <>
      <main className="container">
        <Navbar/>
        <Cart/>
      </main>
    </>
  );
}

export default App;
