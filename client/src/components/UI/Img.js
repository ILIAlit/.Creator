import { styled } from "@mui/material";

const Img = ({alt, src}) => {

  const Img = styled('img')({
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  return (
    <Img alt={alt} src={src} ></Img>
  );
}

export default Img