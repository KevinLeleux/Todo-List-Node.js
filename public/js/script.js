const checkboxs = document.querySelectorAll('input[type=checkbox]');

checkboxs.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    let completed = true;
    if (!checkbox.checked) {
      completed = false;
    }
    fetch('/', {
      method: 'PUT',
      body: JSON.stringify({
        completed: completed,
        id: checkbox.id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  });
});
