let advice = 'https://api.adviceslip.com/advice'
let meowFact= 'https://meowfacts.herokuapp.com'
let animeQuote='https://animechan.xyz/api/random'

document.querySelector('.nextAdvice').addEventListener('click',getAdvice)
document.querySelector('.nextCat').addEventListener('click',getCatFact)
document.querySelector('.nextAnime').addEventListener('click',getAnimeQuote)

function getAdvice(){
    fetch(advice)
        .then(res=>res.json())
        .then(data=>
            document.querySelector('.advice').innerText=data.slip.advice
        )
        .catch(err=>console.log(err))
        document.querySelector('.container').classList.add('green')
        document.querySelector('.container').classList.remove('red')
        document.querySelector('.container').classList.remove('blue')
}
function getCatFact(){
    fetch(meowFact)
    .then(res=>res.json())
    .then(data=>
        document.querySelector('.advice').innerText=data.data[0]
    )
    .catch(err=>console.log(err))
    document.querySelector('.container').classList.remove('green')
    document.querySelector('.container').classList.add('red')
    document.querySelector('.container').classList.remove('blue')
}
function getAnimeQuote(){
    fetch(animeQuote)
    .then(res=>res.json())
    .then(data=>
        document.querySelector('.advice').innerText=data.quote
    )
    .catch(err=>console.log(err))
    document.querySelector('.container').classList.remove('green')
    document.querySelector('.container').classList.remove('red')
    document.querySelector('.container').classList.add('blue')
}