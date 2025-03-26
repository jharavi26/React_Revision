import { useParams } from "react-router-dom";

function UserProfile() {
  const { name } = useParams(); // Extracting "name" from URL

  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div>

      <h2>Welcome, {formattedName}!</h2>
    </div>
  );
}

export default UserProfile;
