import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Login from "./components/Login";
import ProtectedRoute from "./ProtectedRoute";
import QueriesRoute from "./components/queriesRoute";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/quizroute" element={<QueriesRoute />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
