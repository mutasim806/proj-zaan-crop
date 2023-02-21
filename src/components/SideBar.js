import styles from "@/styles/SideBar.module.css";
import { useState } from "react";

//Components
import NextImage from "./Image";

//Styles
const {
  mobileSideToggle,
  toggleIcon,
  sidebarSection,
  sidebarTop,
  logo,
  logoText,
  downImg,
  toggleImg,
  arrows,
  closeSidebar,
  menuItemsWrapper,
  menuItem,
  menuText,
  toggledSidebar,
  left0,
  activeMenu
} = styles;

//Constants
import { sidebarItems } from "@/utils/constants";

function SideBar() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [fixedSidebar, setFixedSidebar] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(2);

  return (
    <>
      <div
        className={`${mobileSideToggle}`}
        onClick={() => setFixedSidebar(true)}
      >
        <div className={`flex-align-center ${toggleIcon}`}>
          <NextImage path={"toggle"} width="22" height="22" />
        </div>
      </div>

      <section
        className={`${sidebarSection} ${sidebarToggle ? toggledSidebar : ""} ${fixedSidebar ? left0 : ""
          } `}
      >
        <div className={`row-flex flex-justify-between ${sidebarTop}`}>
          <div className={`flex-align-center ${logo}`}>
            <NextImage
              path={"logo-dot"}
              onClick={() => setSidebarToggle(!sidebarToggle)}
              width="14"
              height="14"
            />
            <div className={`${logoText} ${sidebarToggle ? "opacity-0" : ""}`}>
              Zaan Crop
            </div>
            <NextImage
              path={"chevron-down"}
              className={`${downImg} ${sidebarToggle ? "opacity-0" : ""}`}
              width="12"
              height="12"
            />
          </div>
          <div className={toggleImg}>
            <NextImage
              path={"toggle-sidebar-arrow"}
              className={arrows}
              onClick={() => setSidebarToggle(!sidebarToggle)}
              width="20"
              height="20"
            />
            <NextImage
              className={closeSidebar}
              path={"close-icon"}
              onClick={() => setFixedSidebar(false)}
              width="12"
              height="12"
            />
          </div>
        </div>
        <div className={menuItemsWrapper}>
          {sidebarItems.map((item) => {
            return (
              <div
                className={`flex-align-center ${menuItem} ${activeMenuItem === item.id ? activeMenu : ''}`}
                key={item.id}
                onClick={() => setActiveMenuItem(item.id)}
              >
                <NextImage path={item.img} width="22" height="22" />
                <div className={menuText}>{item.text}</div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default SideBar;
