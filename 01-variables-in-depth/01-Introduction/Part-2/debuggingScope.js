function scoreTracker() {
  debugger

  var score

  var addPoints = function (n) {
    score += n
    return `Score updated by ${n}. Present score = ${score}`
  }

  function resetScore() {
    score = 0
    return 'Reset score'
  }

  score = 0
  addPoints(5)
  resetScore()
  debugger
}

scoreTracker()