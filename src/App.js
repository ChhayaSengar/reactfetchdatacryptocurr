import { useState, useEffect } from 'react';
import './App.css';
import TableRow from './Components/Table';

function App() {
  
  let [currencies, setCurrencies] = useState("");

  useEffect(() => {

    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setCurrencies(data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  



  return (
    <div className="App">
       <table>
        {
          currencies !== "" &&
          currencies.map((currency, index)=>{
          return <TableRow 
           
            name={currency.name} 
            symbol = {currency.symbol} 
            current_price = {currency.current_price} 
            fully_diluted_valuation = {currency.fully_diluted_valuation} 
            market_cap = {currency.market_cap} 
            image = {currency.image} 
            index={index}>
          </TableRow>
          
          })
        }
       </table>
    </div>
  );
}

export default App;
