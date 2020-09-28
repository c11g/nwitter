import React, { useState } from "react";
import { dbService, storageService } from "fbase";
import { NWEETS_COLLECTION } from "const";
import PropTypes from "prop-types";

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
    <div>
      {isEdit ? (
        <div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={newNweet}
              onChange={onNweetChange}
              required
            />
            <button type="submit">Update Nweet</button>
          </form>
          <button type="button" onClick={onToggleEdit}>
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <strong>{nweet.text}</strong>
          {nweet.imgUrl && <img src={nweet.imgUrl} width="50" alt="" />}
          {isOwner && (
            <div>
              <button type="button" onClick={onDelete}>
                Delete
              </button>
              <button type="button" onClick={onToggleEdit}>
                Edit
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Nweet.propTypes = {
  nweet: PropTypes.object.isRequired,
  isOwner: PropTypes.bool
}

export default Nweet;
