import AuthContext from '@/context/auth-context';
import { useState, type PropsWithChildren } from 'react';

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [email, setEmail] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [connected, setConnected] = useState(false);

  const loginContext = (email: string, token: string) => {
    setEmail(email);
    setAccessToken(token);
    setConnected(true);
  };

  return (
    <AuthContext.Provider value={{ accessToken, email, loginContext, connected }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };
