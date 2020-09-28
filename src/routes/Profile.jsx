import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { authService, dbService, storageService } from "fbase";
import { NWEETS_COLLECTION } from "const";
import { v4 as uuidv4 } from "uuid";
import Nweet from "components/Nweet";

const Profile = ({ userObj, refreshUser }) => {
  const history = useHistory();
  const onSignOut = () => {
    authService.signOut();
    history.push("/");
  };
  const [myNweets, setMyNweets] = useState([]);
  const getMyNweets = async () => {
    const myNweets = await dbService.collection(NWEETS_COLLECTION)
      .where("creatorId", "==", userObj.uid)
      .get();
    setMyNweets(myNweets.docs.map((doc) => ({
      id: doc.id, ...doc.data()
    })));
  };;
  useEffect(() => {
    getMyNweets();
  }, []);
  const [newName, setNewName] = useState(userObj.displayName||"");
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName === newName && userObj.photoURL === photoUrl) return;
    let newPhotoUrl = photoUrl;
    if (userObj.photoURL !== newPhotoUrl) {
      const fileRef = storageService.ref().child(`${userObj.uid}/profile/${uuidv4()}`);
      const response = await fileRef.putString(photoUrl, "data_url");
      newPhotoUrl = await response.ref.getDownloadURL();
    }
    await authService.currentUser.updateProfile({
      displayName: newName,
      photoURL: newPhotoUrl,
    });
    refreshUser();
    toggleEdit();
  }
  const onChange = event => {
    const { target: { value } } = event;
    setNewName(value);
  }
  const [photoUrl, setPhotoUrl] = useState(userObj.photoURL);
  const onFileChange = event => {
    const { currentTarget: { files } } = event;
    const theFile = files[0]
    const reader = new FileReader();
    reader.addEventListener("load", event => {
      const { currentTarget: { result } } = event;
      setPhotoUrl(result);
    });
    reader.readAsDataURL(theFile,)
  }
  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = () => setIsEdit(prev => !prev);
  return (
    <div>
      <div>
        <h1>Profile</h1>
        <button type="button" onClick={onSignOut}>
          Sign Out
        </button>
      </div>
      <div>
        {photoUrl && <img src={photoUrl} width="30" alt="" />}
        {
          isEdit ? (
            <form onSubmit={onSubmit}>
              <input type="file" accecpt="image/*" onChange={onFileChange} />
              <input type="text" placeholder="Enter your display name" value={newName} onChange={onChange} />
              <button>Update Profile</button>
              <button type="button" onClick={toggleEdit}>Cancel</button>
            </form>
          ) : (
            <div>
              <strong>{userObj.displayName}</strong>
              <button type="button" onClick={toggleEdit}>Edit Profile</button>
            </div>
          )
        }
      </div>
      <div>
        {
          myNweets.map(nweet => <Nweet
            key={nweet.id}
            nweet={nweet}
          />)
        }
      </div>
    </div>
  );
};

export default Profile;