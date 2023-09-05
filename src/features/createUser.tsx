import { client } from "../lib/client";



type user = {
    _type:string
    email:string,
    password:string,
}

type email = {
    email:string
}

async function createUser(user:user, setError:any) {
    const data = await client.fetch(`*[_type == "users"]{email}`).then((res) => res)
    const emails =  data.map((e:email)=>(
        e.email
      ))
    
      if (!user.email) {
        return setError({
            email:true,
            password:"",
            text:"Enter a valid Email"
          })
      }

      if (emails.includes(user.email)) {
        return setError({
            email:true,
            password:"",
            text:"Email already taken"
          })
      }
     
      if (!user.email.includes("@") || !user.email.includes(".")) {
        return setError({
          email: true,
          password: "",
          text: "Invalid Email",
        });
      }

      if (!user.password) {
        return setError({
            email:"",
            password:true,
            text:"Please enter a password"
          })
      }

      if (user.password.length < 6) {
        return setError({
          email: false,
          password: true,
          text: "Password must be more than 6 characters",
        });
      }

    client.create(user).then((res)=> {
        localStorage.setItem("cookie", res._id)
        window.location.assign("/guild")
    })
    
}


export default createUser