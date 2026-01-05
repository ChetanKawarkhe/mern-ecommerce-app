import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const initialState = {
  email: '',
  password: '',
}

function AuthLogin() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialState)
  function onSubmit(event){
    event.preventDefault()

    dispatch(loginUser(formData)).then((data)=> {
      if(data?.payload?.success){
        toast.success(data?.payload?.message)
      } else{
        toast.error(data?.payload?.message)
      }
      console.log(data)
    })
  }


  return(
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1  className="text-3xl font-bold tracking-tight text-foreground">Sign In to Your Account</h1>
        <p>Don't have an account?
          <Link className="font-medum text-primary hover:underline ml-2" to='/auth/register'>Register</Link>
        </p>
      </div>
      <CommonForm  
        formControls={loginFormControls}
        buttonText={'Sign In'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default AuthLogin;
