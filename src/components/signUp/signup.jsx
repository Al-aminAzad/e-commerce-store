import react from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import { auth, createUserProfileDocuments } from "../../firebase/utils";
import "./signUp.style.scss";

class SignUp extends react.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocuments(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="Display Name"
            type="text"
            name='displayName'
            value={displayName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Email"
            type="email"
            name='email'
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name='password'
            value={password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Confirm Password"
            type="password"
            name='confirmPassword'
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
