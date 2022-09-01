export default function Link({ href, children }) {
  const handleOnClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);

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
