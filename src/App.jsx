import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "@/pages/HomePage";
import { HomeContent } from "@/components/HomeContent";
import { Components } from "@/components/items/Components";
import { FunctionalComponents } from "@/components/items/FunctionalComponents-";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomeContent />} />
          <Route path="components" element={<Components />} />
          <Route path="functional-components" element={<FunctionalComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


