import { FormData } from "../../../entity";

type TProps = {
  formData: FormData;
  handleFormData: (value: FormData) => void;
};

export const InputRowsSection = ({ formData, handleFormData }: TProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    handleFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Ваше имя"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="company"
        placeholder="Компания"
        value={formData.company}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Телефон"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Электронная почта"
        value={formData.email}
        onChange={handleChange}
      />
    </>
  );
};
