import React, { useReducer } from "react";

const FormwithUseReducer = () => {
  let initialData = {
    name: "",
    email: "",
    password: "",
  };

  let reducer = (state, action) => {
    return {
      ...state,
      [action.type]: action.payload,
    };
  };
  let [data, dispatch] = useReducer(reducer, initialData);

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => {
              dispatch({ type: "name", payload: e.target.value });
            }}
          ></input>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => {
              dispatch({ type: "email", payload: e.target.value });
            }}
          ></input>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={data.password}
            onChange={(e) => {
              dispatch({ type: "password", payload: e.target.value });
            }}
          ></input>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormwithUseReducer;
