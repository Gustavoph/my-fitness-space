import {
  Route,
  Routes,
} from "react-router-dom";

import { Login } from '../views/Login';
import { TmbCalculator } from '../views/Tmb-calculator';

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TmbCalculator />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}