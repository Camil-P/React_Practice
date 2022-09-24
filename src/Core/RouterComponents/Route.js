import { useEffect, useState } from "react";

export default function Route({ pathname, children }) {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const pageRendered = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", pageRendered);

    return () => {
      window.removeEventListener("popstate", pageRendered);
    };
  }, []);

  if (path === pathname) {
    console.log(window.location.pathname);
    console.log(pathname);
    console.log(children);
    return children;
  }
}
