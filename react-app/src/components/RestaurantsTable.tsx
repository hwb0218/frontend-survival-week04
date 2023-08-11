import type { Restaurant } from '../types/restaurants';

type RestaurantsTableProps = {
  restaurants: Restaurant[]
}

export default function RestaurantsTable({ restaurants }: RestaurantsTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ textAlign: 'left' }}>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <tr key={restaurant.id}>
            <td>{restaurant.name}</td>
            <td>{restaurant.category}</td>
            <td>
              <ul style={{ listStyle: 'none' }}>
                {restaurant.menu.map((food) => (
                  <li key={food.id} style={{ marginBottom: '1rem' }}>
                    <span>{`${food.name}(${food.price.toLocaleString()}원)`}</span>
                    <button type="button" style={{ float: 'right', marginLeft: '0.5rem' }}>선택</button>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
