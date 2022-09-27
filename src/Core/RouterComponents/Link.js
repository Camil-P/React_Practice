import { useHistory } from "react-router-dom";

export default function Link({ href, children }) {
  const history = useHistory();

  const handleOnClick = (event) => {
    event.preventDefault();
    history.pushState({}, "", event.target.href);

    const navigationEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navigationEvent);
  };

  return (
    <a
      style={{ color: "wheat", textDecoration: "none" }}
      onClick={handleOnClick}
      href={href}
    >
      {children}
    </a>
  );
}
