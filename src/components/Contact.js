const Contact = () => {
  return (
    <div>
      <h1>Welcome to contact page</h1>
      <form>
        <input
          type="text"
          name="contact"
          className="m-2 p-2 border border-black border-solid rounded"
          placeholder="Contact"
        />
        <input
          type="text"
          name="contact"
          className="m-2 p-2 border border-black border-solid rounded"
          placeholder="Contact"
        />
        <button className="m-2 p-2 bg-black text-white">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
