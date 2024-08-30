import { useEffect, useState } from "react";
import { FormData } from "../../entity";
import { TextArea } from "../../components/TextArea/TextArea";
import { BottomSection } from "./BottomSection/BottomSection";
import { InputRowsSection } from "./InputRowsSection/InputRowsSection";
import { InputFile } from "../../components/InputFile/InputFile";
import styles from "./Registration.module.css";

export const Registration = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
    file: new File([], ""),
    consent: false,
  });

  const [isButtonActive, setIsButtonActive] = useState(false);

  const validateForm = (obj: FormData): boolean => {
    const allOtherFieldsFilled =
      Boolean(obj.name) &&
      Boolean(obj.company) &&
      Boolean(obj.phone) &&
      Boolean(obj.email) &&
      obj.consent;

    const messageOrFileFilled = Boolean(obj.message) || Boolean(obj.file.name);

    return allOtherFieldsFilled && messageOrFileFilled;
  };

  useEffect(() => {
    setIsButtonActive(validateForm(formData));
  }, [formData]);

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.title}>Сообщение в свободной форме</h2>
        <InputRowsSection formData={formData} handleFormData={setFormData} />
        <TextArea
          handleFormdata={setFormData}
          formData={formData}
          name="message"
          placeholder={
            !formData.file.name
              ? "Напишите текст обращения"
              : formData.file.name
          }
          value={formData.message}
          className={styles.textarea}
          disabled={Boolean(formData.file.name)}
        />
        <InputFile formData={formData} handleFormData={setFormData} />
        <BottomSection
          formData={formData}
          handleFormData={setFormData}
          isButtonActive={isButtonActive}
        />
      </form>
    </div>
  );
};
