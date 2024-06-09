import { ICategory } from 'src/types/db';

type Props = {
  db: ICategory[],
};

export const Cards = ({ db }: Props) => {
  // Check if db is defined and has at least two categories
  if (!db || db.length <= 1) {
    return <div>No data available</div>;
  }

  // Extract the category you want to display. Here, it's the second category in the db array.
  const selectedCategory = db[1]; 

  // Check if the selected category has products
  if (!selectedCategory.products || selectedCategory.products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div>
      {selectedCategory.products.map((item, index) => (
        <div key={index} className="card">
          <div className="card-img">
            <img
              src={item.image}
              alt={item.title}
              title={item.title}
              width={540}
            />
          </div>
          <div className="card-title">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};
