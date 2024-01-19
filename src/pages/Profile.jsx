import { useParams } from "react-router";
import ProfileCard from "../components/ProfileCard";
import { useEffect, useState } from "react";

const Profile = () => {
  const { id } = useParams();
  const [singleUser, setSingleUser] = useState({});

  const getSingleUser = () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleUser(data));
  };
  useEffect(() => {
    getSingleUser();
  }, []);

  console.log(singleUser);

  return <ProfileCard single={singleUser} />;
};

export default Profile;
