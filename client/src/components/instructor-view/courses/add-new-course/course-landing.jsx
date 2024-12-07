import FormController from "@/components/common-form/form-controller";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courseLandingPageFromControls } from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import React, { useContext } from "react";

const CourseLandingPage = () => {
  const { courseLandingFormData, setCourseLandingFormData } =
    useContext(InstructorContext);

  console.log(courseLandingFormData);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Landing Page</CardTitle>
      </CardHeader>
      <CardContent>
        <FormController
          formController={courseLandingPageFromControls}
          formData={courseLandingFormData}
          setFormData={setCourseLandingFormData}
        />
      </CardContent>
    </Card>
  );
};

export default CourseLandingPage;
