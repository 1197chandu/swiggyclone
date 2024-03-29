const User = ({ name, location }) => {
  return (
    <div className="user-container">
      <h3>Name: {name}</h3>
      <h3>Location: {location}</h3>
      <h3>Contact: 12345</h3>
    </div>
  );
};

export default User;
