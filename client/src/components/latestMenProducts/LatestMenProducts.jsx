import React,{useEffect} from 'react'
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { getLatestMenProducts,resetProduct } from '../../features/products/productSlice';
import { useDispatch,useSelector } from 'react-redux';

const LatestMenProducts = () => {

  const dispatch = useDispatch();
  const { latestMen, lastestMenAreLoading, lastestMenError, latestMenSuccess, latestMenMessage } = useSelector(state => state.reducer.product);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getLatestMenProducts());
        dispatch(resetProduct());
      } catch (error) {
        console.error(error);
        dispatch(resetProduct());
      }
    }
    fetchData();
  },[dispatch])
  return (
    <section>
      <div className='lg:px-[7rem] md:px-[5rem] px-2 pt-20'>

        <h1 className='text-center text-4xl font-bold mb-5'>Latest Men products</h1>
        <hr />
        <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
          



          
        </div>
        <div className='text-center'>
          <button className='btn btn-active animate-bounce'>Explore more</button>
        </div>
      </div>
    </section>
  )
}

export default LatestMenProducts
