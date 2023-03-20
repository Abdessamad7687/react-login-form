import Button from "./Button/Button"
import React from 'react'
import Input from './Input/Input'
import Label from './Label'

const Form = () => {
  return (
    <form>
      <Label
        text="Username"
      />
      <Input type="text" placeholder="Type your username" />
      <Label text="Password" />
      <Input type="password" placeholder="Type your password" />
      <Button>Login</Button>
    </form>
  )
}
export default Form