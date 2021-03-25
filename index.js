
var pokemons = [
    {
        id:1,
        name:"Mustafa Aktaş",
        nickname:"Serikli",
        age:"36-47 arası kimse bilmiyor.",
        superpower:"100 kmden karşı cinsi tanıyabilir.",
        weakness:"Para istemeyin.",
        image:"images/misda.jpeg"
        
    },
    {
        id:2,
        name:"Erkan Şahin",
        nickname:"Wanker",
        age:"Evlilik yaşı geldi geçiyor.",
        superpower:"Günde 3.",
        weakness:"Evden çıkmaya dermanı yok.",
        image:"images/erkan.jpeg"        
    },
    {
        id:3,
        name:"Oktay Çiftçi",
        nickname:"DragQueen",
        age:"Daha genç",
        superpower:"İstediği oluncaya kadar herkesin kafasını siker.",
        weakness:"Evden alınmazsa kafasına sıkar.",
        image:"images/okty.jpeg"
    },
    {
        id:4,
        name:"İbrahim Baltaer",
        nickname:"SinirliAdam",
        age:"Gideri var",
        superpower:"Adam bıçaklar. Kızdırmayın.",
        weakness:"Balıktan bahsedin.",
        image:"images/ibo.jpeg"
    }
]
$(function() {
    $(".second").css({"display":"none","color":"white"})
    pokemons.forEach(pokemon => {
        console.log("Start")
        cardAdder(pokemon)
    })
    $(".btn-primary").on('click', event => {
        event.preventDefault()
        $("#main-row").css({"display":"none"})
        $(".second").css({"display":"block"})
        $(".second").addClass("animate__animated animate__backInDown")
        $(".second").on("animationend", event => {
            $(".second").removeClass("animate__animated animate__backInDown")
        })
    })
    $(".btn-danger").on('click', event => {
        $("#main-row").css({"display":"block"})
        $(".second").css({"display":"none"})
        $("#main-row").addClass("animate__animated animate__backInDown")
        $("#main-row").on("animationend", event => {
            $("#main-row").removeClass("animate__animated animate__backInDown")
            $(".second").css({"display":"none"})
        })
    })
    
})
const cardAdder = (card_item) => {
    let card = document.createElement("div")
    card.className="col-lg-3 card h-80 mx-2"
    
    //card.style.width="18rem"
    let image = document.createElement("img")
    image.src = card_item.image
    image.className="card-img-top img-fluid mb-4"
    let card_body = document.createElement("div")
    card_body.className="card-body"
    let heading = document.createElement("h5")
    heading.className="card-title mb-2"
    heading.innerText=card_item.name
    let sub = document.createElement("h6")
    sub.className="card-subtitle mb-3 text-muted"
    sub.innerText=card_item.nickname
    let card_text = document.createElement("p")
    card_text.className="card-text"
    card_text.innerText=card_item.superpower+" "+card_item.weakness
    let btn = document.createElement("button")
    btn.className="btn btn-primary mb-4"
    btn.innerText="Seni Seçtim"
    card.appendChild(image)
    card.appendChild(heading)
    card.appendChild(sub)
    card.appendChild(card_text)
    card.appendChild(btn)
    $("#main-row").append(card)
}