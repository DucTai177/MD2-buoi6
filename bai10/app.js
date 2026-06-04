import { getUsers } from "./apiService.js";

async function renderApp() {
  const users = await getUsers();

  // Đề bài yêu cầu dùng map + destructuring + template string
  const htmlCards = users.map(({ name, email, website }) => {
    return `
      <div class="user-card" style="border: 1px solid #ddd; padding: 15px; background: #fff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h3 style="margin-top: 0; color: #007bff;">👤 ${name}</h3>
        <p style="margin: 5px 0;">📧 <strong>Email:</strong> ${email}</p>
        <p style="margin: 5px 0;">🌐 <strong>Website:</strong> <a href="http://${website}" target="_blank" style="color: #28a745; text-decoration: none;">${website}</a></p>
      </div>
    `;
  });

  const fullHtml = htmlCards.join("");

  // ✨ ĐÂY LÀ DÒNG QUAN TRỌNG: Tìm cái thẻ có id là "user-list" trên file HTML và thay thế nội dung của nó
  document.getElementById("user-list").innerHTML = fullHtml;
}

renderApp();
