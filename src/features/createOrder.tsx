import { client } from "../lib/client";



type orderProps = {
    name:string
}

async function createOrder(order:orderProps,type:string, item:any) {
    const cookie = localStorage.getItem("cookie")
    // const oldOrders = await  client.fetch(`*[_type == "users" && _id == "${cookie}"]{orders[]{...,product -> {...}}}`)
    // .then((res)=> res)


    const b = {
         "product":{
            _type:"reference",
             _ref:order
         },
         "created":(new Date().toISOString())
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const orders = [...oldOrders,b]

    client.patch(`${cookie}`)
    .setIfMissing({orders: []})
    .insert('after', 'orders[-1]', [b])
    .commit({autoGenerateArrayKeys:true})
    .then((res)=> {
        console.log(res)
        window.location.replace(`/delivery/${item}/?type=${type}`)
    })

}

export default createOrder