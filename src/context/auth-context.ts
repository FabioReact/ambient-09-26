import { createContext, useContext } from 'react';

type AuthContextType = {
  connected: boolean;
  accessToken: string;
  email: string;
  loginContext: (email: string, token: string) => void;
};

const AuthContext = createContext<AuthContextType>({
    connected: false,
    accessToken: '',
    email: '',
    loginContext: () => {},
});

export const useAuthContext = () => useContext(AuthContext)

export default AuthContext