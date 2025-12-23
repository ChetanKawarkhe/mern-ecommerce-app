import CommonForm from "@/components/common/form";
import { regitserFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner";

const initialState = {
  userName: '',
  email: '',
  password: '',
}

function AuthRegister() {

  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(event){
    event.preventDefault()
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success)
        toast(data?.payload?.message, {
          description: '',
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
      navigate("/auth/login");
      console.log(data);
    });
  }

  return(
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1  className="text-3xl font-bold tracking-tight text-foreground">Create new account</h1>
        <p>Already have an account
          <Link className="font-medum text-primary hover:underline ml-2" to='/auth/login'>Login</Link>
        </p>
      </div>
      <CommonForm  
        formControls={regitserFormControls}
        buttonText={'Sign Up'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default AuthRegister;
