import React, { useState } from 'react';
import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from "uuid";
import { NWEETS_COLLECTION } from "const";

const NweetFactory = ({userObj}) => {
  const [nweet, setNweet] = useState("");
  const [dataUrl, setDataUrl] = useState(null);
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!nweet && !dataUrl) return;
    let fileUrl = null;
    if (dataUrl) {
      const fileRef = storageService.ref().child(`${userObj.uid}/nweets/${uuidv4()}`);
      const response = await fileRef.putString(dataUrl, "data_url");
      fileUrl = await response.ref.getDownloadURL();
    }
    await dbService.collection(NWEETS_COLLECTION).add({
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      imgUrl: fileUrl,
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
  );
}

export default NweetFactory;