type UserParams = { email: string; password: string };

type UserResponse = {
  accessToken: string;
  user: { email: string; password: string };
};

export const registerUser = async ({ email, password }: UserParams): Promise<UserResponse> => {
  return fetch('http://localhost:3001/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => response.json());
};
