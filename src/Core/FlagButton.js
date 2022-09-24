import { Button } from "@mui/material";

export default function FlagButton({ imgUrl, handleOnClick }) {
  return (
    <Button
      onClick={handleOnClick}
      style={{
        backgroundImage: `url("${imgUrl}")`,
        backgroundSize: "100% 100%",
        width: "30px",
        height: "30px",
      }}
    />
  );
}
