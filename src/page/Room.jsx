import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { id } = useParams();

  const MyRoom = async (element) => {
    const appId = 918696745;
    const serverSecret = "39ddba0397818da2b212916254b43f8f";
    const KitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      id,
      Date.now().toString(),
      id
    );
    const zc = ZegoUIKitPrebuilt.create(KitToken);

    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Link",
          url: `http://localhost:5173/room/${id}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };
  return (
    <div>
      <h1>Room {id}</h1>
      <div ref={MyRoom} />
    </div>
  );
};

export default Room;
