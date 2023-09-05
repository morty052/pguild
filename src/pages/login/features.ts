import { client } from "../../lib/client";




export async function handleLogin(email:string, password:string,  setError:any) {
 

if (!email || !password) {
    return setError({
    email:true,
    password:true,
    text:"Fill both inputs"
    })
}



if (!email.includes("@") || !email.includes(".")  ) {
    return setError({
    email:true,
    password:"",
    text:"Invalid Email"
    })
}

if (password.length < 6) {
    return setError({
        email:"",
        password:true,
        text:"Password must be longer than 6 characters"
        })
}

 const query = `*[_type == "users" && email == "${email}" && password == "${password}"]`
 const user = await client.fetch(query).then(res => res)
 if (user.length < 1) {
    return setError({
        email:true,
        password:"",
        text:"Unrecognized email"
        })
 }

 localStorage.setItem("cookie", user[0]._id)
 window.location.replace("/guild")
}