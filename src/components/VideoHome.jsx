import VideoLoop from "../assets/VideoLoop.mp4";

export const VideoHome = () => {
  return (
    <>
      <video autoPlay loop muted style={{width:"100%", height:"100%", margin:"100px 0px"}}>
        <source src={VideoLoop} type="video/mp4"/>
      </video>
    </>
  );
};
