import {combineReducers, legacy_createStore as createStore} from "redux"; 
import dialogsReducer from './reducer/dialogs-reducer'; 
import profileReducer from './reducer/profile-reducer'; 
import sidebarReducer from './reducer/sidebar-reducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
});

const store = createStore(reducers);

export default store;