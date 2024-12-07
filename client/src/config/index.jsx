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

export const languageOptions = [
  { id: "english", label: "English" },
  { id: "spanish", label: "Spanish" },
  { id: "french", label: "French" },
  { id: "german", label: "German" },
  { id: "chinese", label: "Chinese" },
  { id: "japanese", label: "Japanese" },
  { id: "korean", label: "Korean" },
  { id: "portuguese", label: "Portuguese" },
  { id: "arabic", label: "Arabic" },
  { id: "russian", label: "Russian" },
];
export const courseLevelOptions = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" }, // Noto'g'ri "advenced" o'rniga to'g'rilandi
];
export const courseCategories = [
  { id: "web-developer", label: "Web Developer" },
  { id: "backend-developer", label: "Backend Developer" },
  { id: "data-science", label: "Data Science" },
  { id: "machine-learning", label: "Machine-Learning" },
  { id: "artificial-intelligence", label: "Artificial-Intelligence" },
  { id: "cloud-computing", label: "Cloud Computing" },
  { id: "cyber-security", label: "Cyber Security" },
  { id: "mobile-development", label: "Mobile Development" },
  { id: "game-development", label: "Game Development" },
  { id: "software-engineering", label: "Software Engineering" },
];

export const courseLandingPageFromControls = [
  {
    name: "title",
    label: "Title",
    componentType: "input",
    type: "text",
    placeholder: "Enter course title",
  },
  {
    name: "category",
    label: "Category",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: courseCategories,
  },
  {
    name: "level",
    label: "Level",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: courseLevelOptions,
  },
  {
    name: "primaryLanguage",
    label: "Primary Language",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: languageOptions,
  },
  {
    name: "subtitle",
    label: "Subtitle",
    componentType: "input",
    type: "text",
    placeholder: "Enter course subtitle",
  },
  {
    name: "description",
    label: "Description",
    componentType: "input",
    type: "text",
    placeholder: "Enter course description",
  },
  {
    name: "pricing",
    label: "Pricing",
    componentType: "input",
    type: "number",
    placeholder: "Enter course pricing",
  },
  {
    name: "objectives",
    label: "Objectives",
    componentType: "textarea",
    placeholder: "Enter course objectives",
  },
  {
    name: "welcomeMessage",
    label: "Welcome Message",
    componentType: "textarea",
    placeholder: "Welcome message for students",
  },
];

export const courseLandingInitialFormData = {
  title: "",
  category: "", // Select uchun boshlang'ich qiymat
  level: "", // Select uchun boshlang'ich qiymat
  primaryLanguage: "", // Select uchun boshlang'ich qiymat
  subtitle: "",
  description: "",
  pricing: "",
  objectives: "",
  welcomeMessage: "",
};
