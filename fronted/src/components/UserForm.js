import React, { useState ,useEffect} from 'react'
import { Form, Button, Input, Table, Card } from 'antd'
import './UserForm.css'


function UserForm() {

  const [userData, SetData] = useState([])
  const record = [
    {
      title: "ID",
      dataIndex: '_id'
    }
    ,
    {
      title: "EMAIL",
      dataIndex: 'email'
    
    }
    ,
    {
      title: "Name",
      dataIndex: 'name'
    }
  ]

  // async function register1() {
  //   await fetch("http://localhost:5000/userApi")
  //     .then(res => res.json())
  //     .then(data => SetData(data))


  // }

  useEffect(()=>{
    fetch("http://localhost:5000/userApi")
    .then(res=>res.json())
    .then(data=>SetData(data))
  },[userData])
  async function register(value) {
    await fetch("http://localhost:5000/userApi",
      {
        headers: { 'Content-Type': 'application/json' },
        method: "POST",
        body: JSON.stringify(value)
      }


    )

  }
  return (
    <>
    <Card className='card1'>
      <Form onFinish={register}>
        <Form.Item label="name" name="name">
          <Input className='input1' placeholder='ENTER YOUR NAME.......'/>
        </Form.Item>
        <Form.Item label='email' name="email">
          <Input className='input1' placeholder='ENTER YOUR EMAIL............'/>
        </Form.Item>
        <Button htmlType='submit' className='btn'>Post</Button>
         {/* <Button onClick={register1}  className='btn'>Get</Button> */}
      </Form>
    </Card>
      
      <Card className='card2'>
       
        <Table columns={record} dataSource={userData}  className='table1'/>
      </Card>



    </>
  )
}

export default UserForm