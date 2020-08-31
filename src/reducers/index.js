import {combineReducers} from "redux";
import services from "./services";
import selectedService from "./selectedService";
import auth from "./auth";
import offers from "./offers";
import collaboration from "./collaboration";

const serviceApp = combineReducers({
  services,
  selectedService,
  auth,
  offers,
  collaboration
});

export const getMessages = ({auth: {user: {messages}}}) => messages;

export default serviceApp;