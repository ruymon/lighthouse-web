import { useEffect } from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SideDrawerProvider } from "./contexts/SideDrawerContext";
import { AppLayout } from "./layouts/AppLayout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { api, initializeAxios } from "./services/axiosService";
import { initializeLayers } from "./services/layersService";



export function App() {
  async function initializeApp() {
    await initializeLayers();
    initializeAxios();

    console.log("App initialized 🚀");

    console.log(await api.get("/me"));
  }

  useEffect(() => {
    initializeApp();
  }, []);

  
  return (
    <BrowserRouter>
      <SideDrawerProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </SideDrawerProvider>
    </BrowserRouter>
  )
}
