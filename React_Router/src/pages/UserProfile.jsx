import { useParams } from "react-router-dom";

function UserProfile() {
  const { name } = useParams(); // Extracting "name" from URL

  return (
    <div>
      <h2>Welcome, {name}!</h2>
    </div>
  );
}

export default UserProfile;
