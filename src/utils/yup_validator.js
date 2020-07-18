//import { string, object } from 'yup'; // for only what you need
import * as yup from 'yup'; // for everything

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const individualSignUpValidator = yup.object().shape({
    Individuals_Name: yup.string().required("Name is required.").min(3, "Name must be at least 3 characters."),
    Individuals_Email: yup.string("Email must be a valid email.").email().required("Email is required."),
});
export const individualSignUpActivationValidator = yup.object().shape({
    Individuals_ContactNumber: yup.string().matches(phoneRegExp, "Contact number is not valid.").required("Contact number is required."),
    Individuals_Password: yup.string().required("Password is required.").min(6, "Password must be at least 6 characters."),
    Individuals_PasswordConfirm: yup.string().oneOf([yup.ref("Individuals_Password")], "Both password need to match."),
    //Individuals_Image: yup.string().required(),
});
export const individualLoginValidator = yup.object().shape({
    Individuals_Email: yup.string().email("Email must be a valid email.").required("Email is required."),
    Individuals_Password: yup.string().required("Password is required.").min(6, "Password must be at least 6 characters."),
})




export const organizationSignUpValidator = yup.object().shape({
    Organizations_Name: yup.string().required("Name is required.").min(3, "Name must be at least 3 characters."),
    Organizations_Email: yup.string().email("Email must be a valid email.").required("Email is required."),
});
export const organizationSignUpActivationValidator = yup.object().shape({
    Organizations_ContactNumber: yup.string().matches(phoneRegExp, "Contact number is not valid.").required("Contact number is required."),
    Organizations_Password: yup.string().required("Password is required.").min(6, "Password must be at least 6 characters."),
    Organizations_PasswordConfirm: yup.string().oneOf([yup.ref("Organizations_Password")], "Both password need to match."),
    //Organizations_Image: yup.string().required(),
});
export const organizationLoginValidator = yup.object().shape({
    Organizations_Email: yup.string().email("Email must be a valid email.").required("Email is required."),
    Organizations_Password: yup.string().required("Password is required.").min(6, "Password must be at least 6 characters."),
})