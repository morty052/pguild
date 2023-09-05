function Logout() {
   localStorage.removeItem("cookie") 
   window.location.replace("/")
}

export default Logout