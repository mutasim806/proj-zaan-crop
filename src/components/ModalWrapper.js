//Styles
import styles from "@/styles/ModalWrapper.module.css";

// Components
import NextImage from "./Image";

// Styles
const {
  dropdownWrapper,
  dropdownHeader,
  headerLeft,
  headerRight,
  text,
  dropdownBody,
  closeImage,
  dropDownFooter,
  headerImg,
  headerActions,
  actionItem,
  activeActionItem,
} = styles;

function ModalWrapper({
  body,
  headerText,
  imgPath,
  footer,
  showModal,
  setShowModal,
  className,
  mouseCoords,
}) {
  const style = {
    position: "absolute",
    top: mouseCoords?.y,
    left: mouseCoords?.x,
  };

  return (
    showModal && (
      <div
        className={`${dropdownWrapper} ${className}`}
        style={mouseCoords && style}
      >
        <div className={`flex-justify-between ${dropdownHeader}`}>
          {showModal !== 'file' &&
            <div className={headerLeft}>
              {imgPath && <NextImage path={imgPath} className={headerImg} />}
              <div className={text}>{headerText}</div>
            </div>
          }

          {/* In Case of File Modal */}

          {showModal === "file" && (
            <div className={headerActions}>
              <div className={actionItem}>
                <NextImage path={"archive-grey-icon"} height='16' width='16' />
                <span>Archive</span>
              </div>
              <div className={`${actionItem} ${activeActionItem}`}>
                <NextImage path={"snooze-white-icon"} height='16' width='16' />
                <span>Snooze</span>
              </div>
            </div>
          )}

          <div className={headerRight}>
            <NextImage
              path={"close-icon-grey"}
              width="16"
              height="16"
              className={closeImage}
              onClick={() => setShowModal(false)}
            />
          </div>
        </div>
        <div className={dropdownBody}>{body}</div>
        {footer && <div className={dropDownFooter}>{footer}</div>}
      </div>
    )
  );
}

export default ModalWrapper;
