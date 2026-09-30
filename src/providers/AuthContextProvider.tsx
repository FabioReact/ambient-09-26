import AuthContext from '@/context/auth-context';
import { useState, type PropsWithChildren } from 'react';

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [email, setEmail] = useState('secret@email.com');
  const [accessToken, setAccessToken] = useState('secretToken');

  const loginContext = (email: string, token: string) => {
    setEmail(email);
    setAccessToken(token);
  };

  return <AuthContext.Provider value={{ accessToken, email, loginContext }}>
    {children}
  </AuthContext.Provider>;
};

export { AuthContextProvider };