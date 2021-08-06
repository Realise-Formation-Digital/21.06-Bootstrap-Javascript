async function test () {
  
    // axios c'est un librarie, il doit etre importe 
    // dans l'html avant votre fichier js
    const result = await axios.get('https://api.punkapi.com/v2/beers')

    for (let p = 0; p < result.data.length; p++) {

        // Div get on the HTML
        const listCardBeers = document.getElementById('listbeers')

        // j'ai cree l'element div card principal
        const card = document.createElement('div')
        card.setAttribute("class", "card")
        card.setAttribute("style", "width: 18rem;")

        // j'ai cree l'element img que je vais attacher a l'element card principal
        const imageCard = document.createElement('img')
        imageCard.setAttribute("src", result.data[p].image_url)
        imageCard.setAttribute("class", "card-img-top")
        imageCard.setAttribute("style", "width: 20%")
        imageCard.setAttribute("alt", result.data[p].name)
        card.appendChild(imageCard)

        // J'ai cree le card body
        const cardBody = document.createElement('div')
        cardBody.setAttribute("class", "card-body")

        // j'ai cree l'element h5 et je vais l'attacher a l'element card body
        const h5 = document.createElement('h5')
        h5.setAttribute("class", "card-title")
        h5.innerText = result.data[p].name
        cardBody.appendChild(h5)

        // j'ai cree l'element p et je vais l'attacher a l'element card body
        const paragraph = document.createElement('p')
        paragraph.setAttribute("class", "card-text")
        paragraph.innerText = result.data[p].description
        cardBody.appendChild(paragraph)

        //J'attache l'element card body a l'element card cree avant
        card.appendChild(cardBody)

        //J'attache tout la card virtuel a l'element dans l'HTML
        listCardBeers.appendChild(card)

    }

}

test();