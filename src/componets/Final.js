import React from "react";
function Form() {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    hobbies: [
      {
        hname: "",
      },
    ],
  });

  const [newState, setNew] = React.useState();

  const handleChange = (evt) => {
    setNew(evt.target.value);
    console.log(newState);
    setState({
      ...state,
      [evt.target.name]: newState,
    });
  };

  const callMe = (e) => {
    e.preventDefault();
    setState((prevState) => ({
      hobbies: [...prevState.hobbies, { hname: newState }],
    }));
    console.log(state.hobbies);
  };
  return (
    <form>
      <label>
        First name
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name
        <input
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
      </label>

      {state.hobbies.map((e) => (
        <input
          type="text"
          name="hname"
          value={state.hobbies.hname}
          onChange={handleChange}
        />
      ))}
      <button onClick={callMe}>Add Hobbies</button>
    </form>
  );
}

export default Form;
