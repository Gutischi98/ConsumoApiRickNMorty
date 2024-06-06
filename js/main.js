let getCharacter = (done) => {
  const results = fetch("https://rickandmortyapi.com/api/character");

  results
    .then((Response) => Response.json())
    .then((data) => {
      done(data);
    });
};

getCharacter((data) => {
  data.results.forEach((personaje) => {

    const article = document.createRange().createContextualFragment(`
      <article class="card" style="width: 18rem;">
        <img src="${personaje.image}" class="card-img-top" alt="Personaje" />
        <div class="card-body">
          <h3>${personaje.name}</h3>
          <p class="card-text">${personaje.status}</p>
          <p class="card-text">${personaje.species}</p>
        </div>
      </article>
    `);

    const main = document.querySelector("main");

    main.appendChild(article);

  });
});
