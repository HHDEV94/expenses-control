/* eslint-disable react/prop-types */
const Alert = ({ children, type }) => {
  return <div className={`alert ${type}`}>{children}</div>
}

export default Alert
