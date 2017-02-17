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
  var solutionFound = false;

  var findSolution = function(rowNumber, board) {
    if (rowNumber > n - 1) {
      solutionFound = true;
      return;
    }
    for (var col = 0; col < n; col++) {
      board.togglePiece(rowNumber, col);
      if (!board.hasAnyRooksConflicts()) {

        findSolution(rowNumber + 1, board);
        if (solutionFound) {
          return;
        } else if (n > 1 && board.attributes[rowNumber + 1].indexOf(1) < 0) {
          // findSolution not successful
          board.togglePiece(rowNumber, col);
          continue;
        }
      } else {
        board.togglePiece(rowNumber, col);
      }
    }
  };

  findSolution(0, board);

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

  var solutionCount = factorial(n);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var solution = [];
  var solutionFound = false;

  var findSolution = function(rowNumber, board) {
    if (rowNumber > n - 1) {
      solutionFound = true;
      return;
    }
    for (var col = 0; col < n; col++) {
      board.togglePiece(rowNumber, col);
      if (!board.hasAnyQueensConflicts()) {
        findSolution(rowNumber + 1, board);
        if (solutionFound) {
          return;
        } else if (n > 1 && board.attributes[rowNumber + 1].indexOf(1) < 0) {
          // findSolution not successful
          board.togglePiece(rowNumber, col);
          continue;
        }
      } else {
        board.togglePiece(rowNumber, col);
      }
    }
  };

  findSolution(0, board);
  for (var i = 0; i < n; i++) {
    solution.push(board.attributes[i]);
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;

  var board = new Board({n: n});
  var solution = [];
  var solutionFound = false;
  var findSolution = function(rowNumber, board) {
    if (rowNumber > n - 1) {
      solutionCount++;
      return;
    }
    for (var col = 0; col < n; col++) {
      board.togglePiece(rowNumber, col);
      if (!board.hasAnyQueensConflicts()) {
        findSolution(rowNumber + 1, board);
      }
      board.togglePiece(rowNumber, col);
    }
  };

  findSolution(0, board);
  for (var i = 0; i < n; i++) {
    solution.push(board.attributes[i]);
  }


  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
