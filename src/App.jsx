import "./App.css";
import CardItem from "./components/CardItem";
import Header from "./components/Header";
import { books } from "./data/books";

function App() {
  const bookElements = books.map((book, index) => {
    return <CardItem key={index} book={book} />;
  });
  return (
    <>
      <Header />
      <div className="content">{bookElements}</div>
    </>
  );
}

export default App;
