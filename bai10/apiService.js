export async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Lỗi kết nối server!");
    return await response.json();
  } catch (error) {
    console.error("Lỗi apiService:", error);
    return [];
  }
}
