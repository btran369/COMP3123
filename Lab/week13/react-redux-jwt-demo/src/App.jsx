import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import { useSelector } from 'react-redux';

const App = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>React Redux + JWT Demo</h1>
      <p>
        This demo shows Redux concepts (state, store, reducer, action, dispatch, subscribe)
        and how a JWT might be used to store authentication info on the client.
      </p>

      <LoginForm />

      {token ? (
        <Profile />
      ) : (
        <p>Login with password <code>password</code> to see the JWT details.</p>
      )}
    </div>
  );
};

export default App;
