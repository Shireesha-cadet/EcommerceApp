import React ,{createContext,useEffect,useState} from 'react'
// import { createContext } from 'react-router-dom'
import { products } from '../assets/assets';
import { toast } from 'react-toastify';
export const ShopContext=createContext();
import {useNavigate} from "react-router-dom"
const ShopContextProvider = (props) => {
    const currency='$';
    const delivery_fee=10;
    const [search,setSearch]=useState(' ');
    const [showSearch,setShowSearch]=useState(false)
    const [cartItems,setCartItems]=useState({})
    const navigate=useNavigate();
    const addToCart=async (itemId,size)=>{
      if(!size){
        toast.error("Select Product Size")
        return
      }
      let cartData=structuredClone(cartItems)
      if(cartData[itemId]){
        if(cartData[itemId][size]){
          cartData[itemId][size]+=1
        }
        else{
          cartData[itemId][size]=1

        }
      }
      else{
        cartData[itemId]={}
        cartData[itemId][size]=1;
      }
      setCartItems(cartData)
    }
    const getCartCount=()=>{
      let toatlCount=0;
      for(const items in cartItems){
for(const item in cartItems[items]){
  try {
    if(cartItems[items][item]>0){
      toatlCount+=cartItems[items][item];
    }
    
  } catch (error) {
    console.log(error)
    
  }
 
}
      }
       return toatlCount
    }
    const updateQuantity=async(itemId,size,quantity)=>{
      let cartData=structuredClone(cartItems)
      cartData[itemId][size]=quantity;
      setCartItems(cartData)
    }
    const getCartAmount=()=>{
      let totalAmount=0;
      for(const items in cartItems){
        let itemInfo=products.find((product)=>product._id===items)

      for(const item in cartItems[items]){
        try {
          if(cartItems[items][item]>0){
            totalAmount+=itemInfo.price*cartItems[items][item]
          }
        } catch (error) {
          
        }
      }
    }
  return totalAmount}
    useEffect(()=>{

    },cartItems)
     const value={
     products,currency,delivery_fee,
     search,setSearch,showSearch,setShowSearch,
     cartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate
 }

  return (
<ShopContext.Provider value={value}>
    {props.children}
</ShopContext.Provider>

  )
}

export default ShopContextProvider