import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="homeword">
        <h1>Doingly</h1>
        <div className="todo_img">
          <img src="https://images.unsplash.com/photo-1644329771909-b651e30c41da?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="group">
          <h2>Manage your tasks</h2>
          <p>
            You can easily manage all of your daily
            <br /> tasks in ToDo for free
          </p>
        </div>
      </div>

      <div className="btncon">
        <button class="btn">BACK</button>
        <button class="btn">NEXT</button>
      </div>
    </div>
  );
}

export default Home;
