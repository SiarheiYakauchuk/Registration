import { FormData } from "../../entity";
import styles from "./InputFile.module.css";

type TProps = {
  formData: FormData;
  handleFormData: (value: FormData) => void;
};

export const InputFile = ({ formData, handleFormData }: TProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    
    handleFormData({ ...formData, file: event.target?.files[0] });
  };

  return (
    <>
      <input
        type="file"
        id="fileInput"
        onChange={handleChange}
        className={styles.fileInput}
        placeholder="Или прикрепите файл"
        disabled={Boolean(formData.message)}
        style={{ display: "none" }}
      />
      <label
        htmlFor="fileInput"
        className={`${styles.label} ${
          formData.message ? styles.disabled : styles.active
        } `}
      >
        или прикрепите файл
      </label>
    </>
  );
};
