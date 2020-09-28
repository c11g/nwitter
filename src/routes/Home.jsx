import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
import { NWEETS_COLLECTION } from "const";
import PropTypes from "prop-types";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";

const Home = ({ userObj }) => {
  const [nweets, setNweets] = useState([]);
  useEffect(() => {
    const unsubscribe = dbService
      .collection(NWEETS_COLLECTION)
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        const nweetArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNweets(nweetArray);
      });
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <NweetFactory userObj={userObj} />
      <div>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweet={nweet}
            isOwner={userObj.uid === nweet.creatorId}
          />
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  userObj: PropTypes.object.isRequired
};

export default Home;