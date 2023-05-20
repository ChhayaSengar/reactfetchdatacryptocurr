

let TableRow = ({name, symbol, current_price, fully_diluted_valuation, market_cap, image, index})=>{
  
    return(
        <tr className="ele-row" key={index}>
            <td><img src={image} alt="" /></td>            
            <td>{name}</td>
            <td>{symbol}</td>
            <td>${current_price}</td>
            <td >${fully_diluted_valuation}</td>
            <td>Mkt Cap: ${market_cap}</td>
        </tr>
    )
};

export default TableRow;