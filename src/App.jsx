import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "@/pages/HomePage";
import { ComponentsPage } from "@/pages/ComponentsPage";
import { FunctionalComponentsPage } from "@/pages/FunctionalComponentsPage";
import { RootLayout } from "./components/layout/RootLayout";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />} >
          <Route index element={<HomePage />} />
          <Route path="components" element={<ComponentsPage />} />
          <Route path="functional-components" element={<FunctionalComponentsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


