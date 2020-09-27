import React, { useEffect, useState } from "react";
import { dbService, storageService } from "fbase";
import { NWEETS_COLLECTION } from "const";
import { v4 as uuidv4 } from "uuid";
import Nweet from "components/Nweet";

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const [dataUrl, setDataUrl] = useState(null);
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
    if (!nweet && !dataUrl) return;
    let fileUrl;
    if (dataUrl) {
      const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
      const response = await fileRef.putString(dataUrl, "data_url");
      fileUrl = await response.ref.getDownloadURL();
    }
    await dbService.collection(NWEETS_COLLECTION).add({
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      imgUrl: fileUrl ? fileUrl : null,
    });
    setNweet("");
    setDataUrl(null);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      const {
        currentTarget: { result },
      } = event;
      setDataUrl(result);
    });
    reader.readAsDataURL(theFile);
  };
  const onClearPhoto = () => setDataUrl(null);
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
        <input type="file" accept="image/*" onChange={onFileChange} />
        <button type="submit">Nweet</button>
        {dataUrl && (
          <div>
            <img src={dataUrl} alt="" width="50" />
            <button type="button" onClick={onClearPhoto}>
              Clear
            </button>
          </div>
        )}
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