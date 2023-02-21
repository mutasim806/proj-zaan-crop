import { useState } from "react";

//Components
import NextImage from "./Image";
import SelectField from "@/components/SelectField";

//Styles
import styles from "@/styles/CardTitle.module.css";

//Constants
import { projects } from "@/utils/constants";

const {
  addedCard,
  addedCardTitle,
  title,
  textFieldWrapper,
  fieldRow,
  selectOptions,
  addBtn,
  text,
} = styles;

function CardTitle({ onClick, showSuggestions, mouseCoords }) {
  const [addCard, setAddCard] = useState(false);

  return (
    <>
      {addCard ? (
        <div className={addedCard}>
          <div className={`flex-justify-between ${addedCardTitle}`}>
            <div className={title}>Card title</div>
            <NextImage
              path={"close-icon"}
              onClick={() => setAddCard(false)}
              width="14"
              height="14"
            />
          </div>
          <div className={textFieldWrapper}>
            <textarea className="form-control"></textarea>
          </div>
          <div className={`flex-align-center ${fieldRow}`}>
            <div className={selectOptions}>
              <SelectField
                options={projects}
                onClick={onClick}
                showSuggestions={showSuggestions}
                mouseCoords={mouseCoords}
              />
            </div>
            <div className={`flex-justify-center ${addBtn}`}>Add</div>
          </div>
        </div>
      ) : (
        <div
          className={`flex-align-center ${styles.addCard}`}
          onClick={() => setAddCard(true)}
        >
          <NextImage path={"plus-icon-blue"} width="18" height="18" />
          <div className={text}>Add Card</div>
        </div>
      )}
    </>
  );
}

export default CardTitle;
