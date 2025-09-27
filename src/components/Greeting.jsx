function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h2>Hello, User 👋</h2> : <h2>Please log in 🔑</h2>}
    </div>
  );
}
export default Greeting;
