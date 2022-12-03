$(document).ready(function () {
    $('#playerNameSelcetor').hide()
    $('#scoreboard').hide()
    $('#resultboard').hide()
});
class Player {
    constructor(number) {
        this.name = 'player ' + number
        this.default = true
        this.initPoint()
    }

    setName(name) {
        if (name !== '') {
            this.name = name
            this.default = false
        }
    }
    initBonus() {
        // bonus
        this.snowB = 0;
        this.forestB = 0;
        this.desertB = 0;
        this.marshB = 0;
        this.seaB = 0;
    }
    initPoint() {
        //animal
        this.bear = 0;
        this.salmon = 0;
        this.elk = 0;
        this.hawk = 0;
        this.fox = 0;
        //wild
        this.snow = 0;
        this.forest = 0;
        this.desert = 0;
        this.marsh = 0;
        this.sea = 0;
        //pine
        this.pine = 0;
        // bonus
        this.initBonus()
        // total
        this.animal = 0;
        this.wild = 0;
        this.total = 0;
    }
}
let state = 0;
let playerNumber = 0;
let selectedPlayer = 0;
const players = new Array()

function setPlayerNumber(number) {
    playerNumber = number
    state = 1;
    for (let index = 0; index < number; index++) {
        players[index] = new Player(index + 1)
    }
    $('#playerNumberSelector').hide()
    $('#playerNameSelcetor').show()
    $('#selectedPlayer').text(selectedPlayer + 1)

}

function preName() {
    players[selectedPlayer].setName($('#playerName').val())
    if (selectedPlayer == 0) {
        $('#playerNameSelcetor').hide()
        $('#playerNumberSelector').show()
        state = 0;
    } else {
        selectedPlayer = selectedPlayer - 1
        $('#selectedPlayer').text(selectedPlayer + 1)
        if (!players[selectedPlayer].default) {
            $('#playerName').val(players[selectedPlayer].name)
        }

    }
}

function nextName() {
    players[selectedPlayer].setName($('#playerName').val())
    if (selectedPlayer == (playerNumber - 1)) {
        $('#playerNameSelcetor').hide()
        $('#scoreboard').show()
        state = 2;
        selectedPlayer = 0;
        $('#scoreName').text(players[selectedPlayer].name)
        $('#bear').attr("placeholder", players[selectedPlayer].bear);
        $('#salmon').attr("placeholder", players[selectedPlayer].salmon);
        $('#elk').attr("placeholder", players[selectedPlayer].elk);
        $('#hawk').attr("placeholder", players[selectedPlayer].hawk);
        $('#fox').attr("placeholder", players[selectedPlayer].fox);
        $('#snow').attr("placeholder", players[selectedPlayer].snow);
        $('#forest').attr("placeholder", players[selectedPlayer].forest);
        $('#desert').attr("placeholder", players[selectedPlayer].desert);
        $('#marsh').attr("placeholder", players[selectedPlayer].marsh);
        $('#sea').attr("placeholder", players[selectedPlayer].sea);
        $('#pine').attr("placeholder", players[selectedPlayer].pine);
    } else {
        selectedPlayer = selectedPlayer + 1
        $('#selectedPlayer').text(selectedPlayer + 1)
        if (!players[selectedPlayer].default) {
            $('#playerName').val(players[selectedPlayer].name)
        } else {
            $('#playerName').val('')
        }
    }
}

function preScore() {
    if (Number.isInteger(parseInt($('#bear').val()))) {
        players[selectedPlayer].bear = parseInt($('#bear').val());
    }
    if (Number.isInteger(parseInt($('#elk').val()))) {
        players[selectedPlayer].elk = parseInt($('#elk').val());
    }
    if (Number.isInteger(parseInt($('#hawk').val()))) {
        players[selectedPlayer].hawk = parseInt($('#hawk').val());
    }
    if (Number.isInteger(parseInt($('#salmon').val()))) {
        players[selectedPlayer].salmon = parseInt($('#salmon').val());
    }
    if (Number.isInteger(parseInt($('#fox').val()))) {
        players[selectedPlayer].fox = parseInt($('#fox').val());
    }
    if (Number.isInteger(parseInt($('#snow').val()))) {
        players[selectedPlayer].snow = parseInt($('#snow').val());
    }
    if (Number.isInteger(parseInt($('#forest').val()))) {
        players[selectedPlayer].forest = parseInt($('#forest').val());
    }
    if (Number.isInteger(parseInt($('#desert').val()))) {
        players[selectedPlayer].desert = parseInt($('#desert').val());
    }
    if (Number.isInteger(parseInt($('#marsh').val()))) {
        players[selectedPlayer].marsh = parseInt($('#marsh').val());
    }
    if (Number.isInteger(parseInt($('#sea').val()))) {
        players[selectedPlayer].sea = parseInt($('#sea').val());
    }
    if (Number.isInteger(parseInt($('#pine').val()))) {
        players[selectedPlayer].pine = parseInt($('#pine').val());
    }
    if (selectedPlayer == 0) {
        selectedPlayer = playerNumber - 1
        $('#scoreboard').hide()
        $('#playerNameSelcetor').show()
        state = 0;
    } else {
        selectedPlayer = selectedPlayer - 1;
        initScoreboard()
        $('#scoreName').text(players[selectedPlayer].name)
        $('#bear').attr("placeholder", players[selectedPlayer].bear);
        $('#salmon').attr("placeholder", players[selectedPlayer].salmon);
        $('#elk').attr("placeholder", players[selectedPlayer].elk);
        $('#hawk').attr("placeholder", players[selectedPlayer].hawk);
        $('#fox').attr("placeholder", players[selectedPlayer].fox);
        $('#snow').attr("placeholder", players[selectedPlayer].snow);
        $('#forest').attr("placeholder", players[selectedPlayer].forest);
        $('#desert').attr("placeholder", players[selectedPlayer].desert);
        $('#marsh').attr("placeholder", players[selectedPlayer].marsh);
        $('#sea').attr("placeholder", players[selectedPlayer].sea);
        $('#pine').attr("placeholder", players[selectedPlayer].pine);
    }

}

function nextScore() {
    console.log(selectedPlayer)
    if (Number.isInteger(parseInt($('#bear').val()))) {
        players[selectedPlayer].bear = parseInt($('#bear').val());
    }
    if (Number.isInteger(parseInt($('#elk').val()))) {
        players[selectedPlayer].elk = parseInt($('#elk').val());
    }
    if (Number.isInteger(parseInt($('#hawk').val()))) {
        players[selectedPlayer].hawk = parseInt($('#hawk').val());
    }
    if (Number.isInteger(parseInt($('#salmon').val()))) {
        players[selectedPlayer].salmon = parseInt($('#salmon').val());
    }
    if (Number.isInteger(parseInt($('#fox').val()))) {
        players[selectedPlayer].fox = parseInt($('#fox').val());
    }
    if (Number.isInteger(parseInt($('#snow').val()))) {
        players[selectedPlayer].snow = parseInt($('#snow').val());
    }
    if (Number.isInteger(parseInt($('#forest').val()))) {
        players[selectedPlayer].forest = parseInt($('#forest').val());
    }
    if (Number.isInteger(parseInt($('#desert').val()))) {
        players[selectedPlayer].desert = parseInt($('#desert').val());
    }
    if (Number.isInteger(parseInt($('#marsh').val()))) {
        players[selectedPlayer].marsh = parseInt($('#marsh').val());
    }
    if (Number.isInteger(parseInt($('#sea').val()))) {
        players[selectedPlayer].sea = parseInt($('#sea').val());
    }
    if (Number.isInteger(parseInt($('#pine').val()))) {
        players[selectedPlayer].pine = parseInt($('#pine').val());
    }



    if (selectedPlayer == (playerNumber - 1)) {
        calcResult()
        $('#scoreboard').hide()
        $('#resultboard').show()
        state = 3;
    } else {
        initScoreboard()
        selectedPlayer = selectedPlayer + 1;
        $('#scoreName').text(players[selectedPlayer].name)
        $('#bear').attr("placeholder", players[selectedPlayer].bear);
        $('#salmon').attr("placeholder", players[selectedPlayer].salmon);
        $('#elk').attr("placeholder", players[selectedPlayer].elk);
        $('#hawk').attr("placeholder", players[selectedPlayer].hawk);
        $('#fox').attr("placeholder", players[selectedPlayer].fox);
        $('#snow').attr("placeholder", players[selectedPlayer].snow);
        $('#forest').attr("placeholder", players[selectedPlayer].forest);
        $('#desert').attr("placeholder", players[selectedPlayer].desert);
        $('#marsh').attr("placeholder", players[selectedPlayer].marsh);
        $('#sea').attr("placeholder", players[selectedPlayer].sea);
        $('#pine').attr("placeholder", players[selectedPlayer].pine);
    }
}

function calcResult() {
    //  1st : 3 , 2nd : 1 // 2
    if (playerNumber == 1) {
        players[0].initBonus()
        if (players[0].snow >= 7) {
            players[0].snowB = 2
        }
        if (players[0].forest >= 7) {
            players[0].forestB = 2
        }
        if (players[0].desert >= 7) {
            players[0].desertB = 2
        }
        if (players[0].marsh >= 7) {
            players[0].marshB = 2
        }
        if (players[0].sea >= 7) {
            players[0].seaB = 2
        }
    } else if (playerNumber == 2) {
        players[0].initBonus()
        players[1].initBonus()
        //snow
        if (players[0].snow > players[1].snow) {
            players[0].snowB = 2
        } else if (players[0].snow == players[1].snow) {
            players[0].snowB = 1
            players[1].snowB = 1
        } else if (players[0].snow < players[1].snow) {
            players[1].snowB = 2
        }
        //forest
        if (players[0].forest > players[1].forest) {
            players[0].forestB = 2
        } else if (players[0].forest == players[1].forest) {
            players[0].forestB = 1
            players[1].forestB = 1
        } else if (players[0].forest < players[1].forest) {
            players[1].forestB = 2
        }
        //desert
        if (players[0].desert > players[1].desert) {
            players[0].desertB = 2
        } else if (players[0].desert == players[1].desert) {
            players[0].desertB = 1
            players[1].desertB = 1
        } else if (players[0].desert < players[1].desert) {
            players[1].desertB = 2
        }
        //marsh
        if (players[0].marsh > players[1].marsh) {
            players[0].marshB = 2
        } else if (players[0].marsh == players[1].marsh) {
            players[0].marshB = 1
            players[1].marshB = 1
        } else if (players[0].marsh < players[1].marsh) {
            players[1].marshB = 2
        }
        //sea
        if (players[0].sea > players[1].sea) {
            players[0].seaB = 2
        } else if (players[0].sea == players[1].sea) {
            players[0].seaB = 1
            players[1].seaB = 1
        } else if (players[0].sea < players[1].sea) {
            players[1].seaB = 2
        }

    } else if (playerNumber >= 3) {
        // #1st = 1  #2nd = 1 (3,1)
        // #1st = 2   (2)
        // #1st = 3,4 (1)
        let snows = new Array()
        let forests = new Array()
        let deserts = new Array()
        let marshs = new Array()
        let seas = new Array()
        for (let index = 0; index < playerNumber; index++) {
            players[index].initBonus()
            snows.push(players[index].snow)
            forests.push(players[index].forest)
            deserts.push(players[index].desert)
            marshs.push(players[index].marsh)
            seas.push(players[index].sea)
        }
        //snow
        let bonusSnowIndex = bonus(snows)
        let bonusSnow = 3
        if (bonusSnowIndex['first'].length > 1) {
            bonusSnow = Math.floor(4 / bonusSnowIndex['first'].length)
        }
        bonusSnowIndex['first'].forEach(index => {
            players[index].snowB = bonusSnow
        });
        if (bonusSnowIndex['first'].length == 1 && bonusSnowIndex['second'].length == 1) {
            players[bonusSnowIndex['second'][0]].snowB = 1
        }
        //forest
        let bonusForestIndex = bonus(forests)
        let bonusForest = 3
        if (bonusForestIndex['first'].length > 1) {
            bonusForest = Math.floor(4 / bonusForestIndex['first'].length)
        }
        bonusForestIndex['first'].forEach(index => {
            players[index].forestB = bonusForest
        });
        if (bonusForestIndex['first'].length == 1 && bonusForestIndex['second'].length == 1) {
            players[bonusForestIndex['second'][0]].forestB = 1
        }
        //desert
        let bonusDesertIndex = bonus(deserts)
        let bonusDesert = 3
        if (bonusDesertIndex['first'].length > 1) {
            bonusDesert = Math.floor(4 / bonusDesertIndex['first'].length)
        }
        bonusDesertIndex['first'].forEach(index => {
            players[index].desertB = bonusDesert
        });
        if (bonusDesertIndex['first'].length == 1 && bonusDesertIndex['second'].length == 1) {
            players[bonusDesertIndex['second'][0]].desertB = 1
        }
        //marsh
        let bonusMarshIndex = bonus(marshs)
        let bonusMarsh = 3
        if (bonusMarshIndex['first'].length > 1) {
            bonusMarsh = Math.floor(4 / bonusMarshIndex['first'].length)
        }
        bonusMarshIndex['first'].forEach(index => {
            players[index].marshB = bonusMarsh
        });
        if (bonusMarshIndex['first'].length == 1 && bonusMarshIndex['second'].length == 1) {
            players[bonusMarshIndex['second'][0]].marshB = 1
        }
        //sea
        let bonusSeaIndex = bonus(seas)
        let bonusSea = 3
        if (bonusSeaIndex['first'].length > 1) {
            bonusSea = Math.floor(4 / bonusSeaIndex['first'].length)
        }
        bonusSeaIndex['first'].forEach(index => {
            players[index].seaB = bonusSea
        });
        if (bonusSeaIndex['first'].length == 1 && bonusSeaIndex['second'].length == 1) {
            players[bonusSeaIndex['second'][0]].seaB = 1
        }

    }
    for (let index = 0; index < playerNumber; index++) {
        players[index].animal = players[index].bear + players[index].hawk + players[index].elk + players[index].salmon + players[index].fox
        players[index].wild = players[index].snow + players[index].snowB + players[index].forest + players[index].forestB + players[index].desert + players[index].desertB + players[index].marsh + players[index].marshB + players[index].sea + players[index].seaB
        players[index].total = players[index].animal + players[index].wild + players[index].pine
        $('#resultName').append('<th>' + players[index].name + '</th>')
        $('#resultBear').append('<th>' + players[index].bear + '</th>')
        $('#resultElk').append('<th>' + players[index].elk + '</th>')
        $('#resultHawk').append('<th>' + players[index].hawk + '</th>')
        $('#resultFox').append('<th>' + players[index].fox + '</th>')
        $('#resultSalmon').append('<th>' + players[index].salmon + '</th>')
        $('#resultAnimal').append('<th>' + players[index].animal + '</th>')
        $('#resultSnow').append('<th>' + players[index].snow + ' / +' + players[index].snowB + '</th>')
        $('#resultForest').append('<th>' + players[index].forest + ' / +' + players[index].forestB + '</th>')
        $('#resultDesert').append('<th>' + players[index].desert + ' / +' + players[index].desertB + '</th>')
        $('#resultMarsh').append('<th>' + players[index].marsh + ' / +' + players[index].marshB + '</th>')
        $('#resultSea').append('<th>' + players[index].sea + ' / +' + players[index].seaB + '</th>')
        $('#resultWild').append('<th>' + players[index].wild + '</th>')
        $('#resultPine').append('<th>' + players[index].pine + '</th>')
        $('#resultTotal').append('<th>' + players[index].total + '</th>')
    }

}

function bonus(array) {
    let bestScore = 0
    let secondScore = 0
    let first = new Array()
    let second = new Array()
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (bestScore == element) {
            first.push(index)
        } else if (bestScore < element) {
            secondScore = bestScore
            bestScore = element
            second = first.slice()
            first = new Array()
            first.push(index)
        } else if (secondScore == element) {
            second.push(index)
        } else if (secondScore < element) {
            secondScore = element
            second = new Array()
            second.push(index)
        }
    }
    return {
        first: first,
        second: second
    }
}

function edit() {
    selectedPlayer = playerNumber - 1
    $('#scoreboard').show()
    $('#resultboard').hide()
    initReultboard()

}

function restart() {
    for (let index = 0; index < players.length; index++) {
        players[index].initPoint();
    }
    selectedPlayer = 0
    $('#resultboard').hide()
    $('#scoreboard').show()
    initReultboard()

    state = 2;
    $('#scoreName').text(players[selectedPlayer].name)
    $('#bear').attr("placeholder", players[selectedPlayer].bear);
    $('#salmon').attr("placeholder", players[selectedPlayer].salmon);
    $('#elk').attr("placeholder", players[selectedPlayer].elk);
    $('#hawk').attr("placeholder", players[selectedPlayer].hawk);
    $('#fox').attr("placeholder", players[selectedPlayer].fox);
    $('#snow').attr("placeholder", players[selectedPlayer].snow);
    $('#forest').attr("placeholder", players[selectedPlayer].forest);
    $('#desert').attr("placeholder", players[selectedPlayer].desert);
    $('#marsh').attr("placeholder", players[selectedPlayer].marsh);
    $('#sea').attr("placeholder", players[selectedPlayer].sea);
    $('#pine').attr("placeholder", players[selectedPlayer].pine);
}

function initReultboard() {
    $('#resultName').html('<th scope="col">#</th>')
    $('#resultBear').html('<th scope="row"><img src="img/bear.png" alt="BEAR" height="30"></th>')
    $('#resultElk').html('<th scope="row"><img src="img/elk.png" alt="ELK" height="30"></th>')
    $('#resultHawk').html('<th scope="row"><img src="img/hawk.png" alt="HAWK" height="30"></th>')
    $('#resultFox').html('<th scope="row"><img src="img/fox.png" alt="FOX" height="30"></th>')
    $('#resultSalmon').html('<th scope="row"><img src="img/salmon.png" alt="SALMON" height="30"></th>')
    $('#resultAnimal').html('<th scope="row">Wildlife</th>')
    $('#resultSnow').html('<th scope="row"><img src="img/mnt.png" alt="SNOW" height="30"></th>')
    $('#resultForest').html('<th scope="row"><img src="img/forest.png" alt="FOREST" height="30"></th>')
    $('#resultDesert').html('<th scope="row"><img src="img/desert.png" alt="DESERT" height="30"></th>')
    $('#resultMarsh').html('<th scope="row"><img src="img/marsh.png" alt="MARSH" height="30"></th>')
    $('#resultSea').html('<th scope="row"><img src="img/sea.png" alt="SEA" height="30"></th>')
    $('#resultWild').html('<th scope="row">Habitat</th>')
    $('#resultPine').html('<th scope="row"><img src="img/pine.png" alt="PINE" height="30"></th>')
    $('#resultTotal').html('<th scope="row">Total</th>')
}

function initScoreboard() {
    $('#bear').val('');
    $('#salmon').val('');
    $('#elk').val('');
    $('#hawk').val('');
    $('#fox').val('');
    $('#snow').val('');
    $('#forest').val('');
    $('#desert').val('');
    $('#marsh').val('');
    $('#sea').val('');
    $('#pine').val('');
}