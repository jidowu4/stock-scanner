import { useState, useEffect } from 'react'
import finnHub from '../Pages/apis/finnHub';

export const StockList = () =>{
    const [stock, setStock]= useState()
    const [watchlist, setWatchList]=useState(["GOOGL", "MSFT", "AMZN"]);

    useEffect(()=>{
        //when component is mounted, it sets this to true 
        let isMounted = true
        const fetchData = async() =>{
            try{
                //async action, await it 
                const response= await finnHub.get('/quote', {
                    params: {
                        symbol: 'MSFT'
                    }
                })
                //?symbol=MSFT

                ///quote?symbol=MSFT&token=cjjdie1r01qirue67l0gcjjdie1r01qirue67l10
                console.log(response)

                if(isMounted){
                setStock(response.data)
                }
                //the response contains config... we just want the data

                //don't want to call setStock on a component that is unmounted 
            }catch(err){

            }

        }
        fetchData()

        return () => (isMounted = false)
        //do not want to call set stock on an unmounted component 
    }, [])


    return <div>StockList</div>
}