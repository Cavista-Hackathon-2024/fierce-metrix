import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./Pages/Home";
import { AppContextProvider } from "./context/AppContext";
import CreateReminder from "./Pages/CreateReminder";

const App = () => {
  return (
    <>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/create" element={<CreateReminder />} />
        </Routes>
      </AppContextProvider>
    </>
  );
};

export default App;
