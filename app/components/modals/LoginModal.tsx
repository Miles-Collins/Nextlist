'use client'

import useLoginModal from "@/app/hooks/useLoginModal";
import { useState, useCallback } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Input from "../inputs/Input";
import Heading from "../headings/Heading";
import Button from "../buttons/Button";
import { AiFillGithub } from "react-icons/ai";
import {FcGoogle} from "react-icons/fc"

const LoginModal = () => {

  const router = useRouter()

  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: {errors}, } = useForm<FieldValues>({defaultValues: {
      email: '',
      password: '',
    },})

    // SECTION ON SUBMIT HANDLER
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true)
      signIn("credentials", {
        ...data,
        redirect: false,
      }).then((callback) => {
        setIsLoading(false)

        if(callback?.ok) {
          toast.success("Logged in")
          router.refresh()
          loginModal.onClose()
        }
      })
    }

    // SECTION TOGGLE
    const toggle = useCallback(() => {
      loginModal.onClose()
      registerModal.onOpen()
    }, [loginModal, registerModal])

    // SECTION MODAL BODY
    const bodyContent = (
      <div>
        <Heading title="Welcome Back" subtitle="Login to your Account!" />
        <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
        <Input id="password" label="Password" type="password" disabled={isLoading} register={register} errors={errors} required />
      </div>
    )

    // SECTION MODAL FOOTER
    const footerContent = (
      <div className="flex flex-col gap-4 mt-3">
        <hr />
        <Button type="button" outline label="Continue with Google" icon={FcGoogle} onClick={() => signIn("google")} />
        <Button type="button" outline label="Continue with GitHub" icon={AiFillGithub} onClick={() => signIn("github")} />
        <div className="text-neutral-500 text-center mt-4 font-light">
          <div className="flex flex-row items-center gap-2 justify-center">
            <div className="text-neutral-700">First time using Nextlist?</div>
            <div onClick={toggle} className="text-neutral-800 cursor-pointer hover:underline">Create an Account</div>
          </div>
        </div>
      </div>
    )

  return ( <Modal disabled={isLoading} isOpen={loginModal.isOpen} onClose={loginModal.onClose} onSubmit={handleSubmit(onSubmit)} title="Login" actionLabel="Continue" body={bodyContent} footer={footerContent} /> );
}
 
export default LoginModal;