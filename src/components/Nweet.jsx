import React, { useState } from "react";
import { dbService, storageService } from "fbase";
import { NWEETS_COLLECTION } from "const";
import PropTypes from "prop-types";
import style from "./Nweet.module.scss";

const Nweet = ({ nweet, isOwner }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newNweet, setNewNweet] = useState(nweet.text);
  const onDelete = async () => {
    const ok = window.confirm("Are you sure you want delete this nweet?");
    if (!ok) return;
    await dbService.collection(NWEETS_COLLECTION).doc(nweet.id).delete();
    if (nweet.imgUrl) {
      await storageService.refFromURL(nweet.imgUrl).delete();
    }
  };
  const onToggleEdit = () => {
    setIsEdit((prev) => !prev);
  };
  const onNweetChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection(NWEETS_COLLECTION).doc(nweet.id).update({
      text: newNweet,
    });
    onToggleEdit();
  };
  return (
    <div className={style.root}>
      {isEdit ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={newNweet}
              onChange={onNweetChange}
              className={style.input}
              required
            />
            <div className={style.edit_buttons}>
              <button type="submit" className={style.update}>Update</button>
              <button type="button" onClick={onToggleEdit} className={style.cancel}>
                Cancel
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <div className={style.content}>
            <strong className={style.text}>{nweet.text}</strong>
            {nweet.imgUrl && <img src={nweet.imgUrl} className={style.img} width="50" alt="" />}
          </div>
          {isOwner && (
            <div className={style.buttons}>
              <button type="button" onClick={onDelete}  className={style.button}>
                Delete
              </button>
              <button type="button" onClick={onToggleEdit}  className={style.button}>
                Edit
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

Nweet.propTypes = {
  nweet: PropTypes.object.isRequired,
  isOwner: PropTypes.bool
}

export default Nweet;
