const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function registerUser(data: {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}) {
  const response = await fetch(`${API_URL}/api/auth/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
}