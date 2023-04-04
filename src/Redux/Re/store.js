import { createStoreHook } from "react-redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducer";

const middleware = [thunk]

const store = createStoreHook(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;