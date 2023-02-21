//Components
import NextImage from "./Image";

//Styles
import styles from "@/styles/Cards.module.css";

const {
  boardSubCard,
  boardSubCardTop,
  left,
  circle,
  right,
  mainTitle,
  labelsWrapper,
  label,
  statusActions,
  status,
  number,
  boardSubCardBottom,
  created,
} = styles;

function Cards({ item }) {
  return (
    <div className={boardSubCard}>
      <div className={`flex-justify-between ${boardSubCardTop}`}>
        <div className={`flex-align-center ${left}`}>
          <div className={circle}></div>
          <h4>{item.project_name}</h4>
        </div>
        <div className={right}>
          <NextImage path={"star-user-icon"} width="14" height="14" />
        </div>
      </div>
      <div className={mainTitle}>{item.description}</div>
      <div className={`row-flex ${labelsWrapper}`}>
        {item?.tags.map((tag, index) => (
          <div className={label} key={index} >{tag}</div>
        ))}
      </div>
      <div className={`flex-align-center ${statusActions}`}>
        <div className={`flex-align-center ${status}`}>
          <NextImage path={"description-icon"} width="14" height="14" />
        </div>
        <div className={`flex-align-center ${status}`}>
          <NextImage path={"status-messag-icon"} width="14" height="14" />
          <div className={number}>{item.messages}</div>
        </div>
        <div className={`flex-align-center ${styles.status}`}>
          <NextImage path={"checklist-icon"} width="14" height="14" />
          <div className={number}>{item.check_list}</div>
        </div>
        <div className={`flex-align-center ${status}`}>
          <NextImage path={"link-icon"} width="14" height="14" />
        </div>
      </div>
      <div className={`flex-justify-between ${boardSubCardBottom}`}>
        <div className={`flex-align-center ${left}`}>
          <div className={created}>Created {item.days} days ago</div>
        </div>
        <div className={right}>
          <NextImage path={"avatar"} height="18" width="18" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
