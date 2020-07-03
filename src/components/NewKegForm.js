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
      </form>
    </React.Fragment>
  );
}
export default NewKegForm;