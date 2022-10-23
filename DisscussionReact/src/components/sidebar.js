import { Button, Checkbox, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
const App = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;










































// import {
//   AppstoreOutlined,
//   CalendarOutlined,
//   LinkOutlined,
//   MailOutlined,
//   SettingOutlined,
// } from '@ant-design/icons';
// import { Divider, Menu, Switch } from 'antd';
// import React, { useState } from 'react';
// import 'antd/dist/antd.css';
// import "./sidebar.css";
// // import 'antd/dist/antd.less'
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   getItem('Navigation One', '1', <MailOutlined />),
//   getItem('Navigation Two', '2', <CalendarOutlined />),
//   getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
//     getItem('Option 3', '3'),
//     getItem('Option 4', '4'),
//     getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
//   ]),
//   getItem('Navigation Three', 'sub2', <SettingOutlined />, [
//     getItem('Option 7', '7'),
//     getItem('Option 8', '8'),
//     getItem('Option 9', '9'),
//     getItem('Option 10', '10'),
//   ]),
//   getItem(
//     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//       Ant Design
//     </a>,
//     'link',
//     <LinkOutlined />,
//   ),
// ];
// const App = () => {
//   const [mode, setMode] = useState('inline');
//   const [theme, setTheme] = useState('light');
//   const changeMode = (value) => {
//     setMode(value ? 'vertical' : 'inline');
//   };
//   const changeTheme = (value) => {
//     setTheme(value ? 'dark' : 'light');
//   };
//   return (
//     <>
//     <div className='mode'>      <Switch onChange={changeMode} /> Change Mode
//       <Divider type="vertical" />
//       <Switch onChange={changeTheme} /> Change Style
//       </div>

//       <br />
//       <br />
//       <Menu
//         style={{
//           width: 256,
//         }}
//         defaultSelectedKeys={['1']}
//         defaultOpenKeys={['sub1']}
//         mode={mode}
//         theme={theme}
//         items={items}
//       />
//     </>
//   );
// };
// export default App;