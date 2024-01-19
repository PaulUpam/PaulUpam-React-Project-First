const ProfileCard = ({ single }) => {
  const { brand, description, price, category, title, thumbnail } = single;

  return (
    <>
     <div className="container mx-auto mt-10 h-[86vh]"> <div className="card card-side  shadow-xl w-[50%] mx-auto bg-amber-200">
        <figure>
          <img src={thumbnail} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Brand : {brand}</p>
          
          <p>{description}</p>
          <p>Category: {category}</p>
          <p>Phone: {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div></div>
    </>
  );
};

export default ProfileCard;
