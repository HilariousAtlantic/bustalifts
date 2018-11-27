import update from "immutability-helper";

export default function reducer(state, action) {
  const reducer = ACTION_TYPE_TO_REDUCER[action.type];
  return reducer ? reducer(state, action) : state;
}

const ACTION_TYPE_TO_REDUCER = {
  UPDATE_SET_PROGRESS: updateSetProgress
};

function updateSetProgress(state, action) {
  return update(state, {
    setsById: {
      [action.id]: { progress: { $set: action.progress } }
    }
  });
}
