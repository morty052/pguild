
import { ProductPage, DashBoardHome, OtpZone, Orders } from "."
import { Routes, Route } from "react-router-dom"
import { Login } from ".."





const cookie = localStorage.getItem("cookie")

function Dashboard() {
  return (

    <Routes>
          <Route path="/" element={<DashBoardHome/>}/>
          <Route path="product/:id" element={<ProductPage/>}/>
          <Route path="otp" element={<OtpZone/>}/>
          <Route path="orders/*" element={cookie ? <Orders/> : <Login/>}/>
    </Routes>
  )
}

export default Dashboard