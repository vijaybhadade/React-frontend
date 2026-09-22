import './App.css';
import Card from "./components/Card";
import users from "./components/users.js";

function App() {
  return (
    <div className="parent">
      {users.map((item) => (
        <Card key={item.id} img={item.url} company={item.company}  title={item.title} price={item.price} location={item.location} time={item.time} level={item.level}/>
      ))}
    </div>
  );
}

export default App;