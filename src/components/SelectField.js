// Components
import NextImage from "./Image";

// Styles
import styles from "@/styles/SelectProject.module.css";

const {
  titleSuggestionWrapper,
  titleSuggestionItem,
  suggestionTitle,
  circle,
  activeTitleSuggestionItem,
  selectInput,
  inputWrapper,
  imageWrapper,
} = styles;

function SelectField({ options, showSuggestions, onClick, mouseCoords }) {
  const style = {
    position: "absolute",
    top: mouseCoords?.y,
    left: mouseCoords?.x,
  };

  return (
    <div className="selectFieldWrapper">
      <div className={inputWrapper} onClick={onClick}>
        <input
          type="text"
          className={selectInput}
          placeholder="Select Project"
        />
        <div className={imageWrapper}>
          <NextImage
            path={"chevron-down"}
            className="opacity-7"
            height="12"
            width="12"
          />
        </div>
      </div>
      {showSuggestions && (
        <div className={titleSuggestionWrapper} style={style}>
          {options?.map((item, index) => (
            <div
              className={`${titleSuggestionItem} ${
                index === 1 ? activeTitleSuggestionItem : ""
              }`}
              key={index}
            >
              <div className={circle}></div>
              <div className={suggestionTitle}>{item.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectField;
