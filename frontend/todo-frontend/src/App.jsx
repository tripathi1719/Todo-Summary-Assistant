import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  // Fetch all todos on load
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("/todos");
      setTodos(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addTodo = async () => {
    if (!text.trim()) return;
    try {
      await axios.post("/todos", { text });
      setText("");
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/todos/${id}`);
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const summarizeTodos = async () => {
    try {
      const res = await axios.post("/summarize", { todos });
      setMessage(res.data.message || "Summary sent!");
    } catch (err) {
      setMessage("Failed to summarize/send.");
    }
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", maxWidth: 600, margin: "0 auto" }}>
      <h1>📝 Todo Summary Assistant</h1>

      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a todo"
          style={{ padding: "8px", width: "70%" }}
        />
        <button onClick={addTodo} style={{ padding: "8px 12px", marginLeft: "8px" }}>Add</button>
      </div>

      <ul style={{ marginTop: "20px" }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "10px" }}>
            {todo.text}
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button onClick={summarizeTodos} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Summarize & Send to Slack
      </button>

      {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}
    </div>
  );
}

export default App;
