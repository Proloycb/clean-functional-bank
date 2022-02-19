function setPlayerStyle(player){
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px';
    player.style.margin = '10px';
    player.style.padding = '10px';
}
const players = document.getElementsByClassName('player');

for(const player of players){
    setPlayerStyle(player);
}

function addPlayer(){
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
        <h class="player-name">New player</h>
        <p>A expedita sit repellendus illum recusandae molestias similique corrupti quos eligendi! Temporibus atque expedita minima, officiis cumque, nulla sint, repellendus impedit voluptatum reprehenderit nostrum provident incidunt commodi? Beatae, voluptate quam.</p>
    `;
    setPlayerStyle(player);
    playersContainer.appendChild(player);
}
document.getElementById('players').addEventListener('click', function(event){
    if(event.target.tagName.toLowerCase()== 'div'){
        event.target.style.backgroundColor = 'yellow';
    }
    else{
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})