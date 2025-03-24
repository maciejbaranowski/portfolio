import DataProvider from "./DataProvider";

export const Level1 = (props) => (
  <div className="menu-item">
    <div className="menu-item-languge">
      <div
        className="menu-item-languge-top"
        onClick={() => {
          DataProvider.isEn = false;
          props.onClick();
        }}
      >
        Polski
      </div>
      <div
        className="menu-item-languge-bottom"
        onClick={() => {
          DataProvider.isEn = true;
          props.onClick();
        }}
      >
        English
      </div>
    </div>
    <div className="menu-item-logo">
      Maciej Baranowski
    </div>
  </div>
);
