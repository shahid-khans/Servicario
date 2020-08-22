import * as api from "../api";
import {FETCH_OFFERS_SUCCESS, CHANGE_OFFER_STATUS} from "../types";

export const createOffer = offer => api.createOffer(offer);

const extractDataFromOffer = async (offer, userType) => {
  const service = await offer.service.get();
  const user = await offer[userType].get();
  offer.service = service.data();
  offer[userType] = user.data();
  return offer;
}

export const fetchSentOffer = uid => dispatch => {
  return api.fetchSentOffer(uid).then(async offers => {
    const mappedOffers = await Promise.all(offers.map(offer => extractDataFromOffer(offer, "toUser")));
    dispatch({
      type: FETCH_OFFERS_SUCCESS,
      offers,
      offersType: 'sent'
    });
    return mappedOffers;
  });
}

export const fetchReceivedOffer = uid => dispatch => {
  return api.fetchReceivedOffer(uid).then(async offers => {
    const mappedOffers = await Promise.all(offers.map(offer => extractDataFromOffer(offer, "fromUser")));
    dispatch({
      type: FETCH_OFFERS_SUCCESS,
      offers,
      offersType: 'received'
    });
    return mappedOffers;
  });
}
//
// export const changeOfferStatus = (offerId, status) => dispatch => {
//   return api.changeOfferStatus(offerId, status).then(() => {
//     dispatch({
//       type: CHANGE_OFFER_STATUS,
//       offerId,
//       offersType: "received",
//       status
//     });
//   });
// }

export const acceptOffer = offerId => dispatch => {
  return api.changeOfferStatus(offerId, "accepted").then(() => {
    dispatch({
      type: CHANGE_OFFER_STATUS,
      offerId,
      offersType: "received",
      status: "accepted"
    });
  });
}

export const declineOffer = offerId => dispatch => {
  return api.changeOfferStatus(offerId, "declined").then(() => {
    dispatch({
      type: CHANGE_OFFER_STATUS,
      offerId,
      offersType: "received",
      status: "declined"
    })
  });
}