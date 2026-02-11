// // code of class for fronted 
// import React from 'react'
// import { Form, Button, Input } from 'antd'
// function Home() {
//   async function handleCall(Value) {
//   await fetch('http://localhost:4000/api',
//       {
//         headers: { 'Content-Type': 'application/json' },
//         method: 'POST',
//         body: JSON.stringify(Value)
//       }
//     )
//   }
//   return (
//     <div>
//       <Form onFinish={handleCall}>
//         <Form.Item name="name">
//           <Input />
//         </Form.Item>
//         <Form.Item name="email">
//           <Input />
//         </Form.Item>
//         <Button htmlType='submit'>Submit</Button>
//       </Form>
//     </div>
//   )
// }

// export default Home


// // fetch data in table form..................................................
// import React from 'react'
// import { Table } from 'antd'
// function Home() {
//   const col=[
//     {
//       title:"Id",
//       dataIndex:'id'
//     },
//      {
//       title:"Name",
//       dataIndex:'name'
//     },
//      {
//       title:"Email",
//       dataIndex:'email'
//     }
//   ]
//   const data=[
//     {
//       id:1,
//       name:'Harsh',
//       email:'harsh@gmail.com'
//     }
//   ]
//   return (
//     <div>
//       <Table columns={col} dataSource={data}/>
//     </div>
//   )
// }

// export default Home
// // ..................................................................
// import React from 'react'
// import { Table } from 'antd'
// import { useState } from 'react'
// function Home() {
//   const[userdata,setData]=useState([])
//   function handleGet() {
//     fetch('http://localhost:4000/api')
//       .then(
//         res => res.json()
//       ).then(
//         data => setData(data)
//       )

//   }
//   const col = [
//     {
//       title: "Id",
//       dataIndex: '_id'
//     },
//     {
//       title: "Name",
//       dataIndex: 'name'
//     },
//     {
//       title: "Email",
//       dataIndex: 'email'
//     }
//   ]
//   return (
//     <div>
//       <button onClick={handleGet}>get</button>
//       <Table columns={col} dataSource={userdata} />
//     </div>
//   )
// }

// export default Home