import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const FormController = ({
  formController = [],
  formData = {},
  setFormData,
}) => {
  // Umumiy qiymatni o'zgartirish funksiyasi
  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Turga qarab komponent yaratish
  const renderComponentByType = ({
    name,
    placeholder,
    type,
    options,
    label,
    componentType,
  }) => {
    const currentValue = formData[name] || ""; // Undefined holatlar uchun bo'sh qiymat

    switch (componentType) {
      case "input":
        return (
          <Input
            placeholder={placeholder}
            id={name}
            name={name}
            type={type || "text"}
            value={currentValue}
            onChange={(e) => handleInputChange(name, e.target.value)}
          />
        );

      case "select":
        return (
          <Select
            value={currentValue}
            onValueChange={(value) => handleInputChange(name, value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "textarea":
        return (
          <Textarea
            id={name}
            name={name}
            placeholder={placeholder}
            value={currentValue}
            onChange={(e) => handleInputChange(name, e.target.value)}
          />
        );

      default:
        return (
          <p className="text-red-500">
            Noto'g'ri komponent turi: {componentType}
          </p>
        );
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {formController.map((controlItem) => (
        <div key={controlItem.name} className="flex flex-col">
          <Label htmlFor={controlItem.name}>{controlItem.label}</Label>
          {renderComponentByType(controlItem)}
        </div>
      ))}
    </div>
  );
};

export default FormController;
