import { StockCardProps } from ".";
import './styles.css'

const StockCard = ({stockCard, index, provided} : StockCardProps) => {
   return (    
       <div className="company_row" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
            <p>{`${index}`}</p>
            <p className="company_symbol">
                <span className="symbol">{stockCard.symbol}</span>
            </p>
            <div className="market_cap">                
                <span className="count">{stockCard.marketCap}</span>
                <span>{stockCard.currency}</span> 
            </div>
            <p className="company_name">{stockCard.companyName}</p>
            <p className="company_price">{stockCard.latestPrice}<span> {stockCard.currency}</span> </p>
       </div>
   );
};

export { StockCard }