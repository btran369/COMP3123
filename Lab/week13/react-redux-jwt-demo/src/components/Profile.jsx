import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  if (!user) {
    return null;
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h2>JWT Information</h2>
      <p><strong>Subject (sub):</strong> {user.sub}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Issued At (iat):</strong> {user.iat}</p>

      <h3>Raw JWT</h3>
      <code style={{ display: 'block', wordWrap: 'break-word' }}>{token}</code>
    </div>
  );
};

export default Profile;
