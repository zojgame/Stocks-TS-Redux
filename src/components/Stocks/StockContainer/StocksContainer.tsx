import { getMostActive } from "../../../api";
import { StockType } from "../../../types";
import { STOCKS_PER_PAGE } from "../../../consts";
import { usePage, useAppDispatch, useAppSelector } from "../../../hooks";
import { setStockCards, getStocks } from "../../../store";
import { StockCard } from "../";

import { useEffect, useState } from "react";
import { LoadingOutlined } from '@ant-design/icons';
import './styles.css'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'

const StocksContainer = () => {
  const page = usePage()
  const listLimit = page * STOCKS_PER_PAGE
  const dispatch = useAppDispatch()
  const stocks = useAppSelector(getStocks)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {    
    getMostActive(onDataRecieve, listLimit)    
  }, [page]);

  const onDataRecieve = (error: Error | null, data: StockType[]) => {
    if(error){
      console.error(error)
      setIsLoading(false)
    }
    else{
      const newData = data.slice(listLimit - STOCKS_PER_PAGE)
      dispatch(setStockCards(newData))
      setIsLoading(false)
    }
  }

  const handleOnDragEnd = (result : DropResult) => {
    if (!result.destination) return;

    const items = Array.from(stocks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(setStockCards(items))
  }
  
   return (
       <div className="stocks_container">
        {isLoading 
          ? <LoadingOutlined className='loading'/> 
          : <div className='stocks_table'>
              <div className="stock_title">
                <div>№</div>  
                <div>Symbol</div>
                <div>Marker Kap</div>
                <div>Company name</div>
                <div>Last Price</div>
              </div>          

            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="stocks">
                {provider => (
                  <div ref={provider.innerRef} {...provider.droppableProps}>
                    {stocks.map((stock, index) => 
                      <Draggable key={stock.companyName} draggableId={stock.companyName} index={index}>
                        {provided => 
                          <StockCard index={index + 1} stockCard={stock} key={stock.companyName} provided={provided}/>
                        }
                      </Draggable>
                    )}
                    {provider.placeholder}  
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        }                 
       </div>
   );
};

export { StocksContainer }