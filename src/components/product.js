import Card from './product-card';
import '../styles/card-list.css';

export function Product(props) {
  const { content } = props;

  return (
    <div className="cards-list">
      {content.map((el, key) => (
        <Card content={el} key={`card-key-${key}`} />
      ))}
    </div>
  )
}