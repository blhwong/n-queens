/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var board = new Board({n: n});
  var solution = [];
  for (var row = 0; row < n; row++) {

    for (var col = 0; col < n; col++) {
      
      board.togglePiece(row, col);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(row, col);
      }
    }
  }

  for (var i = 0; i < n; i++) {
    solution.push(board.attributes[i]);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  
  
  var factorial = function(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  };

  var solutionCount = factorial(n); //fixme
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  debugger;
  var board = new Board({n: n});
  var solution = [];
  
  var findSolution = function(rowNumber, board) {
    if (rowNumber > n - 1) {
      return;
    }
    var queenFound = false;
    for (var col = 0; col < n; col++) {
      board.togglePiece(rowNumber, col);
      queenFound = true;
      debugger;
      if (!board.hasAnyQueensConflicts() && queenFound) {
        findSolution(++rowNumber, board);
        
      } else {
        board.togglePiece(rowNumber, col);
        queenFound = false;
      }
    }
  };

  findSolution(0, board);

  // var colNumberForFirstRow;
  // colNumberForFirstRow = arguments[1] || 0;
  // debugger;
  // var board = new Board({n: n}); //fixme
  // var solution = [];
  // var queenCount = 0;
  // var colNumberForFirstRow = 0;
  // while (queenCount < n) {
  //   board.attributes[0][colNumberForFirstRow] = 1;
  //   queenCount++;

  //   for (var row = 0; row < n; row++) {

  //     for (var col = 0; col < n; col++) {
  //       if (col === colNumberForFirstRow && row === 0) {
  //         continue;
  //       }
  //       board.togglePiece(row, col);
  //       queenCount++;
  //       if (board.hasAnyQueenConflictsOn(row, col)) {
  //         board.togglePiece(row, col);
  //         queenCount--;
  //       }
  //     }
  //   }  
  //   colNumberForFirstRow++;
  //   if (queenCount < n) {
  //     queenCount = 0;
  //     board = new Board({n: n});
  //   }
  
  

  for (var i = 0; i < n; i++) {
    solution.push(board.attributes[i]);
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
