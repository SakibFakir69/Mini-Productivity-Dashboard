

import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

function Signup() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  console.log(watch("example"))



  return (
    <div>

        
    </div>
  )
}

export default Signup