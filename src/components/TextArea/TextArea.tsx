import { FormData } from "../../entity";
import styles from "./TextArea.module.css";

type TProps = {
  formData: FormData;
  handleFormdata: (value: FormData) => void;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({
  handleFormdata,
  formData,
  ...textAreaProps
}: TProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    handleFormdata({ ...formData, [name]: value });
  };

  return (
    <div className={styles.container}>
      <textarea
        {...textAreaProps}
        onChange={handleChange}
        className={styles.textArea}
      />
    </div>
  );
};
