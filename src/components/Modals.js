import { useState } from "react";
import styles from "@/styles/Modals.module.css";

//Components
import ModalWrapper from "./ModalWrapper";
import NextImage from "./Image";
import Cards from "./Cards";

//Utils
import {
  boardCards,
  views,
  sorting,
  listActionItems,
  suggestedTitles,
  tags,
  users,
} from "@/utils/constants";

//Styles
const {
  pinModal,
  pinSearchBar,
  searchFieldWrapper,
  searchIcon,
  searchInput,
  pinModalBodyWrapper,
  pinCarWrapper,
  bottomDetails,
  profile,
  bottomStatus,
  fileModal,
  viewsModal,
  viewsListWrapper,
  viewsListItem,
  listItemActive,
  listLeft,
  circle,
  listText,
  listRight,
  deleteImg,
  mainFilterBodyWrapper,
  filterBodyWrapper,
  buttonWrapper,
  clear,
  apply,
  listWrapper,
  listItem,
  sortModal,
  listAction,
  bodySortModal,
  listActionBodyWrapper,
  listActionItem,
  filterModal,
} = styles;

function Modals({ showModal, setShowModal, mouseCoords }) {
  const [activeListItem, setActiveListItem] = useState(false);

  const setModalValues = (headerText, imgPath, className, body, footer) => {
    return {
      headerText: headerText,
      imgPath: imgPath,
      className: className,
      body: body,
      footer: footer,
    };
  };

  //Modals Design

  const pinnedCardDesign = () => (
    <>
      <div className={pinSearchBar}>
        <div className={searchFieldWrapper}>
          <div className={searchIcon}>
            <NextImage
              path={"search-icon"}
              className={searchIcon}
              height="16"
              width="16"
            />
          </div>
          <input type="text" className={searchInput} placeholder="Search" />
        </div>
      </div>
      <div className={pinModalBodyWrapper}>
        <div className={pinCarWrapper}>
          {boardCards.map((item) =>
            item.tasks.map((element) => (
              <Cards item={element} key={element.id} />
            ))
          )}
        </div>
      </div>
    </>
  );

  const fileCardDesign = () => (
    <>
      <div className={pinSearchBar}>
        <div className={searchFieldWrapper}>
          <div className={searchIcon}>
            <NextImage
              path={"search-icon"}
              className={searchIcon}
              height="16"
              width="16"
            />
          </div>
          <input type="text" className={searchInput} placeholder="Search" />
        </div>
      </div>
      <div className={pinModalBodyWrapper}>
        <div className={pinCarWrapper}>
          {boardCards.map((items) =>
            items.tasks.map((element) => (
              <div key={element.id}>
                <Cards item={element} />
                <div className={bottomDetails}>
                  <div>
                    <NextImage
                      path={"avatar"}
                      className={profile}
                      height="16"
                      width="16"
                    />
                  </div>
                  <span className={bottomStatus}>Snoozed until</span>
                  <span>Oct 24 at 10:00 PM</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );

  const viewModalDesign = () => (
    <div className={viewsListWrapper}>
      {views.map((item) => {
        return (
          <div
            className={`flex-justify-between ${viewsListItem} ${
              activeListItem === item.id ? listItemActive : ""
            }`}
            key={item.id}
            onClick={() => setActiveListItem(item.id)}
          >
            <div className={listLeft}>
              <div className={circle}></div>
              <div className={listText}>{item.text}</div>
            </div>
            <div className={listRight}>
              <NextImage
                path={"delete-icon"}
                height="16"
                width="16"
                className={deleteImg}
              />
            </div>
          </div>
        );
      })}
    </div>
  );

  const filtersModalDesign = () => (
    <div className={mainFilterBodyWrapper}>
      <div className={filterBodyWrapper}>
        <div className="checkbox-wrapper">
          <div className="title">Project</div>
          {suggestedTitles?.map((item) => (
            <label className="checkbox-container" key={item.id}>
              <input type="checkbox" />
              <span className="checkmark"></span>
              <div className="circle"></div>
              <div className="data">{item.text}</div>
            </label>
          ))}

          <div className="show-all">Show All</div>
        </div>
        <div className="checkbox-wrapper">
          <div className="title">Tags</div>
          {tags?.map((item) => (
            <label className="checkbox-container" key={item.id}>
              <input type="checkbox" />
              <span className="checkmark"></span>
              <div className="card-label">{item.text}</div>
            </label>
          ))}

          <div className="show-all">Show All</div>
        </div>
        <div className="checkbox-wrapper">
          <div className="title">Assigned To</div>
          {users?.map((item) => (
            <label className="checkbox-container" key={item.id}>
              <input type="checkbox" />
              <span className="checkmark"></span>
              <div className="profile">
                <NextImage path={"avatar"} height="24" width="24" />
              </div>
              <div className="name">{item.name}</div>
            </label>
          ))}

          <div className="show-all">Show All</div>
        </div>
      </div>
    </div>
  );

  const sortModalDesign = () => (
    <div className={listWrapper}>
      {sorting.map((item) => {
        return (
          <div
            className={`${listItem} ${
              activeListItem === item.id ? listItemActive : ""
            }`}
            key={item.id}
            onClick={() => setActiveListItem(item.id)}
          >
            {item.text}
          </div>
        );
      })}
    </div>
  );

  const listActionModal = () => (
    <div className={listActionBodyWrapper}>
      {listActionItems.map((item) => {
        return (
          <div className={listActionItem} key={item.id}>
            {item.text}
          </div>
        );
      })}
    </div>
  );

  const sortByModal = () => (
    <div>
      {sorting.map((item) => {
        return (
          <div
            className={`${listItem} ${
              activeListItem === item.id ? listItemActive : ""
            }`}
            key={item.id}
            onClick={() => setActiveListItem(item.id)}
          >
            {item.text}
          </div>
        );
      })}
    </div>
  );

  //Modal Wrapper Values
  const ModalWrapperValues = {
    pin: setModalValues(
      "Pinned Card",
      "pin-icon",
      pinModal,
      pinnedCardDesign()
    ),
    file: setModalValues("Files Card", "pin-icon", fileModal, fileCardDesign()),
    views: setModalValues("Views", "save-icon", viewsModal, viewModalDesign()),
    filters: setModalValues(
      "Filter by",
      "",
      filterModal,
      filtersModalDesign(),
      <>
        <div className={buttonWrapper}>
          <div className={clear}>Clear</div>
          <div className={apply}>Apply</div>
        </div>
      </>
    ),
    sort: setModalValues("Sort by", "sort-icon", sortModal, sortModalDesign()),

    actionList: setModalValues(
      "List Actions",
      "",
      listAction,
      listActionModal()
    ),

    sortby: setModalValues(
      "Sort by",
      "sort-icon",
      bodySortModal,
      sortByModal()
    ),
  };

  const { headerText, imgPath, className, body, footer } =
    showModal && ModalWrapperValues[showModal];

  return (
    <>
      <ModalWrapper
        headerText={headerText && headerText}
        imgPath={imgPath && imgPath}
        showModal={showModal}
        className={className && className}
        setShowModal={setShowModal}
        body={body && body}
        footer={footer && footer}
        mouseCoords={mouseCoords && mouseCoords}
      />
    </>
  );
}

export default Modals;
