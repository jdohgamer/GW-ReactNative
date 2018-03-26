//The purpose of this Action creator is to
//handle all actions related to changing inputs for an emp
//EX: We can pass in the shift as a 'prop' with a 'value' of Monday
//to update the form.
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EXCERPT_UPDATE,
  EXCERPT_CREATE,
  EXCERPTS_FETCH_SUCCESS,
  EXCERPT_SAVE_SUCCESS

} from './types';

export const excerptUpdate = ({ prop, value }) => {
  return {
    type: EXCERPT_UPDATE,
    payload: { prop, value }
  };
};

export const excerptCreate = ({ name, phone, shift }) => {
  //this line below gets our current user
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/excerpts`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EXCERPT_CREATE });
        Actions.pop({ type: 'reset' });
      });
    };
  };

  export const excerptsFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/excerpts`)
        .on('value', snapshot => {
          dispatch({ type: EXCERPTS_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
  };

  export const excerptSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/excerpts/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EXCERPT_SAVE_SUCCESS });
        Actions.pop({ type: 'reset' });
    });
  };
};

export const excerptDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/excerpts/${uid}`)
    .remove()
    .then(() => {
      Actions.pop({ type: 'reset' });
    });
  };
};
