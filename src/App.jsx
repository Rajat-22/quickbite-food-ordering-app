import Header from "./components/Header";
import Meals from "./components/Meals";
// import FloatingFoodIcons from "./components/FloatingFoodIcons";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <CartContextProvider>
      {/* <FloatingFoodIcons /> */}
      <div className="app-content">
        <Header />
        <Meals />
      </div>
    </CartContextProvider>
  );
}

export default App;
