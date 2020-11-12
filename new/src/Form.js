
import React from 'react';
// import axios from 'axios';
// import * as yup from 'yup';
// import styled from 'styled-components';


function Form(props) {
    const { values, submit, inputChange, checkboxChange, disabled } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit();
    }

    // const onChange = (evt) => {
    //     const { name, value, checked, type } = evt.target;
    //     const correctValue = type === 'checkbox' ? checked : value;
    //     change(name, correctValue);
    // };
    const onInputChange = (evt) => {
        const { name, value} = evt.target
        inputChange(name, value);
    };

    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked);
    }

  

    return(
        <form onSubmit={onSubmit}>
            <div>
                <div>
                    <label>Name:&nbsp;
                        <input
                        value={values.first_name}
                        onChange={onInputChange}
                        name='first_name'
                        type='text'
                        />
                
                    </label>
                </div>

                <div>
                    <label>Email:&nbsp;
                        <input
                        value={values.email}
                        onChange={onInputChange}
                        name='email'
                        type='email'
                        />
                
                    </label>
                </div>

                <div>
                    <label>Password:&nbsp;
                        <input
                        
                        type='password'
                        name='password'
                        onChange={onInputChange}
                        value={values.password}
                        />
                        </label>
                </div>

                <div>
                    <label>Do you agree to the terms of service?&nbsp;
                        <input
                        type='checkbox'
                        name='termsOfService'
                        onChange={onCheckboxChange}
                        checked={values.termsOfService}
                        />
                        </label>
                </div>

                <div>
                    <label>Role:&nbsp;
                        <select
                        name='role'
                        onChange={onInputChange}
                        value={values.role}>
                            <option value=''> -- Select an option -- </option>
                            <option value='webDeveloper'>Web Developer</option>
                            <option value='dataScientist'>Data Scientist</option>
                            <option value='uiUxDesigner'>UI/UX Designer</option>
                            <option value='marketingPro'>Marketing Professional</option>
                        </select>
                        </label>
                </div>

                <div>
                    <button disabled={disabled}>Submit</button>
                </div>

            </div>
        </form>
    )
}

export default Form;