import { client } from "../../../lib/client";
import { message } from "antd";

export async function handleLogin(email:string, password:string) {
    

if (!email || !password) {
    return message.error("Please fill both fields")
}

 const query = `*[_type == "users" && email == "${email}" && password == "${password}"]`
 const user = await client.fetch(query).then(res => res)
 if (user.length < 1) {
    return message.error("Check email or password")
 }
 console.log(user)
 localStorage.setItem("cookie", user[0]._id)
 window.location.replace("/dashboard")
}