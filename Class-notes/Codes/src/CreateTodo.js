import "./CreateTodo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

function CreateTodo() {
  return (
    <div className="createtodo">
      <div className="search-bar">
        <input
          placeholder="Search....."
          type="text"
          name="text"
          class="input"
        />
      </div>
      <div className="whole">
        <div className="work">
          <div className="another">
            <h1>What do you want to do today?</h1>
            <di className="add">
              <input
                className="input-btn"
                placeholder="Add a new todo item"
                type="text"
                name="text"
              />
              <button>Add</button>
            </di>
            <div className="wholebox">
              <div className="checkbox">
                <input type="checkbox" class="ui-checkbox"></input>
                <h1>Garri</h1>
              </div>
              <div className="newicon">
                <FontAwesomeIcon className="newicons" icon={faDeleteLeft} />
              </div>
            </div>
            <div className="wholebox">
              <div className="checkbox">
                <input type="checkbox" class="ui-checkbox"></input>
                <h1>work</h1>
              </div>
              <div className="newicon">
                <FontAwesomeIcon className="newicons" icon={faDeleteLeft} />
              </div>
            </div>
            <div className="wholebox">
              <div className="checkbox">
                <input type="checkbox" class="ui-checkbox"></input>
                <h1>Pray</h1>
              </div>
              <div className="newicon">
                <FontAwesomeIcon className="newicons" icon={faDeleteLeft} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTodo;
