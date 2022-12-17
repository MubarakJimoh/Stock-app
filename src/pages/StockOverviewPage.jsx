import {Autocomplete} from '../components/Autocomplete'
import {StockList} from '../components/StockList'
export const StockOverviewPage = () => {
  return (
    <div className='mt-5'>
               <Autocomplete/>
               <StockList/>
    </div>
  )
}

