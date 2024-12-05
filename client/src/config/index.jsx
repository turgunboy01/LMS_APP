export const signUpFormController = [
  {
    name: "userName", // Moslik tuzatildi
    label: "User Name",
    placeholder: "Enter your User Name",
    type: "text",
    componentType: "input",
  },
  {
    name: "userEmail", // Moslik tuzatildi
    label: "User Email",
    placeholder: "Enter your User Email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "User Password",
    placeholder: "Enter your user Password",
    type: "password",
    componentType: "input",
  },
];

export const signInFormController = [
  {
    name: "userEmail", // Moslik tuzatildi
    label: "User Email",
    placeholder: "Enter your user Email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "User Password",
    placeholder: "Enter your user Password",
    type: "password",
    componentType: "input",
  },
];

export const initialSignInFormData = {
  userEmail: "",
  password: "",
};

export const initialSignUpFormData = {
  userName: "",
  userEmail: "",
  password: "",
};
