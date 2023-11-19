import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MissingRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, [navigate]);

  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "red", fontSize: "30px" }}>404</h1>
        <span style={{ color: "red", fontSize: "30px" }}>Page not found</span>
      </div>
    </div>
  );
};

export default MissingRoute;
