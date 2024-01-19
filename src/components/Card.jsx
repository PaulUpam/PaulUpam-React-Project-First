import { Link } from "react-router-dom"

const Card = ({userInfo}) => {
const {brand,category,thumbnail
  ,title
,  id}=userInfo
  return (
   <>
   <div className="card card-compact w-96  shadow-xl bg-red-300">
  
   <div className="avatar flex justify-center">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={thumbnail
} />
  </div> 
</div>
  
   <div className="card-body">
     <h2 className="card-title">{brand}</h2>
     <p>{title
}</p>
     <p>{category}</p>
     <div className="card-actions justify-end">

       <Link to={`/profileDetails/${id}`}><button className="btn ">More Details</button> </Link>
     </div>
   </div>
 </div>
   
   </>
  )
}

export default Card