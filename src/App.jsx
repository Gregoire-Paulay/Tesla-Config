import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Config from "./components/Config";
import Cart from "./components/Cart";

const App = () => {
  let total = 0;
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState(0);
  return (
    <>
      <h1>Tesla Config</h1>

      <main className="container">
        <Config
          title="Sélectionnez votre véhicule"
          choice={price}
          set={setPrice}
          name1=" Grande autonomie - 90 700 €"
          name2=" Performance - 106 700 €"
        />
        <Config
          title="Sélectionnez votre couleur"
          choice={color}
          set={setColor}
          name1=" Blanc nacré multicouche - 0 €"
          name2=" Noir uni - 1 000 €"
        />

        <Cart price={price} color={color} total={total} />
      </main>

      <Footer />
    </>
  );
};

export default App;
