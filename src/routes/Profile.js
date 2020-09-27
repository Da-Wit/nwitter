import { authService, dbService } from "Icebase";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default ({ userObj }) => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  const getMyNweets = async () => {
    console.log(userObj.uid);
    const nweets = await dbService
      .collection("nweets")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createdAt", "desc")
      .get();
    console.log(nweets.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    getMyNweets();
  });
  return (
    <>
      <button onClick={onLogOutClick}>Log out</button>
    </>
  );
};
