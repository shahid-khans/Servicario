import React from "react";
import {useForm} from "react-hook-form";

const RegisterForm = () => {
  const {register, handleSubmit} = useForm();


  const getFormData = data => {
   console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(getFormData)}>
      <div className="field">
        <div className="control">
          <input name="email"
                 className="input is-large"
                 type="email"
                 placeholder="Your Email"
                 autoFocus=""
                 autoComplete="email"
                 ref={register}
          />
          <div className="form-error">
            <span className="help is-danger">Email is required</span>
            <span className="help is-danger">Email address is not valid</span>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input name="fullName"
                 className="input is-large"
                 type="text"
                 placeholder="Full Name"
                 autoFocus=""
                 ref={register}

          />
          <div className="form-error">
            <span className="help is-danger">Name is required</span>
            <span className="help is-danger">Name is not valid</span>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input name="avatar"
                 className="input is-large"
                 type="text"
                 placeholder="Avatar"
                 autoFocus=""
                 ref={register}
          />
          <div className="form-error">
            <span className="help is-danger">Avatar is required</span>
            <span className="help is-danger">Avatart is not valid</span>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input name="password"
                 className="input is-large"
                 type="password"
                 placeholder="Your Password"
                 autoComplete="current-password"
                 ref={register}
          />
          <div className="form-error">
            <span className="help is-danger">Password is required</span>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input name="passwordConfirmation"
                 className="input is-large"
                 type="password"
                 placeholder="Repeat Password"
                 autoComplete="current-password"
                 ref={register}
          />
          <div className="form-error">
            <span className="help is-danger">Password Confirmation is required</span>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="button is-block is-info is-large is-fullwidth">Register
      </button>
    </form>
  )
};

export default RegisterForm;