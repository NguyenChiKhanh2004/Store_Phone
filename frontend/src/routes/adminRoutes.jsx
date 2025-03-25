import { Routes, Route } from "react-router-dom";
import Admin from "../pages/admin/AdminPage";


export default function AdminRoutes() {
  return (
    <Routes>
        <Route path="" element={<Admin/>} />
    </Routes>
  );
}
