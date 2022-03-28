import spriteSideBar from "../../icons/sideBar/symbol-defs.svg";
import { SideBarStyled } from "./SideBarStyled";

const SideBar = ({ isOpenSideBar, onHandleClick }) => {
  return (
    <SideBarStyled isOpenSideBar={isOpenSideBar}>
      <svg className="sideBarIcon" onClick={onHandleClick}>
        <use href={spriteSideBar + "#icon-category"} />
      </svg>

      {isOpenSideBar && (
        <ul className="sideBarList">
          <li className="sideBarItem">
            <a>
              <svg className="sideBarIcon">
                <use href={spriteSideBar + "#icon-home"} />
              </svg>
            </a>
          </li>
          <li className="sideBarItem">
            <a>
              <svg className="sideBarIcon">
                <use href={spriteSideBar + "#icon-message"} />
              </svg>
            </a>
          </li>
          <li className="sideBarItem">
            <a>
              <svg className="sideBarIcon">
                <use href={spriteSideBar + "#icon-chat"} />
              </svg>
            </a>
          </li>
          <li className="sideBarItem">
            <a>
              <svg className="sideBarIcon">
                <use href={spriteSideBar + "#icon-friends"} />
              </svg>
            </a>
          </li>
          <li className="sideBarItem">
            <a>
              <svg className="sideBarIcon">
                <use href={spriteSideBar + "#icon-paper"} />
              </svg>
            </a>
          </li>
          <li className="sideBarItem">
            <a>
              <svg className="sideBarIcon">
                <use href={spriteSideBar + "#icon-setting"} />
              </svg>
            </a>
          </li>
        </ul>
      )}
    </SideBarStyled>
  );
};

export default SideBar;
