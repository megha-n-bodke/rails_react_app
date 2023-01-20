import axios from "axios";

const Data = "";
const Url = "http://127.0.0.1:3000/api/messages";

const initialState = [];

//reducer
export default function Messagereducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MESSAGES":
      return action.payload;
    default:
      return state;
  }
}

//action
export const getMessages = () => async (dispatch) => {
  const { res } = await axios.get(Url);
  dispatch({
    type: "GET_MESSAGES",
    payload: res.data[0],
  });
};
