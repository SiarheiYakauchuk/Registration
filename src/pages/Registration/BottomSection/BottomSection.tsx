import { useState } from "react";
import { FormData } from "../../../entity";
import styles from "./BottomSection.module.css";

type TProps = {
  formData: FormData;
  handleFormData: (value: FormData) => void;
  isButtonActive: boolean;
};

export const BottomSection = ({
  formData,
  handleFormData,
  isButtonActive,
}: TProps) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
    handleFormData({ ...formData, consent: checked });
  };

  const handleSubmit = () => {
    alert("ok");
  };

  return (
    <div className={styles.container}>
      <div className={styles.checkboxContainer}>
        <input
          type="radio"
          name="consent"
          checked={formData.consent}
          className={styles.checkbox}
          onClick={handleClick}
        />
        <div className={styles.consentText}>
          <span className={styles.label}>согласен на обработку моих </span>
          <span className={styles.greenText}>персональных данных</span>
        </div>
      </div>
      <button
        type="submit"
        className={`${styles.submitButton} ${
          isButtonActive ? styles.active : styles.disabled
        }`}
        onClick={handleSubmit}
        disabled={!isButtonActive}
      >
        Отправить
      </button>
    </div>
  );
};
