
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import schema from '../src/validation/formSchema';
import * as yup from 'yup';
import User from './User';
import Form from './Form';
import './App.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
  text-align: left;

`


const initialFormValues = {
  first_name: '',
  email: '',
  password: '',
  termsOfService: '',
  role: {
    webDeveloper: false,
    dataScientist: false,
    uiUxDesigner: false,
    marketingPro: false,
  }
};

const initialFormErrors = {
  first_name: '',
  email: '',
  password: '',
  termsOfService: '',
  role: '',
};

const initialUsers = [];
const initialDisabled = true;


function App() {
    const [users, setUsers] = useState(initialUsers)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
  
    const getUsers = () => {
      axios.get('https://reqres.in/api/users')
        .then(response => {
          let array = response.data.data
          setUsers([...users, ...array])
        })
        .catch(error => {
          console.log(error, 'error!')
        })
    }
  
    const postNewUser = newUser => {
      axios.post('https://reqres.in/api/users', newUser)
        .then(response => {
          setUsers([...users, response.data])
          console.log(users)
        })
        .catch(error => {
          console.log(error, 'error')
        })
        .finally(() => {
          setFormValues(initialFormValues)
        })
    }
  
    const inputChange = (name, value) => {
      yup
        .reach(schema, name)
        .validate(value)
        .then(success => {
          setFormErrors({
            ...formErrors,
            [name]: "",
            })
          })
        .catch(error => {
          setFormErrors({
            ...formErrors, 
            [name]: error.errors[0],
          })
        })
  
      setFormValues({
        ...formValues,
        [name]: value,
      })
    }
  
    const checkboxChange = (name, checked) => {
      setFormValues({
        ...formValues,
        [name]: checked,
      })
    }
  
    const formSubmit = evt => {
      const newUser = {
        first_name: formValues.first_name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        termsOfService: formValues.termsOfService,
        role: formValues.role,
      }
  
      console.log(newUser)
      
      postNewUser(newUser);
    }
  
    useEffect(() => {
      getUsers()
    }, [])
  
    useEffect(() => {
      schema.isValid(formValues)
        .then(valid => {
          setDisabled(!valid);
        })
    }, [formValues])
  
    return (
      <StyledDiv>
        <header className="App-header"><h1>User Onboarding</h1>
        <Form 
        checkboxChange={checkboxChange}
        inputChange={inputChange}
        submit={formSubmit}
        values={formValues}
        disabled={disabled}
        errors={formErrors}
        /> 
  
        {
          users.map(abc => {
            return (
            <User key={abc.name} user={abc}/>
            )
          })
        }
  
        </header>
      </StyledDiv>
    );
  }

export default App;
