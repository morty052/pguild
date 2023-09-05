
import { client } from "../lib/client"
import Logout from "./Logout"

// type Props = {
//     email:string
// }

async function resetPass(email:string ,password:string, newpass:string) {
  
 const user =  await client.fetch(`*[ _type == "users" && email == "${email}"]`)
 .then((res) => res)

 console.log(newpass)

 if (user?.length < 1) {
    return
 }

 const id = user[0]._id
 const cookie = localStorage.getItem("cookie")

 await client.patch((`${id}`))
 .set({password:password})
 .commit({autoGenerateArrayKeys:true})
 .then(() => {

    if (cookie) {
        Logout()
    }

    setTimeout(() => {
        window.location.assign("/login")
       }, 1000)
 }
   
 )

}

export default resetPass