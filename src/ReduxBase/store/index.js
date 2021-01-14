import { createStore } from "redux";
import reducer from "./reducer.js";
// store仓库管理者
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
