const SET_LINKBOOKS = "linkbooks/setLinkbooks";
const REMOVE_LINKBOOKS = "linkbooks/removeLinkbooks";
const ADD_LINKBOOK = "linkbooks/setLinkbook";
const UPDATE_LINKBOOK = "linkbooks/updateLinkbook";
const REMOVE_LINKBOOK = "linkbooks/removeLinkbook";

const addLinkbook = (Linkbook) => ({
  type: ADD_LINKBOOK,
  payload: Linkbook,
});

const updateLinkbook = (linkbook) => ({
  type: UPDATE_LINKBOOK,
  payload: linkbook,
});

const setLinkbooks = (Linkbooks) => ({
  type: SET_LINKBOOKS,
  payload: Linkbooks,
});

const removeLinkbook = (linkbook) => ({
  type: REMOVE_LINKBOOK,
  payload: linkbook,
});

const removeLinkbooks = () => ({
  type: REMOVE_LINKBOOKS,
});

export const createLinkbook =
  (name, selectedCategory, email) => async (dispatch) => {
    console.log(name);
    const res = await fetch("/linkbook", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        category: selectedCategory,
        email: email,
      }),
    });
    const data = await res.json();
    dispatch(addLinkbook(data));
  };

export const changeLinkbook =
  (id, name, category, priv) => async (dispatch) => {
    const res = await fetch(`/linkbook/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        category: category,
        private: priv,
      }),
    });
    const data = await res.json();
    dispatch(updateLinkbook(data));
  };

export const deleteLinkbook = (id) => async (dispatch) => {
  const res = await fetch(`/linkbook/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  dispatch(removeLinkbook(data));
};

export const loadLinkbooks = () => async (dispatch) => {
  const res = await fetch(`/linkbook`);
  const data = await res.json();
  dispatch(setLinkbooks(data));
};

const initialState = { linkbooks: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ADD_LINKBOOK:
      return { ...state, linkbooks: [...state.linkbooks, action.payload] };
    case REMOVE_LINKBOOK:
      const idxToRemove = state.linkbooks
        .map((item) => item.id)
        .indexOf(action.payload.id);

      return {
        ...state,
        linkbooks: [
          ...state.linkbooks.slice(0, idxToRemove),
          ...state.linkbooks.slice(idxToRemove + 1),
        ],
      };
    case UPDATE_LINKBOOK:
      const idxToUpdate = state.linkbooks
        .map((item) => item.id)
        .indexOf(action.payload.id);

      const newStateLinkbooks = state.linkbooks.map((x) => x);
      newStateLinkbooks[idxToUpdate] = action.payload;
      return {
        ...state,
        linkbooks: [...newStateLinkbooks],
      };
    case SET_LINKBOOKS:
      return { ...state, linkbooks: action.payload };
    case REMOVE_LINKBOOKS:
      newState = Object.assign({}, state, { linkbooks: null });
      return newState;
    default:
      return state;
  }
}

export default reducer;
