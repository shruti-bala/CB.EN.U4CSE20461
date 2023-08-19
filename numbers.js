const postList = document.getElementById('post-list');

fetch('')
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      postList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });