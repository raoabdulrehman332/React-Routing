import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import CategoriesChips from './CategoriesChips'
// import { data } from 'autoprefixer'

export default function Abouts() {

  const [products, SetProducts] = useState([])
  const [category, SetCategory] = useState([])
  const [ChosenCategory, SetChosenCategory] = useState("All")
  
  const [Loder, SetLoder] = useState(true)


useEffect(()=>{

  const url = ChosenCategory == 'All' ?
  `https://dummyjson.com/products` :
  `https://dummyjson.com/products/category/${ChosenCategory}`
  // console.log("url==>",url);
  
  
  fetch(url)
  .then(res => res.json())
  .then((data)=> 
    {
      SetProducts(data.products)
      // console.log('use effect call ho gya');
      SetLoder(false)
    }).catch((err) => {
      console.log(err);
      SetLoder(false)
      
    })
},[ChosenCategory])


useEffect(()=>{

  fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then((data)=> 
  {
    SetCategory(data)
    SetLoder(false)
  }).catch((err) => {
    console.log(err);
    SetLoder(false)
    
  })
},[])



  return (
    <>
     {Loder ? 
     <div className='text-center text-3xl flex items-center justify-center w-full h-full'>Loding...</div> 
     :
      <div>

        <div className='flex flex-wrap justify-between items-center gap-1 my-10'>
        <CategoriesChips category={{

          slug :'All',
          name :'All'
        }
        }
        isChosen={ChosenCategory == 'All'}
        onClick={()=> SetChosenCategory('All')}
        />
        {category.map(data => <CategoriesChips isChosen={data.slug == ChosenCategory} category={data} onClick={()=> SetChosenCategory(data.slug)} key={data.slug} />)}

        

          
        </div>

     <div className='flex flex-wrap -m-4 my-4  '>
       {products.map(data => <Cards  items={data}  key={data.id}   />)}
     </div>
      </div>
     }

    </>
  )
}
