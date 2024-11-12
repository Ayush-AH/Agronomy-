import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Forget from '../pages/Forget';
import Home from '../pages/Home';
import NoteFound from '../pages/NoteFound';
import LectureSuggestions from '../pages/Lecture-Suggestions';
import OrderManagement from '../pages/OrderManagement';
import OrderDetails from '../pages/OrderDetails';

const Routing = () => {
  return (
    <Routes>
      {/* Define the main routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forget" element={<Forget />} />

      {/* Main Home route with nested routes */}
      <Route path="/" element={<Home />}>
        <Route index element={<OrderManagement />} />
        <Route path="/order-board" element={<OrderManagement />} />
        <Route path="/lecture-suggestions" element={<LectureSuggestions />} />
        <Route path="/order-board/order/:id" element={<OrderDetails />} />
        <Route path="*" element={<NoteFound />} />
      </Route>

      {/* Catch-all route for undefined paths */}
      <Route path="*" element={<NoteFound />} />
    </Routes>
  );
};

export default Routing;
