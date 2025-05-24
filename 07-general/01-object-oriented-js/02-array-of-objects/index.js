const fs = require('fs')

const formulaOne = [
  {
    team : 'Mercedes',
    engine: 'Mercedes',
    grandsPrix: 314,
    wins: 128,
    poles: 139,
    fls: 109,
    podiums: 296,
    points: 7743.64,
    driversChampionships: 9,
    teamChampionships: 8,
    formerNames: [
      'Brawn', 'Honda', 'BAR', 'Tyrrell'
    ],
    drivers: [
      {
        name: 'Lewis Hamilton',
        birthday: '07/01/1985',
        carNumber: 44,
        grandsPrix: 353,
        wins: 105,
        poles: 104,
        fastestLaps: 67,
        podiums: 201,
        points: 4829.5,
        championships: 7,
        formerTeams: ['McLaren'],
        team2025: ['Ferrari'] 
      },
      {
        name: 'George Russell',
        carNumber: 63,
        birthday: '15/02/1998',
        grandPrix: 125,
        wins: 2,
        poles: 3,
        fls: 8,
        podiums: 14,
        points: 661,
        championships: 0,
        formerTeams: ['Williams'],
        team2025: ['Mercedes'] 
      }
    ]
  },
  {
    team : 'Red Bull',
    engine: 'Honda',
    grandsPrix: 390,
    wins: 121,
    poles: 103,
    fls: 99,
    podiums: 281,
    points: 7792,
    driversChampionships: 7,
    teamChampionships: 6,
    formerNames: [
      'Jaguar', 'Stewart'
    ],
    drivers: [
      {
        name: 'Max Verstappen',
        birthday: '30/09/1997',
        carNumber: 33,
        grandsPrix: 206,
        wins: 62,
        poles: 40,
        fastestLaps: 33,
        podiums: 111,
        points: 2979.5,
        championships: 3,
        formerTeams: ['Toro Rosso'],
        team2025: ['Red Bull'] 
      },
      {
        name: 'Sergio Perez',
        birthday: '26/01/1990',
        carNumber: 11,
        grandPrix: 278,
        wins: 6,
        poles: 3,
        fls: 12,
        podiums: 39,
        points: 1637,
        championships: 0,
        formerTeams: ['Sauber', 'McLaren', 'Force India', 'Racing Point'],
        team2025: ['Ferrari']
      }
    ]
  },
  {
    team : 'Ferrari',
    engine: 'Ferrari',
    grandsPrix: 1094,
    wins: 247,
    poles: 253,
    fls: 262,
    podiums: 820,
    points: 11885.79,
    driversChampionships: 15,
    teamChampionships: 16,
    formerNames: [],
    drivers: [
      {
        name: 'Charles Leclerc',
        birthday: '16/10/97',
        grandsPrix: 144,
        carNumber: 16,
        wins: 8,
        poles: 26,
        fastestLaps: 10,
        podiums: 41,
        points: 1381,
        championships: 0, 
        formerTeams: ['Alfa Romeo'],
        team2025: ['Ferrari']
      },
      {
        name: 'Carlos Sainz',
        carNumber: 55,
        birthday: '01/09/1994',
        grandPrix: 203,
        wins: 4,
        poles: 6,
        fls: 4,
        podiums: 25,
        points: 1226.5,
        championships: 0,
        formerTeams: ['Toro Rosso', 'Renault', 'McLaren'],
        team2025: ['Williams'] 
      },
      {
        name: 'Oliver Bearman',
        birthday: '08/05/2005',
        carNumber: [38, 50],
        grandPrix: 3,
        wins: 0,
        poles: 0,
        fls: 0,
        podiums: 0,
        points: 7,
        championships: 0,
        formerTeams: [],
        team2025: ['Haas']
      }
    ],
  },
  {
    team : 'McLaren',
    engine: 'Mercedes',
    grandsPrix: 967,
    wins: 188,
    poles: 163,
    fls: 169,
    podiums: 522,
    points: 6884.5,
    driversChampionships: 12,
    teamChampionships: 8,
    formerNames: [],
    drivers: [
      {
        name: 'Lando Norris',
        birthday: '13/11/1999',
        carNumber: 4,
        grandsPrix: 125,
        wins: 3,
        poles: 8,
        fastestLaps: 10,
        podiums: 25,
        points: 964,
        championships: 0,
        formerTeams: [],
        team2025: ['McLaren'] 
      },
      {
        name: 'Oscar Piastri',
        birthday: '06/04/2001',
        carNumber: 81,
        grandPrix: 43,
        wins: 2,
        poles: 0,
        fls: 3,
        podiums: 9,
        points: 359,
        championships: 0,
        formerTeams: [],
        team2025: ['McLaren'] 
      }
    ],
  },
  {
    team : 'Aston Martin',
    engine: 'Mercedes',
    grandsPrix: 93,
    wins: 0,
    poles: 0,
    fls: 3,
    podiums: 9,
    points: 498,
    driversChampionships: 0,
    teamChampionships: 0,
    formerNames: [
      'Racing Point', 'Racing Point Force India', 'Force India', 'Spyker', 'Midland', 'Jordan'
    ],
    drivers: [
      {
        name: 'Fernando Alonso',
        birthday: '29/07/1981',
        carNumber: 14,
        grandsPrix: 398,
        wins: 32,
        poles: 22,
        fastestLaps: 26,
        podiums: 106,
        points: 2379,
        championships: 2,
        formerTeams: ['Renault', 'McLaren', 'Renault', 'Ferrari', 'McLaren', 'Alpine'],
        team2025: ['Aston Martin'] 
      },
      {
        name: 'Lance Stroll',
        birthday: '29/10/1998',
        carNumber: 18,
        grandPrix: 163,
        wins: 0,
        poles: 1,
        fls: 0,
        podiums: 3,
        points: 292,
        championships: 0,
        formerTeams: ['Williams', 'Racing Point'],
        team2025: ['Aston Martin']
      }
    ],
  },
  {
    team : 'Alpine',
    engine: 'Renault',
    grandsPrix: 87,
    wins: 1,
    poles: 0,
    fls: 1,
    podiums: 6,
    points: 497,
    driversChampionships: 0,
    teamChampionships: 0,
    formerNames: [
      'Renault', 'Lotus', 'Renault', 'Benetton', 'Toleman'
    ],
    drivers: [
      {
        name: 'Pierre Gasly',
        birthday: '07/02/1996',
        carNumber: 10,
        grandsPrix: 150,
        wins: 1,
        poles: 0,
        fastestLaps: 3,
        podiums: 5,
        points: 420,
        championships: 0,
        formerTeams: ['Toro Rosso', 'Red Bull', 'Toro Rosso', 'Alpha Tauri'],
        team2025: ['Alpine'] 
      },
      {
        name: 'Esteban Ocon',
        birthday: '17/09/1996',
        carNumber: 31,
        grandPrix: 154,
        wins: 1,
        poles: 0,
        fls: 1,
        podiums: 4,
        points: 445,
        championships: 0,
        formerTeams: ['Manor', 'Force India', 'Renault'],
        team2025: ['Haas'] 
      }
    ],
  },
  {
    team : 'Williams',
    engine: 'Mercedes',
    grandsPrix: 831,
    wins: 114,
    poles: 128,
    fls: 133,
    podiums: 313,
    points: 3637,
    driversChampionships: 7,
    teamChampionships: 9,
    formerNames: [],
    drivers: [
      {
        name: 'Alex Albon',
        birthday: '23/03/1996',
        carNumber: 23,
        grandsPrix: 101,
        wins: 0,
        poles: 0,
        fastestLaps: 67,
        podiums: 0,
        points: 240,
        championships: 0,
        formerTeams: ['Toro Rosso', 'Red Bull'],
        team2025: ['Williams']
      },
      {
        name: 'Franco Colapinto',
        birthday: '27/05/2003',
        carNumber: 43,
        grandPrix: 6,
        wins: 0,
        poles: 0,
        fls: 0,
        podiums: 0,
        points: 5,
        championships: 0,
        formerTeams: [],
        team2025: [] 
      },
      {
        name: 'Logan Sargeant',
        birthday: '31/12/2000',
        carNumber: 2,
        grandPrix: 36,
        wins: 0,
        poles: 0,
        fls: 0,
        podiums: 0,
        points: 1,
        championships: 0,
        formerTeams: [],
        team2025: [] 
      }
    ],
  },
  {
    team : 'RB',
    engine: 'Honda',
    grandsPrix: 372,
    wins: 2,
    poles: 1,
    fls: 4,
    podiums: 2,
    points: 853,
    driversChampionships: 0,
    teamChampionships: 0,
    formerNames: [
      'Alpha Tauri', 'Toro Rosso', 'Minardi'
    ],
    drivers: [
      {
        name: 'Yuki Tsunoda',
        birthday: '11/05/2000',
        carNumber: 22,
        grandsPrix: 84,
        wins: 0,
        poles: 0,
        fastestLaps: 1,
        podiums: 0,
        points: 89,
        championships: 0, 
        formerTeams: [],
        team2025: ['RB']
      },
      {
        name: 'Liam Lawson',
        birthday: '15/02/2002',
        carNumber: 30,
        grandPrix: 8,
        wins: 0,
        poles: 0,
        fls: 0,
        podiums: 0,
        points: 6,
        championships: 0,
        formerTeams: [],
        team2025: ['RB'] 
      },
      {
        name: 'Daniel Ricciardo',
        birthday: '01/07/1989',
        carNumber: 3,
        grandPrix: 257,
        wins: 8,
        poles: 3,
        fls: 17,
        podiums: 32,
        points: 1329,
        championships: 0,
        formerTeams: ['HRT', 'Toro Rosso', 'Red Bull', 'Renault', 'McLaren', 'Alpha Tauri'],
        team2025: [] 
      }
    ],
  },
  {
    team : 'Haas',
    engine: 'Ferrari',
    grandsPrix: 187,
    wins: 0,
    poles: 1,
    fls: 2,
    podiums: 0,
    points: 295,
    driversChampionships: 9,
    teamChampionships: 8,
    formerNames: [],
    drivers: [
      {
        name: 'Nico Hulkenberg',
        birthday: '19/08/1987',
        carNumber: 27,
        grandsPrix: 224,
        wins: 0,
        poles: 1,
        fastestLaps: 2,
        podiums: 0,
        points: 561,
        championships: 0,
        formerTeams: ['Williams', 'Force India', 'Sauber', 'Force India', 'Racing Point', 'Aston Martin'],
        team2025: ['Sauber'] 
      },
      {
        name: 'Kevin Magnussen',
        birthday: '05/10/1992',
        carNumber: 20,
        grandPrix: 182,
        wins: 0,
        poles: 1,
        fls: 2,
        podiums: 1,
        points: 200,
        championships: 0,
        formerTeams: ['McLaren', 'Renault'],
        team2025: [] 
      }
    ],
  },
  {
    team : 'Sauber',
    engine: 'Ferrari',
    grandsPrix: 396,
    wins: 1,
    poles: 1,
    fls: 5,
    podiums: 27,
    points: 865,
    driversChampionships: 0,
    teamChampionships: 0,
    formerNames: [
      'Alfa Romeo', 'Sauber', 'BMW Sauber', 'Sauber'
    ],
    drivers: [
      {
        name: 'Valtteri Bottas',
        birthday: '29/08/1989',
        carNumber: 77,
        grandsPrix: 243,
        wins: 10,
        poles: 20,
        fastestLaps: 19,
        podiums: 67,
        points: 1797,
        championships: 0,
        formerTeams: ['Williams', 'Mercedes', 'Alfa Romeo'],
        team2025: [] 
      },
      {
        name: 'Zhou Guanyu',
        birthday: '30/05/1999',
        carNumber: 24,
        grandPrix: 55,
        wins: 0,
        poles: 0,
        fls: 2,
        podiums: 0,
        points: 12,
        championships: 0,
        formerTeams: ['Alfa Romeo'],
        team2025: []
      }
    ]
  }
]

console.log(formulaOne)

const f1Json = JSON.stringify(formulaOne, null, 2)

fs.writeFile('formulaOneData.json', f1Json, (err) => {
  if (err) {
    console.error('Error writing file: ', err)
  } else {
    console.log('F1 data has been converted to a JSON file')
  }
})

function convertToCsv(data) {
  const headers = [ 
    'Team', 'Engine', 'Team GP', 'Team Wins', 
    'Team Poles', 'Team FLs', 'Team Podiums', 
    'Team Points', 'Drivers WC', 'Teams WC', 
    'Former Names', 
    'Driver Name', 'Birthday', 'Car Number', 
    'Driver GP', 'Driver Wins', 'Driver Poles', 
    'Driver FLs', 'Driver Podiums', 'Driver Points', 
    'Driver Championships', 'Former Teams', 'Team 2025' 
  ] 
  const csvRows = [] 
  csvRows.push(headers.join(',')) 
  
  data.forEach(team => { 
    team.drivers.forEach(driver => { 
      const row = [ 
        team.team, team.engine, team.grandsPrix, 
        team.wins, team.poles, team.fls, 
        team.podiums, team.points, team.driversChampionships, 
        team.teamChampionships, team.formerNames.join('; '), 
        driver.name, driver.birthday, driver.carNumber, 
        driver.grandsPrix, driver.wins, driver.poles, 
        driver.fastestLaps, driver.podiums, driver.points, 
        driver.championships, driver.formerTeams.join('; '), 
        driver.team2025.join('; ') 
      ] 
      csvRows.push(row.join(','))
    }) 
  })
  return csvRows.join('\n')
}

const csvData = convertToCsv(formulaOne)

fs.writeFile('formulaOneData.csv', csvData, (err) => {
  if (err) {
    console.error('Error writing file', err)
  } else {
    console.log('F1 data has been converted to a CSV file')
  }
})