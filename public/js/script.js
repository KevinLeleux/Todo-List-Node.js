const checkboxs = document.querySelectorAll('input[type=checkbox]');

checkboxs.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    let completed = true;
    if (!checkbox.checked) {
      completed = false;
    }
    fetch('/', {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify({
        completed: completed,
        id: checkbox.id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.error('Une erreur est survenue :', error); // Gère les erreurs
      });
  });
});
