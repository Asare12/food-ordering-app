import useForm from "./useForm";
import validate from "./validateInfo";

  const SignUp = ({submitForm}) => {
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

  return (
    <>
      <div class="form sign-up1">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="form-inputs">
            <label>
              <span>Name</span>
              <input
                id="name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <p>{errors.name}</p>}
            </label>
          </div>
          <div className="form-inputs">
            <label>
              <span>Email Address</span>
              <input
                id="email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </label>
          </div>
          <div className="form-inputs">
            <label>
              <span>Password</span>
              <input
                id="password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </label>
          </div>
          <div className="form-inputs">
            <label>
              <span>Confirm Password</span>
              <input
                id="password2"
                type="password"
                name="password2"
                value={values.password2}
                onChange={handleChange}
              />
              {errors.password2 && <p>{errors.password2}</p>}
            </label>
          </div>
          <button type="submit" class="submit">
            Sign Up Now
          </button>
        </form>
      </div>
    </>
  );
}
export default SignUp;