import React from "react";
function Form() {
  const [newCon, setNewCon] = React.useState();
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    hobbies: [
      {
        hName: "",
      },
    ],
  });

  const handleChange = (evt, isHobby, index) => {
    const value = evt.target.value;
    if (isHobby) {
      const data = [...state.hobbies];
      data[index].hName = value;
      setState({
        ...state,
        hobbies: data,
      });
    } else {
      setState({
        ...state,
        [evt.target.name]: value,
      });
    }

    // setNewCon(value);
  };

  const addHobby = (e) => {
    e.preventDefault();
    setState((prevState) => ({
      //here hName was newCon
      hobbies: [...prevState.hobbies, { hName: "" }],
    }));
  };
  console.log("Your hobies is" + state.hobbies);

  const submitIt = (e) => {
    e.preventDefault();
    state.firstName && state.lastName && state.hobbies.hName
      ? alert("succes")
      : alert("please fill values");
    console.log(`your hobbies are : ${state.hobbies.hName}`);
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
          required
        />
      </label>
      <label>
        Last name
        <input
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
          required
        />
      </label>

      {state.hobbies.map((e, index) => (
        <input
          type="text"
          name="hname"
          value={e.hName}
          onChange={(e) => handleChange(e, true, index)}
          required
        />
      ))}

      <button onClick={addHobby}>Add Hobby</button>
      <button type="submit " onClick={submitIt}>
        submit
      </button>
    </form>
  );
}

export default Form;
