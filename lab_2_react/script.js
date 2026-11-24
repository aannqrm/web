document.addEventListener('DOMContentLoaded', () => {
  const sysInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language
  };
  localStorage.setItem('system_info', JSON.stringify(sysInfo));
  
  const savedData = JSON.parse(localStorage.getItem('system_info'));
  const sysDiv = document.getElementById('sysInfo');
  if (sysDiv && savedData) {
    sysDiv.innerHTML = `<p><small><b>ОС/Браузер:</b> ${savedData.userAgent} | <b>Платформа:</b> ${savedData.platform}</small></p>`;
  }

  const variantNumber = 1;
  const commentsContainer = document.getElementById('commentsContainer');
  
  fetch(`https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`)
    .then(response => response.json())
    .then(comments => {
      commentsContainer.innerHTML = '';
      comments.forEach(comment => {
        const card = document.createElement('div');
        card.className = 'comment-card';
        card.innerHTML = `<h4>${comment.name} (${comment.email})</h4><p>${comment.body}</p>`;
        commentsContainer.appendChild(card);
      });
    })
    .catch(() => {
      commentsContainer.innerText = 'Помилка завантаження коментарів.';
    });

  const modal = document.getElementById('contactModal');
  const closeBtn = document.getElementById('closeModalBtn');

  setTimeout(() => {
    if (modal) modal.style.display = 'block';
  }, 60000);

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  const themeBtn = document.getElementById('themeToggleBtn');
  const currentHour = new Date().getHours();

  if (currentHour >= 7 && currentHour < 21) {
    document.body.classList.remove('dark-mode');
  } else {
    document.body.classList.add('dark-mode');
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }
});