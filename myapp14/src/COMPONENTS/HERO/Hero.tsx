import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <Video
        // controls
        autoPlay
        loop
        playsInline
        src="https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906"
      />
    </Container>
  );
};

export default Hero;
const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  height: 500px;
  width: 100%;
  background-color: black;
  position: relative;
  z-index: 11;

  ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
