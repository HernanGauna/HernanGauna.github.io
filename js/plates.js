

const platosContainer = document.querySelector('.plates');





function TraerPlatos() {
    const URL = 'https://jellybellywikiapi.onrender.com/api/Recipes?pageIndex=1&pageSize=12';
    fetch( URL)
        .then( resp => {
            return resp.json()
        }).then( resp => {
            const platos = resp.items;
            
        platos.forEach(plato => {
            console.log(plato)
            const article = document.createElement('article');
            article.classList.add('plate')
            const templateHTML  = `
            <img src="${plato.imageUrl}" alt="imagen plato">
            <div class="plate-container">
                <h3>${plato.name}</h3>
            <p>${plato.description}</p>
            </div>
            <div class="footer-plate">
                <img src="/css/images/platos/estrellas-puntaje.png" alt="">
                <a class="plate-price">35$</a>
            </div>`;
            article.innerHTML = templateHTML;
            
            platosContainer.appendChild(article)
           
         });
         
        })
}

TraerPlatos();