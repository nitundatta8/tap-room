import React from 'react'

function NewKegForm() {
  return (
    <React.Fragment>
      <form onSubmit={formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name" />
        <input
          type="text"
          name="brand"
          placeholder="Brand" />
        <input
          type="number"
          name="price"
          placeholder="Price per pint" />
        <input
          type="text"
          name="flavor"
          placeholder="Flavor" />
        <input
          type="number"
          name="caffeine"
          placeholder="Caffeine content per serving in mg" />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity in pints" />
        <button type='Submit'>Submit</button>
      </form>
    </React.Fragment>
  );

  function formSubmissionHandler(event) {
    event.preventDefault();
  };
}
export default NewKegForm;