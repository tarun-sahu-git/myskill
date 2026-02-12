import React, { useState, useEffect } from 'react'
import { Form, Button, Input, Table, Card } from 'antd'
import './UserForm.css'
import { render } from '@testing-library/react'


function UserForm() {
  const [form] = Form.useForm()
  const [userData, SetData] = useState([])
  const [userid, setuser] = useState(null)
  const record = [
    {
      title: "ID",
      dataIndex: '_id',

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
    },
    {
      title: "Action",
      render: (_, i) => (
        <button onClick={() => editeData(i)}>Edit</button>
      )
    },
     {
      title: "Action",
      render: (_, i) => (
        <button onClick={() => deletedata(i._id)}>DELETE</button>
      )
    }
  ]
 

  // async function register1() {
  //   await fetch("http://localhost:5000/userApi")
  //     .then(res => res.json())
  //     .then(data => SetData(data))


  // }

  useEffect(() => {
    fetch("http://localhost:5000/userApi")
      .then(res => res.json())
      .then(data => SetData(data))
  }, [])
  async function register(value) {

    if (userid) {

      await fetch(`http://localhost:5000/userApi/${userid}`,
        {
          headers: { 'Content-Type': 'application/json' },
          method: "PUT",
          body: JSON.stringify(value)
        }
      )

      form.resetFields();
    }
    else {
      await fetch("http://localhost:5000/userApi",
        {
          headers: { 'Content-Type': 'application/json' },
          method: "POST",
          body: JSON.stringify(value)
        }
      )
      form.resetFields()
    }


  }

  function editeData(widthid) {
    setuser(widthid._id)
    form.setFieldsValue(widthid)

  }
  function deletedata(data) {
    
  fetch(`http://localhost:5000/userApi/${data}`, {
    method: "DELETE"
  })
 .then(alert("user has been deleted"))
}
  return (
    <>
      <Card className='card1'>
        <Form onFinish={register} form={form}>
          <Form.Item label="name" name="name">
            <Input className='input1' placeholder='ENTER YOUR NAME.......' />
          </Form.Item>
          <Form.Item label='email' name="email">
            <Input className='input1' placeholder='ENTER YOUR EMAIL............' />
          </Form.Item>
          <Button htmlType='submit' className='btn'>{userid ? "update" : "ADD"}</Button>
          {/* <Button onClick={register1}  className='btn'>Get</Button> */}
        </Form>
      </Card>

      <Card className='card2'>

        <Table columns={record} dataSource={userData} className='table1' />
      </Card>



    </>
  )
}

export default UserForm