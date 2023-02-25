import React from "react";
import classes from "./Checkout.module.css";
import useInput from "../../hooks/input-hook";

function Checkout(props) {
  const {
    value: nameValue,
    valueIsValid: nameIsValid,
    hasErrors: nameHasErrors,
    changeHandler: nameChandeHandler,
    blurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: streetValue,
    valueIsValid: streetIsValid,
    hasErrors: streetHasErrors,
    changeHandler: streetChangeHandler,
    blurHandler: streetBlurHandler,
    reset: streetReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: postalValue,
    valueIsValid: postalIsValid,
    hasErrors: postalHasErrors,
    changeHandler: postalChangeHandler,
    blurHandler: postalBlurHandler,
    reset: postalReset,
  } = useInput((value) => value.trim() !== "" && value.length >= 5);

  const {
    value: cityValue,
    valueIsValid: cityIsValid,
    hasErrors: cityHasErrors,
    changeHandler: cityChangeHandler,
    blurHandler: cityBlurHandler,
    reset: cityReset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (nameIsValid && streetIsValid && postalIsValid && cityIsValid) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameValue;
    const enetredStreet = streetValue;
    const enteredPostal = postalValue;
    const enteredCity = cityValue;

    nameReset();
    streetReset();
    postalReset();
    cityReset();

    props.onConfirm({
      name: enteredName,
      street: enetredStreet,
      postalCode: enteredPostal,
      city: enteredCity,
    });
  };

  const nameclasses = `${classes.control} ${
    !nameHasErrors ? "" : classes.invalid
  }`;
  const streetclasses = `${classes.control} ${
    !streetHasErrors ? "" : classes.invalid
  }`;
  const postalclasses = `${classes.control} ${
    !postalHasErrors ? "" : classes.invalid
  }`;
  const cityclasses = `${classes.control} ${
    !cityHasErrors ? "" : classes.invalid
  }`;
  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div className={nameclasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={nameValue}
          type="text"
          id="name"
          onChange={nameChandeHandler}
          onBlur={nameBlurHandler}
        ></input>
        {nameHasErrors && <p>Please enter name</p>}
      </div>
      <div className={streetclasses}>
        <label htmlFor="street">Street</label>
        <input
          value={streetValue}
          type="text"
          id="street"
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        ></input>
        {streetHasErrors && <p>Please enter street</p>}
      </div>
      <div className={postalclasses}>
        <label htmlFor="postal">Postal code</label>
        <input
          value={postalValue}
          type="text"
          id="postal"
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
        ></input>
        {postalHasErrors && <p> Please enter post code</p>}
      </div>
      <div className={cityclasses}>
        <label htmlFor="city">City</label>
        <input
          value={cityValue}
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        ></input>
        {cityHasErrors && <p>Please enter city</p>}
      </div>
      <div className={classes.actions}>
        <button onClick={props.onBack}>Back</button>
        <button onClick={props.onCancel}>Cancel</button>
        <button
          disabled={!formIsValid}
          className={classes.submit}
        onClick={props.onOrder}
        >
          Confirm
        </button>
      </div>
    </form>
  );
}

export default Checkout;
