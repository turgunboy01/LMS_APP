import { Button } from "../ui/button";
import FormController from "./form-controller";
const CommonForm = ({
  handleSubmit,
  buttonText,
  formController = [],
  formData,
  setFormData,
  isButtonDisabled = false,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormController
        formController={formController}
        formData={formData}
        setFormData={setFormData}
      />
      <Button disabled={isButtonDisabled} type="submit" className="w-full mt-5">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
};

export default CommonForm;
