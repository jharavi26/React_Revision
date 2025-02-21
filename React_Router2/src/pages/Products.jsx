import { useParams } from "react-router";


const Products = () => {
  const { id }  = useParams(); //get the id from the url
  return (
    <div>
      <h1>This is Products Page</h1>
      <p>Product id : {id}</p>
      
    </div>
  )
}

export default Products
