export const fetchHelloWorld = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`);
  const data = await response.json();
  return data;
}