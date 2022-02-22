import React, { Component } from "react";

type FormProps = {
  //
};

class Form extends Component<FormProps> {
  public render() {
    return <form>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name"/>
      <label htmlFor="surname">Surname:</label>
      <input type="text" name="surname"/>
      <label htmlFor="phone">Phone number:</label>
      <input type="number" name="phone"/>
      <label htmlFor="img">Picture URL:</label>
      <input type="text" name="img"/>
      <input type="submit" value="Save"/>
    </form>;
  }
}

export default Form;
