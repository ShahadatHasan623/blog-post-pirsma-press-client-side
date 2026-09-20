"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { loginAction } from '../_actions/actionsLogin'
import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'


const LoginFrom = () => {
   const [state,action,pending]=useActionState(loginAction,false)

   useEffect(()=>{
      if(!state)return;
      if(state.success){
         toast.success(state.message || "Login Successful")
      }
      if(!state.success){
         toast.warning(state.message || "Login Faild")
      }
   },[state])
  return (
   <form action={action} className="space-y-4">
      <Card className="p-5 space-y-1">
         <Input  name="email" type="email" placeholder="Enter Your Email" required />
         <Input name="password" type="password" placeholder="Enter Your Password" required />
         <Button type="submit">
            {pending? "Submetting...":"Login"}
         </Button>
      </Card>
   </form>
  )
}

export default LoginFrom