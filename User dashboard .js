let user = JSON.parse(localStorage.getItem("bajeeking_user"));

if(user){
  document.write(`
    <h2>Welcome ${user.name}</h2>
    <p>Email: ${user.email}</p>
    <p>Phone: ${user.phone}</p>
    <p>WhatsApp: ${user.whatsapp}</p>
    <p>Telegram: ${user.telegram}</p>
  `);
}
