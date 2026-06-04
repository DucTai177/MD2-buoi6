async function getUsers() {
  try {
    const request = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await request.json();
    console.log("Danh sách người dùng");
    users.forEach((user) => {
      console.log(user.name);
    });
    return users;
  } catch (error) {
    console.log("có lỗi", error);
  }
}
getUsers();
