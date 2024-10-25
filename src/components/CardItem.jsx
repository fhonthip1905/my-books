import "./CardItem.css";

export default function CardItem(props) {
  const { book } = props;
  return (
    <div className="card-item">
      <img className="item-img" src={book.img} alt="" />

      <div className="item-text">
        <div className="item-title">{book.title}</div>
        <div className="item-author">ผู้เขียน : {book.author}</div>
      </div>
    </div>
  );
}
