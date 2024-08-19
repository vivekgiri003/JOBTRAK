import { FormRow, Logo, SubmitButton } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Form, redirect, Link } from 'react-router-dom';
import customFetch from "../utils/customFetch";
import {toast} from 'react-toastify';

export const action = async ({request}) =>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try{
    await customFetch.post('/auth/register', data)
    toast.success('User registered successfully')
    return redirect('/login');
  } catch(error){
    toast.error(error?.response?.data?.msg)
    return error;
  }

};

const Register = () => {

  return (
    <Wrapper>
      <Form method = 'post' className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" labelText='name'  />
        <FormRow type="text" name="lastName" labelText='last name' />
        <FormRow type="text" name="location" labelText='location' />
        <FormRow type="email" name="email" labelText='email'  />
        <FormRow type="password" name="password" labelText='password'  />

        <SubmitButton formBtn />
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
