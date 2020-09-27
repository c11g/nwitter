import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
import { NWEETS_COLLECTION } from "const";
import Nweet from "components/Nweet";

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  useEffect(() => {
    const unsubscribe = dbService
      .collection(NWEETS_COLLECTION)
      .onSnapshot((snapshot) => {
        const nweetArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNweets(nweetArray);
      });
    return () => unsubscribe();
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!nweet) return;
    await dbService.collection(NWEETS_COLLECTION).add({
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setNweet("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="What's on your mind?"
          value={nweet}
          onChange={onChange}
        />
        <button type="submit">Nweet</button>
      </form>
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

export default Home;