import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

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
        <User name={"Mayur"} />
        {/* <UserClass name={"First"} location="Pune" /> */}
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
