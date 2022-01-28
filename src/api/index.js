const url = "https://localhost:5000/todos";

export const fetchTodos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};
