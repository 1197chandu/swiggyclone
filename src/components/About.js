import User from "./user";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-us">
      <h1>Welcome to About us page</h1>
      <User name={"Chandu"} location={"Pune"} />
      <UserClass name={"Chandu Class"} location={"Pune class"} />
    </div>
  );
};

export default About;
