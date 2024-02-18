import { Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import CreateUser from "./page/CreateUsers";
import ShowUser from "./page/ShowUser";
import EditUser from "./page/EditUser";
import DeleteUser from "./page/DeleteUsers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/create" element={<CreateUser />} />
      <Route path="/users/details/:id" element={<ShowUser />} />
      <Route path="/users/edit/:id" element={<EditUser />} />
      <Route path="/users/delete/:id" element={<DeleteUser />} />
    </Routes>
  );
}

export default App;
