import { createContext, useContext } from 'react';

type AuthContextType = {
  accessToken: string;
  email: string;
  loginContext: (email: string, token: string) => void;
};

const AuthContext = createContext<AuthContextType>({
    accessToken: 'helloWorld',
    email: 'email@email.com',
    loginContext: () => {},
});

export const useAuthContext = () => useContext(AuthContext)

export default AuthContext