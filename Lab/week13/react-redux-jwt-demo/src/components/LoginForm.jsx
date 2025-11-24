import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync, logout } from '../features/auth/authSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);
  const token = useSelector((state) => state.auth.token);

  const [username, setUsername] = useState('student@example.com');
  const [password, setPassword] = useState('password');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAsync(username, password));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h2>Login</h2>
      {!token ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Username:{' '}
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <label>
              Password:{' '}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" style={{ marginTop: '0.5rem' }}>
            {status === 'loading' ? 'Logging in...' : 'Login'}
          </button>
        </form>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}

      {status === 'failed' && (
        <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>
      )}
      {status === 'succeeded' && <p style={{ color: 'green' }}>Logged in!</p>}
    </div>
  );
};

export default LoginForm;
