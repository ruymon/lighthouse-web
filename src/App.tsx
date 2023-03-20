import { useEffect } from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DrawerProvider } from "./contexts/DrawerContext";
import { AppLayout } from "./layouts/AppLayout";
import { ProtectedLayout } from "./layouts/ProtectedLayout";
import { Announcements } from "./pages/admin/Announcements";
import { Events } from "./pages/admin/Events";
import { Overview } from "./pages/admin/Overview";
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
      <DrawerProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />

            {/* Protected Routes */}
            <Route path="/admin" element={<ProtectedLayout />}>
              <Route path="overview" element={<Overview />} />
              <Route path="announcements" element={<Announcements />} />
              <Route path="events" element={<Events />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </DrawerProvider>
    </BrowserRouter>
  )
}
