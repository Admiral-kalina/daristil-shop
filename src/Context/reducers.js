
import {productsReducer} from "./product/reducer";
import {userReducer} from "./user/userReducer";
import {localStorageReducer} from "./localStorage/reducer";

export const reducers = {
    products: productsReducer,
    user: userReducer,
    localStorage: localStorageReducer,
    //dumb: dumReducer
}