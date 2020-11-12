import * as yup from 'yup';

const schema = yup.object().shape({
    first_name: yup
      .string()
      .required("Name is required"),
    email: yup
        .string()
        .required("Email address is required"),
    password: yup
      .string()
      .min(7, 'Minimum password length required is 7 characters')
      .required("Password is required"),
    termsOfService: yup
      .boolean()
      .oneOf([true], "To continue, you must accept Terms of Service"),
    role: yup
      .string()
      .oneOf(['webDeveloper', 'dataScientist', 'uiUxDesigner', 'marketingPro'], "You must choose a role"),
    // we are done with checkboxes
  });

  export default schema