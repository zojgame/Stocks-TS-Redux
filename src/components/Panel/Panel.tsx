import { Button, Dropdown, MenuProps } from 'antd';
import { sortItems, priceToLow, priceToHigh, marketKapToHigh, marketKapToLow } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setStockCards, getStocks } from '../../store';
import './styles.css'

const Panel = () => {
  const dispatch = useAppDispatch()
  const stocks = useAppSelector(getStocks)

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    const sortedStocks = Array.from(stocks)
    switch (e.key) {
      case '1':
        sortedStocks.sort(marketKapToHigh)
        dispatch(setStockCards(sortedStocks))
        break;
      case '2':
        sortedStocks.sort(marketKapToLow)
        dispatch(setStockCards(sortedStocks))
        break;
      case '3':
        sortedStocks.sort(priceToHigh)
        dispatch(setStockCards(sortedStocks))
        break;
      default:
        sortedStocks.sort(priceToLow)
        dispatch(setStockCards(sortedStocks))
        break;
    }
  };

  const menuProps = {
    items: sortItems,
    onClick: handleMenuClick,
};
   return (
       <div className='panel'>
        <div className='dropdown_container'>
          <Dropdown menu={menuProps}>
              <Button>
                  Sort by
              </Button>
          </Dropdown>
        </div>
       </div>
   );
};
export { Panel }