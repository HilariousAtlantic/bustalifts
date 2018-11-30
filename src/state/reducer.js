import update from "immutability-helper";
import { ACTION } from "constants/actions";

export default function reducer(state, action) {
  const reducer = ACTION_TYPE_TO_REDUCER[action.type];
  return reducer ? reducer(state, action) : state;
}

const ACTION_TYPE_TO_REDUCER = {
  [ACTION.COMPLETE_SET]: completeSet
};

function completeSet(state, action) {
  return update(state, {
    setsById: {
      [action.id]: { complete: { $set: true }, failed: { $set: action.failed } }
    }
  });
}
