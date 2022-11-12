import { useState,useEffect } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';

function App() {
  const [image,setImage] = useState([])
  const [loading,isLoading] = useState(true)
  const [term,setTerm] = useState('')
  const [search,setSearch] = useState('')
  const submitHandler = function(e){
    e.preventDefault();
    console.log("hi");
    setSearch(term);
  }

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res=>res.json())
    .then(data=>{
  
    setImage(data.hits);
    isLoading(false);
    })
    .catch(err => console.log(err))
  }, [term]) 

  return (
    <div className="container mx-auto">
      <input onChange={(e)=>setTerm(e.target.value)} type="text" className='text-bold px-8 py-4 border-solid border-2 border-black-500 mx-10 my-5 text-xl text-bold'/>

      <button onSubmit={submitHandler} type='submit' className='border-solid border-2 border-black-500 px-5 py-3 bg-black text-white '>Search</button>
      

      <div className="grid grid-cols-4 gap-4">
      {image.map(function(image1){
          return <ImageCard key={image1.id} image={image1} />
      })}
      </div>
    </div>
  );
}

export default App;
