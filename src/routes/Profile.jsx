import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { authService, dbService, storageService } from "fbase";
import { NWEETS_COLLECTION } from "const";
import { v4 as uuidv4 } from "uuid";
import Nweet from "components/Nweet";
import {DOMAIN_PATH_NAME} from "const";
import style from "./Profile.module.scss";

const Profile = ({ userObj, refreshUser }) => {
  const history = useHistory();
  const onSignOut = () => {
    authService.signOut();
    history.push(`/${DOMAIN_PATH_NAME}`);
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
    <div className={style.root}>
      <div className={style.profile}>
        {photoUrl && <img src={photoUrl} className={style.img} width="30" alt="" />}
        {
          isEdit ? (
            <form onSubmit={onSubmit}>
              <div className={style.file_wrap}>
                <input type="file" accept="image/*" onChange={onFileChange} className={style.file} />
                <div className={style.file_ui}>Edit Image</div>
              </div>
              <input type="text" placeholder="Enter your display name" value={newName} onChange={onChange} className={style.input} />
              <button className={style.update}>Update</button>
              <button type="button" onClick={toggleEdit} className={style.cancel}>Cancel</button>
            </form>
          ) : (
            <div>
              <strong className={style.name}>{userObj.displayName}</strong>
              <button type="button" onClick={toggleEdit} className={style.edit}>Edit</button>
            </div>
          )
        }
        <button type="button" onClick={onSignOut} className={style.signout}>
          Sign Out
        </button>
      </div>
      <div className={style.nweet}>
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

Profile.propTypes = {
  userObj: PropTypes.object.isRequired,
  refreshUser: PropTypes.func.isRequired,
}

export default Profile;