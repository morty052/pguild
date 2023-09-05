import { client } from "../lib/client";



// type user = {
//     _type:string
//     email:string,
//     password:string,
// }

type email = {
    email:string
}

async function signIn(email:string, password:string, setError:any) {
    const data = await client.fetch(`*[_type == "users" && email == "${email}" && password == "${password}"]{email}`).then((res) => res)
    const emails =  data.map((e:email)=>(
        e.email
      ))
    
      if (!email) {
        return setError({
            email:true,
            password:"",
            text:"Enter a valid Email"
          })
      }

      if (!emails.includes(email)) {
        return setError({
            email:true,
            password:"",
            text:"Email already taken"
          })
      }

      if (!password) {
        return setError({
            email:"",
            password:true,
            text:"Please enter a password"
          })
      }


    // client.create(user).then((res)=> {
    //     localStorage.setItem("cookie", res._id)
    //     window.location.assign("/guild")
    // })
    
}


export default signIn