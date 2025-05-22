import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "@/pages/HomePage";
import ComponentsPage from "@/pages/ComponentsPage";
import FunctionalComponentsPage from "@/pages/FunctionalComponentsPage";
import ComponentBasicsPage from "@/pages/ComponentBasicsPage";
import RootLayout from "./components/layout/RootLayout";
import NotFoundPage from "./pages/NotFoundPage";
import RenderingPage from "./pages/RenderingPage";
import HooksPage from "./pages/HooksPage";
import RoutersPage from "./pages/RoutersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />} >
          <Route index element={<HomePage />} />
          <Route path="components" element={<ComponentsPage />} />
          <Route path="functional-components" element={<FunctionalComponentsPage />} />
          <Route path="component-basics" element={<ComponentBasicsPage />} />
          <Route path="rendering" element={<RenderingPage />} />
          <Route path="hooks" element={<HooksPage />} />
          <Route path="routers" element={<RoutersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


