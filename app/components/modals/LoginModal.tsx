'use client'

import useLoginModal from "@/app/hooks/useLoginModal";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const LoginModal = () => {

  const loginModal = useLoginModal()

  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: {errors}, } = useForm<FieldValues>({defaultValues: {
      email: '',
      password: '',
    },})


  }

  return ( <Modal /> );
}
 
export default LoginModal;