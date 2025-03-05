import { useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import { useLocation } from "react-router-dom";
import RootRoutes from "./Routes";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Cuộn mượt lên đầu trang
  }, [pathname]); // Chạy lại khi pathname thay đổi

  return (
    <>
      <RootRoutes/>
    </>
  );
}

export default App;
