import CommonForm from "@/components/common-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInFormController, signUpFormController } from "@/config";
import { AuthContext } from "@/context/auth-context";
import { GraduationCap } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [activeTabs, setActiveTabs] = useState("signin");
  const {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
  } = useContext(AuthContext);

  const handleChange = (value) => {
    setActiveTabs(value);
  };

  const checkIfSignInFormIsValid = () => {
    return (
      signInFormData &&
      signInFormData.userEmail?.trim() !== "" &&
      signInFormData.password?.trim() !== ""
    );
  };

  const checkIfSignUpFormIsValid = () => {
    return (
      signUpFormData &&
      signUpFormData.userName?.trim() !== "" &&
      signUpFormData.userEmail?.trim() !== "" &&
      signUpFormData.password?.trim() !== ""
    );
  };
  console.log(signInFormData, "auth");

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link to={"/"} className="flex justify-center items-center">
          <GraduationCap className="h-8 w-8 mr-4" />
          <span className="font-extrabold text-xl">LMS LEARN</span>
        </Link>
      </header>
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Tabs
          value={activeTabs}
          defaultValue="signin"
          onValueChange={handleChange}
          className="w-full max-w-md"
        >
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card className="p-6 space-y-4">
              <CardHeader>
                <CardTitle>Sign in to your account</CardTitle>
                <CardDescription>
                  Enter your email and password to access your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CommonForm
                  formController={signInFormController}
                  formData={signInFormData}
                  setFormData={setSignInFormData}
                  buttonText="Sign In"
                  isButtonDisabled={!checkIfSignInFormIsValid()}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card className="p-6 space-y-4">
              <CardHeader>
                <CardTitle>Create a new account</CardTitle>
                <CardDescription>
                  Enter your details to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CommonForm
                  formData={signUpFormData}
                  setFormData={setSignUpFormData}
                  formController={signUpFormController}
                  buttonText="Sign Up"
                  isButtonDisabled={!checkIfSignUpFormIsValid()}
                  handleSubmit={handleRegisterUser}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthPage;
