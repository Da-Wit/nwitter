import Nweet from "components/Nweet";
import { dbService, storageService } from "Icebase";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const [attachment, setAttachment] = useState("");

  useEffect(() => {
    dbService.collection("nweets").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      console.log("console only with attachment");
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const nweetObj = {
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    };
    await dbService.collection("nweets").add(nweetObj);
    setNweet("");
    setAttachment("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    setNweet(value);
  };
  const onFileChange = (e) => {
    const files = e.target.files;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      setAttachment(finishedEvent.currentTarget.result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => {
    setAttachment(null);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Nweet" />
        {attachment && (
          <div>
            <img src={attachment} width="50px" height="50px" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )}
      </form>
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
