// ---------------BASIC CLASS COMPONENT---------
import React from "react";

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     console.log(this?.props?.name + "Child constructor");
//   }
//   componentDidMount() {
//     console.log(this?.props?.name + "Child componentDidMount");
//   }
//   render() {
//     console.log(this?.props?.name + "Child render");
//     const { name, location } = this?.props;
//     const { count } = this.state;
//     return (
//       <div className="user-card">
//         <h2>Name: {name} </h2>
//         <h2>Count: {count} </h2>
//         <button
//           onClick={() => {
//             this.setState({
//               count: this.state.count + 1,
//             });
//           }}
//         >
//           Count Increase
//         </button>
//         <h2>Location: {location}</h2>
//         <h2>Contact: @MayurShelke</h2>
//       </div>
//     );
//   }
// }
// export default UserClass;

/*----------API CALL IN CLASS COMPO AND ComponentDIdUpdate and ComponntWillUnmount lifecycle methods */
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "dummy",
        location: "Pune",
        avatar_url: "",
      },
    };
    console.log(this?.props?.name + "Child constructor");
  }
  async componentDidMount() {
    // console.log(this?.props?.name + "Child componentDidMount");
    // const data = await fetch("https://api.github.com/users/shelkemayur4700");
    // const json = await data.json();
    // console.log(json);
    // this.setState({ data: json });
    // this.time = setInterval(() => {
    //   console.log("timeout...");
    // }, 1000);
  }
  componentDidUpdate() {
    // console.log("Component did update");
  }
  componentWillUnmount() {
    // console.log("comonenetWillUnmount");
    // clearInterval(this.time);
  }
  render() {
    // console.log(this?.props?.name + "Child render");

    const { name, location, avatar_url, following } = this.state.data;
    return (
      <div className="user-card">
        <h2>Name: {name} </h2>
        <img src={avatar_url} alt="demoImg" />
        <h2>Location: {location}</h2>
        <h2>Contact: {following}</h2>
      </div>
    );
  }
}
export default UserClass;
