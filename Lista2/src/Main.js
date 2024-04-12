import React, { useState } from "react";
import { Route, Routes, Outlet } from 'react-router-dom'
import Login from "./views/Login/Login";
import Lanches from "./views/Lanches/Lanches"; 
import Lanche from "./views/Lanches/Lanche/Lanche"; 
import ManagePage from "./views/Manage/ManagePage";
import AppHeader from "./components/AppHeader";
import { App } from 'konsta/react';

function Main() {

  return (
    <>
    <App theme="material">
   <AppHeader />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/lanches" element={<Lanches />} />
        <Route path="/lanches/:id" element={<Lanche />} /> 
        <Route path="/managepage" element={<ManagePage />}/>
        <Route path="*" element={<Login />} />
      </Routes>
      
    </App>
    </>
  );
}

export default Main;
