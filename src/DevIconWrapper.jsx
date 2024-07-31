const DevIconWrapper = ({ icon, size = 3 }) => (
  <i className={`devicon-${icon}-plain colored`} style={{ fontSize: `${size}em` }}></i>
);

const DevIconWithLabel = ({ icon, label, size = 3 }) => (
  <div className="flex flex-column">
    <div><DevIconWrapper icon={icon} size={size} /></div>
    <div>{label}</div>
  </div>
);

export { DevIconWrapper, DevIconWithLabel };