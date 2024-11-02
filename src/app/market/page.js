'use client'
import { useAccount } from "wagmi";
import toast, {Toaster} from 'react-hot-toast';
import { useEffect } from "react";
const market = () => {
      const account = useAccount()

    useEffect(() => {

   
    

            if(!account.isConnected)
                {
                   
                    toast.error('Connect The Wallet')
                }
                else{
             
                toast.success('wallet connected');
                }
    }, [account.isConnected])

    


    
    return (
        <div className="h-screen">Market
        </div>

    )

}

export default market;