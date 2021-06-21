/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import Stock from '../components/Stock';
// import CategoryFilter from '../components/CategoryFilter';
// import changeFilter from '../actions/actions';

const url = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=10000000000&sector=Technology&dividendMoreThan=0&limit=20&apikey=d289d0796e744a042b2b86117a54900a';

function StocksList({ stocks, filter, changeFilter }) {
  const filteredStocks = filter !== 'All' ? stocks.filter((stock) => stock.category === filter) : stocks;

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {/* <nav className="header">
        <h1 className="book-app">XYZ Finance</h1>
        <p className="booklist-nav">STOCKS</p>
        <CategoryFilter
          handleFilterChange={(e) => changeFilter(e.target.value)}
        />
      </nav>
      <div>
        <div className="books-cms">
          {filteredStocks.map((stock) => (
            <Stock
              key={stock.id}
              stock={stock}
            />
          ))}
          <ul className="users">
            {users.map((user) => {
              const {
                login, symbol, price,
              } = user;
              return (
                <li key={symbol}>

                </li>
              );
            })}
          </ul>
        </div>
      </div> */}
    </>
  );
}
// const mapState = (state) => ({
//   stocks: state.stocks,
//   filter: state.filter,
// });

// const mapDispatch = {
//   changeFilter,
// };

// StocksList.propTypes = {
//   stocks: PropTypes.arrayOf(PropTypes.object).isRequired,
//   filter: PropTypes.string.isRequired,
//   changeFilter: PropTypes.func.isRequired,
// };

export default connect(mapState, mapDispatch)(StocksList);
