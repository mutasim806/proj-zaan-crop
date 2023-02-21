import { useState } from "react";

//Components
import NextImage from "@/components/Image";
import Cards from "@/components/Cards";
import CardTitle from "@/components/CardTitle";
import Modals from "@/components/Modals";

//Constants
import { boardCards } from "@/utils/constants";

//Styles
import styles from "@/styles/Home.module.css";

const {
  contentBodyWrapper,
  boradRowWrapper,
  boardCardWrapper,
  boardCard,
  boardTitleActions,
  titleWrapper,
  imageWrapper,
  menuIcon,
  sideActions,
  action,
  violet,
  boardTickets,
} = styles;

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [showTitleSuggestion, setShowTitleSuggestion] = useState(false);

  const onHandleClick = (event, type, reduceValue) => {
    setShowModal(type);
    setMouseCoords({ x: event.clientX - reduceValue, y: event.clientY + 10 });
  };

  function handleProjectModal (event) {
    setShowTitleSuggestion(!showTitleSuggestion)
    setMouseCoords({ x: event.clientX - 55, y: event.clientY - 180 });
  }

  return (
    <>
      <div className={contentBodyWrapper}>
        <div className={`row ${boradRowWrapper}`}>
          {boardCards.map((item, index) => {
            return (
              <div className={boardCardWrapper} key={index}>
                <div className={boardCard}>
                  <div className={`flex-justify-between ${boardTitleActions}`}>
                    <div className={`flex-justify-between ${titleWrapper}`}>
                      <h3>
                        {item.title} <span>({item.tickets})</span>
                      </h3>
                      <div className={imageWrapper}>
                        <NextImage
                          path={"filter-icon"}
                          width="14"
                          height="14"
                        />
                        <NextImage
                          path={"sort-icon"}
                          width="14"
                          height="14"
                          onClick={(e) => onHandleClick(e, 'sortby', 220)}
                        />
                      </div>
                    </div>
                    <div className={menuIcon}>
                      <NextImage
                        path={"menu-dots"}
                        width="18"
                        height="18"
                        onClick={(e) => onHandleClick(e, 'actionList', 250)}
                      />
                    </div>
                  </div>

                  {/* Board Tickets Design */}

                  <div className={boardTickets}>
                    {item.tasks?.map((element) => (
                      <Cards item={element} key={element.id} />
                    ))}
                  </div>

                  {/* Card Title Component */}

                  <CardTitle
                    showSuggestions={showTitleSuggestion}
                    onClick={handleProjectModal}
                    mouseCoords={mouseCoords}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <Modals showModal={showModal} setShowModal={setShowModal} mouseCoords={mouseCoords} />
        </div>

      </div>

      <div className={sideActions}>
        <div className={`flex-justify-center ${action}`}>
          <NextImage path={"checklist-white-icon"} width="22" height="22" />
        </div>
        <div className={`flex-justify-center ${action} ${violet}`}>
          <NextImage path={"list-white-icon"} width="22" height="22" />
        </div>
      </div>
    </>
  );
}

export default Home
