import React from 'react';
import styles from './SearchBar.module.css';

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = ({ searchYelp}) => {
  const [term, setTerm] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [sortBy, setSortBy] = React.useState('best_match');

  const getSortByClass = (sortByOption) => {
    if (sortBy === sortByOption) {
      return styles.active;
      }
    return '';
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchYelp(term, location, sortBy);
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={() => handleSortByChange(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input placeholder='Search Businesses' />
        <input placeholder='Where?' />
      </div>
      <div className={styles.SearchBarSubmit}>
        <a href='/'>Let's Go</a>
      </div>
  );
};

export default SearchBar;
