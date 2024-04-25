import './App.css';

import BuisnessList from '../components/businessList';;
import SearchBar from './components/searchBar';

const business = {
  imageSrc: 'https:s3.amazon.com//codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'Margherita Pizza',
  address: '1234 Cherry Lane',
  city: 'San Francisco',
  state: 'CA',
  zipcode: '94111',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

const App = () => {
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar />
      <BuisnessList businesses={businesses} />
    </div>
  );
};
export default App;
