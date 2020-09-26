import React, { useEffect, useState } from "react";
import { dbService } from "fbase";

const NWEETS_COLLECTION = "nweets";

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const getNweets = async () => {
    const dbNweets = await dbService.collection(NWEETS_COLLECTION).get();
    dbNweets.forEach((doc) => {
      const nweetObj = {
        id: doc.id,
        ...doc.data(),
      };
      setNweets((prev) => [...prev, nweetObj]);
    });
  };
  useEffect(() => {
    getNweets();
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!nweet) return;
    await dbService.collection(NWEETS_COLLECTION).add({
      nweet,
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
          <div key={nweet.id}>{nweet.nweet}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;