import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import reducer from "./reducer.js";
// store仓库管理者
const store = createStore(
    reducer,
    applyMiddleware([thunk])
)

export default store
