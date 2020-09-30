import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";
import { dbService } from "Icebase";
import React, { useEffect, useState } from "react";

export default ({ userObj }) => {
  const [nweets, setNweets] = useState([]);
  useEffect(() => {
    dbService.collection("nweets").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);
  return (
    <div>
      <NweetFactory userObj={userObj} />
      <div>
        {nweets.map((nweetInNweets) => (
          <Nweet
            key={nweetInNweets.id}
            nweetObj={nweetInNweets}
            isOwner={nweetInNweets.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
