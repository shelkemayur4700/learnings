import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utills/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }
  componentDidMount() {
    // console.log("Parent componentDidMount");
  }
  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>About page</h1>
        <div>
          LoogedInUser:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <User name={"Mayur"} />
        <UserClass name={"First"} location="Pune" />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About page</h1>
//       <User name={"Mayur"} />
//       <UserClass name={"mayur @ClassCompo"} location="Pune" />
//     </div>
//   );
// };

export default About;
