const games = [];
games[0] = {
    name: 'Crash Bandicoot N. Sane Trilogy',
    price: 1060,
    sold: 20,
    console: 'PS4',
};
games[1] = {
    name: 'Lego Marvel Super Heroes',
    price: 700,
    sold: 25,
    console: 'XBOX',
};
games[2] = {
    name: 'Gta V',
    price: 1449,
    sold: 30,
    console: 'PS4',
};
games[3] = {
    name: 'Mortal Kombat Xl',
    price: 1190,
    sold: 34,
    console: 'PS4',
};
games[4] = {
    name: 'Gta V',
    price: 1250,
    sold: 60,
    console: 'XBOX',
};
games[5]= {
    name: 'Fifa 2017',
    price: 890,
    sold: 15,
    console: 'PS4',
};
games[6] = {
    name: 'Uncharted 4',
    price: 950,
    sold: 30,
    console: 'PS4',
};
games[7] = {
    name: 'Mortal Kombat Xl',
    price: 940,
    sold: 30,
    console: 'XBOX',
};
games[8] = {
    name: 'Need For Speed',
    price: 790,
    sold: 10,
    console: 'PS4',
};
games[9] = {
    name: 'Lego Batman',
    price: 1000,
    sold: 18,
    console: 'PS4',
};
games[10] = {
    name: 'Fifa 17',
    price: 1290,
    sold: 12,
    console: 'PS4',
};
games[11] = {
    name: 'Resident Evil 7',
    price: 1390,
    sold: 10,
    console: 'PS4',
};
games[12] = {
    name: 'Dragon Ball XX',
    price: 1390,
    sold: 25,
    console: 'XBOX',
};

const newGamesArray = games.map(game => {
    return {
      ...game,
      showDetail: () => {
        console.log(
          `Name: ${game.name} \nPrice: ${game.price}\nSold: ${game.sold}\nConsole: ${game.console}`
        );
      }
    };
  });
  
  const consoleTypeToFilter = "PS4";
  
  const ps4GamesArray = newGamesArray.filter(
    game => game.console === consoleTypeToFilter
  );
  
  const budgetResult = ps4GamesArray.reduce((accumulator, game) => {
    return { price: accumulator.price + game.price };
  });
  
  console.log(
    `I need ${budgetResult.price} CAD to get all this PS$ great games!!`
  );
  
  let gameNames = [];
  let gamePrices = [];
  const getNewArrays = function(game) {
    gameNames.push(game.name);
    gamePrices.push(game.price);
  };
  
  ps4GamesArray.forEach(getNewArrays);
  
  const showArrayValues = function(arrayValue) {
    arrayValue.forEach(value => {
      console.log(value);
    });
  };
  
  showArrayValues(gameNames);
  showArrayValues(gamePrices);