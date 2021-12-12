const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

export const restoreUser = () => async (dispatch) => {
  const res = await fetch("/users/restore");
  const data = await res.json();
  if (res.ok) {
    dispatch(setUser(data));
  }
};

export const login = (email, password) => async (dispatch) => {
  const res = await fetch("/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (data.status === "error") {
    // Do something when user not found
  } else {
    dispatch(setUser(data));
  }
};

export const createUser = (username, email, password) => async (dispatch) => {
  const res = await fetch("/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
  const data = await res.json();

  dispatch(setUser(data));
};

export const photoUpload = (file) => async () => {
  let photoUrl;
  const formData = new FormData();
  formData.append("user_file", file);
  const res = await fetch("/api/users/update/profile", {
    method: "POST",
    body: formData,
  });
  if (res.ok) {
    photoUrl = await res.json();
    return photoUrl;
  }
};

export const logout = () => async (dispatch) => {
  await fetch("users/logout", {
    method: "DELETE",
  });
  dispatch(removeUser());
};

const initialState = { user: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case REMOVE_USER:
      newState = Object.assign({}, state, { user: null });
      return newState;
    default:
      return state;
  }
}

export default reducer;
