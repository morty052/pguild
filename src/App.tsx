import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components";
import { Home, Dashboard, Login, Reset, Checkout, Delivery } from "./pages";

const cookie = localStorage.getItem("cookie")

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/guild/*" element={cookie ? <Dashboard /> : <Login/>} />
      </Route>
      <Route path="/login" element={<Login/>} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/checkout/:id/:wallet" element={<Checkout />} />
      <Route path="/delivery/:id" element={<Delivery/>}/>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
