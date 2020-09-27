import React, { useState } from "react";
import { dbService } from "fbase";
import { NWEETS_COLLECTION } from "const";

const Nweet = ({ nweet, isOwner }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newNweet, setNewNweet] = useState(nweet.text);
  const onDelete = async () => {
    const ok = window.confirm("Are you sure you want delete this nweet?");
    if (!ok) return;
    await dbService.collection(NWEETS_COLLECTION).doc(nweet.id).delete();
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

export default Nweet;
