import { combineReducers } from "redux";

import { auth } from "./user.reducer";
import { record } from "./record.reducer";

const rootReducer = combineReducers({
  auth,
  record,
});

export default rootReducer;
