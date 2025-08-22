import { Route, Routes } from "react-router";
import { AdminLayout } from "./components/layout/AdminLayout";
import { AuthLayout } from "./components/layout/AuthLayout";
import { Auth } from "./pages/Auth";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Words } from "./pages/Words";
import { AddWords } from "./pages/Words/AddWords";

import { EditWords } from "./services/words/EditWords";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Home />} />
        <Route path="/category" element={<Category />} />=
        <Route path="/words" element={<Words />} />
        <Route path="/words/addwords" element={<AddWords />} />
        <Route path="/words/editwords/:id" element={<EditWords />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Auth />} />
      </Route>
    </Routes>
  );
};
