import "../App.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from "styled-components";
import * as Yup from 'yup';


const StyledForm = styled(Form)`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const InputField = styled(Field)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

// const InputField = styled()

function FormApp() {
  return (
    <>
       <h1>Formik Form Validation</h1>
    <Formik
      initialValues={{ name: '', email: '', password:'' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
      })}
      onSubmit={(values) => {
        // Handle form submission here
        console.log(values);
      }}
    >
      <StyledForm>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <InputField type="text" id="name" name="name" />
          <ErrorMessageStyled name="name" component="div" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <InputField style={{backgroundColor:"grey"}} type="email" id="email" name="email" />
          <ErrorMessageStyled name="email" component="div" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <InputField type="password" id="password" name="password" />
          <ErrorMessageStyled name="password" component="div" />
        </FormGroup>

        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </Formik>
    </>
 
  );
}

export default FormApp;
