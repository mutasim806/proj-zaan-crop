import { useState } from "react";

//Components
import NextImage from "./Image";
import Modals from "./Modals";

//Constants
import { members } from "@/utils/constants";

//Styles
import styles from "@/styles/Header.module.css";

const {
  topHeaderSection,
  headerSelectOption,
  leftAction,
  profileData,
  number,
  rightAction,
  topHeaderActionButtons,
  headerActionButtonsWrapper,
  addBtn,
  searchBar,
  headerProfile,
  projectActionSection,
  titleSection,
  titleActions,
  titleActionButtons,
  projectActionCenter,
  num,
  actionsTextButton,
  text,
  membersNumber,
  headerRightWrapper,
  headerLeftWrapper,
} = styles;

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  const onHandleClick = (event, type, reduceValue) => {
    setShowModal(type);
    setMouseCoords({ x: event.clientX - reduceValue, y: event.clientY + 25 });
  };

  return (
    <>
      <section className={`flex-align-center ${topHeaderSection}`}>
        <div className={`flex-align-center ${headerSelectOption}`}>
          <div className={`flex-align-center ${leftAction}`}>
            <div className={`flex-align-center ${profileData}`}>
              <NextImage path={"avatar"} width="30" height="30" />
              <div className={`flex-justify-center ${number}`}>15</div>
            </div>
            <div className={`flex-align-center ${profileData}`}>
              <NextImage path={"avatar"} width="30" height="30" />
              <div className={`flex-justify-center ${number} violet`}>11</div>
            </div>
          </div>
          <div className={`flex-justify-center ${rightAction}`}>
            <NextImage path={"chevron-down"} width="22" height="22" />
          </div>
        </div>
        <div className={`flex-align-center ${headerActionButtonsWrapper}`}>
          <div className={`flex-align-center ${headerLeftWrapper}`}>
            <div className={`flex-justify-center ${topHeaderActionButtons}`}>
              <NextImage
                className="opacity-8"
                path={"bulb-icon"}
                width="24"
                height="24"
              />
            </div>
            <div className={`flex-justify-center ${addBtn}`}>
              <NextImage path={"plus-icon"} width="22" height="22" />
            </div>
            <div className={searchBar}>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  <NextImage path={"search-icon"} width="20" height="20" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="search"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
          </div>
          <div className={`flex-align-center ${headerRightWrapper}`}>
            <div className={`flex-justify-center ${topHeaderActionButtons}`}>
              <NextImage
                className="opacity-8"
                path={"speaker-icon"}
                width="24"
                height="24"
              />
            </div>
            <div className={`flex-justify-center ${topHeaderActionButtons}`}>
              <NextImage
                className="opacity-8"
                path={"calendar-icon"}
                width="24"
                height="24"
              />
            </div>
            <div className={`flex-justify-center ${topHeaderActionButtons}`}>
              <NextImage
                className="opacity-8"
                path={"message-alert"}
                width="24"
                height="24"
              />
            </div>
            <div className={`flex-justify-center ${headerProfile}`}>
              <NextImage path={"avatar"} height="38" width="38" />
            </div>
          </div>
        </div>
      </section>

      <section className={`flex-align-center ${projectActionSection}`}>
        <div className={`flex-align-center ${titleSection}`}>
          <h2>Workflow</h2>
          <div className={`flex-align-center ${titleActions}`}>
            <div className={`flex-justify-center ${titleActionButtons}`}>
              <NextImage path={"workflow-icon-white"} height="18" width="18" />
            </div>
            <div className={`flex-justify-center ${titleActionButtons}`}>
              <NextImage
                className="opacity-8"
                path={"vector-icon"}
                height="18"
                width="18"
              />
            </div>
            <div className={`flex-justify-center ${titleActionButtons}`}>
              <NextImage
                className="opacity-8"
                path={"code-icon"}
                height="18"
                width="18"
              />
            </div>
            <div className={`flex-justify-center ${titleActionButtons}`}>
              <NextImage
                className="opacity-8"
                path={"speaker-small-icon"}
                height="18"
                width="18"
              />
            </div>
          </div>
        </div>
        <div className={`flex-justify-between ${projectActionCenter}`}>
          <div className="flex-align-center">
            {members.map((item, index) => {
              return (
                <div
                  className={`flex-align-center ${membersNumber}`}
                  key={index}
                >
                  <NextImage path={item.img} width="30" height="30" />
                  <div className={`flex-justify-center ${num}`}>
                    {index + 1}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex-align-center">
            <div
              className={`flex-justify-center ${topHeaderActionButtons}`}
              onClick={(e) => onHandleClick(e, "pin", 285)}
            >
              <NextImage path={"pin-icon"} height="20" width="20" />
            </div>
            <div className={`flex-justify-center ${topHeaderActionButtons}`}>
              <NextImage
                path={"file-icon"}
                width="22"
                height="22"
                onClick={(e) => onHandleClick(e, 'file', 280)}
              />
            </div>
            <div
              className={`flex-justify-center ${actionsTextButton}`}
              onClick={(e) => onHandleClick(e,'views', 330)}
            >
              <NextImage
                path={"save-icon"}
                className="opacity-7"
                width="16"
                height="16"
              />
              <div className={text}>Views</div>
            </div>
            <div
              className={`flex-justify-center ${actionsTextButton}`}
              onClick={(e) => onHandleClick(e, 'filters', 250)}
            >
              <NextImage path={"filter-icon"} width="16" height="16" />
              <div className={text}>Filters</div>
            </div>
            <div
              className={`flex-justify-center ${actionsTextButton}`}
              onClick={(e) => onHandleClick(e, 'sort', 200)}
            >
              <NextImage path={"sort-icon"} width="16" height="16" />
              <div className={text}>Sort by</div>
            </div>
          </div>
        </div>
      </section>
      <Modals
        showModal={showModal}
        setShowModal={setShowModal}
        mouseCoords={mouseCoords}
      />
    </>
  );
}

export default Header;
