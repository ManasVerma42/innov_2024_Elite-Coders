const selectors = {
    boardContainer: document.querySelector('.board-container'),
    board: document.querySelector('.board'),
    moves: document.querySelector('.moves'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('button'),
    win: document.querySelector('.win')
}

const state = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null
}

const definitions = [
    {"Asset" : "Something valuable that provides future benefit"},
    {"Liability": "Financial debts owed to another party"},
    {"Income": "Money received, especially regularly, from work or investments"},
    {"Profit": "Financial gain when revenue exceeds expenses"},
    {"Revenue": "Income from selling goods or services before deducting expenses"},
    {"Stock": "Share of ownership in a corporation"},
    {"Mortgage": "A mortgage is a property-buying loan. If not repaid, the lender can take the property."},
    {"Depreciation": "Decrease in an asset's value over time"},
];



const words = ["Asset","Liability","Income","Profit","Revenue", "Stock","Mortgage","Depreciation"];
const meanings = [
    "Something valuable that provides future benefit",
    "Financial debts owed to another party",
    "Money received, especially regularly, from work or investments",
    "Financial gain when revenue exceeds expenses",
    "Income from selling goods or services before deducting expenses",
    "Share of ownership in a corporation",
    "A mortgage is a property-buying loan. If not repaid, the lender can take the property.",
    "Decrease in an asset's value over time"]

function shuffleStringArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


const generateGame = () => {
    const dimensions = selectors.board.getAttribute('data-dimension')  

    if (dimensions % 2 !== 0) {
        throw new Error("The dimension of the board must be an even number.")
    }

 
    
    let html ='';
    let htmlArray =[];
    for(let i = 0; i<8;i++ ){
        html += `
        <div class="card">
            <div class="card-front"></div>
            <div class="card-back">
                ${words[i]}
            </div>
        </div>
        `;

        let newElem = `
        <div class="card">
            <div class="card-front"></div>
            <div class="card-back">
                ${words[i]}
            </div>
        </div>
        `
        htmlArray.push(newElem);
    }
    for(let i = 0; i<8;i++ ){
        html += `
        <div class="card">
            <div class="card-front"></div>
            <div class="card-back">
                ${meanings[i]}
            </div>
        </div>
        `;

        let newElem = `
        <div class="card">
            <div class="card-front"></div>
            <div class="card-back">
                ${meanings[i]}
            </div>
        </div>
        `
        htmlArray.push(newElem);
    }



    htmlArray = shuffleStringArray(htmlArray);

    let rinkyia ='';
        for(let z=0;z<16;z++){
            rinkyia += htmlArray[z];
        }
    
    const parser = document.querySelector(".board");

    parser.innerHTML = rinkyia
}

const startGame = () => {
    state.gameStarted = true
    selectors.start.classList.add('disabled')

    state.loop = setInterval(() => {
        state.totalTime++

        selectors.moves.innerText = `${state.totalFlips} moves`
        selectors.timer.innerText = `Time: ${state.totalTime} sec`
    }, 1000)
}

const flipBackCards = () => {
    document.querySelectorAll('.card:not(.matched)').forEach(card => {
        card.classList.remove('flipped')
    })

    state.flippedCards = 0
}

const flipCard = card => {
    state.flippedCards++
    state.totalFlips++

    if (!state.gameStarted) {
        startGame()
    }

    if (state.flippedCards <= 2) {
        card.classList.add('flipped')
    }

    if (state.flippedCards === 2) {
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)');

        console.log(flippedCards[0].innerText);
        console.log(flippedCards[1].innerText);

        var isTrue = false;
        for(let h=0 ; h<definitions.length ; h++){
            const t=definitions[h];
            const a = Object.keys(t)[0];
            const b = Object.values(t)[0];

            console.log(a,b);
            if((flippedCards[0].innerText == a && flippedCards[1].innerText == b) || flippedCards[0].innerText == b && flippedCards[1].innerText == a ){
                isTrue = true;
            }
        }

        let name = `${flippedCards[1].innerText}`;
        if (isTrue === true) {
            flippedCards[0].classList.add('matched')
            flippedCards[1].classList.add('matched')
        }

        setTimeout(() => {
            flipBackCards()
        }, 1000)
    }
    if (!document.querySelectorAll('.card:not(.flipped)').length) {
        setTimeout(() => {
            selectors.boardContainer.classList.add('flipped')
            selectors.win.innerHTML = `
                <span class="win-text">
                    You won!<br />
                    with <span class="highlight">${state.totalFlips}</span> moves<br />
                    under <span class="highlight">${state.totalTime}</span> seconds
                </span>
            `

            clearInterval(state.loop)
        }, 1000)
    }
}

const attachEventListeners = () => {
    document.addEventListener('click', event => {
        const eventTarget = event.target
        const eventParent = eventTarget.parentElement

        if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
            flipCard(eventParent)
        } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
            startGame()
        }
    })
}

generateGame()
attachEventListeners()
