#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _brainGames = _interopRequireDefault(require("../bin/brain-games"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getArithmeticProgression = () => {
  const userName = (0, _brainGames.default)();
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    let startNumberProgression = Math.floor(Math.random() * Math.floor(100));
    const numberChangeProgression = Math.floor(Math.random() * Math.floor(100));
    const indexProgression = Math.floor(Math.random() * Math.floor(10));
    const resultArithmeticProgression = [];
    let rightAnswer = 0;

    for (let count = 1; count < 10; count += 1) {
      startNumberProgression += numberChangeProgression;
      resultArithmeticProgression.push(startNumberProgression);
    }

    rightAnswer = resultArithmeticProgression[indexProgression];
    resultArithmeticProgression[indexProgression] = '..';
    console.log(`Question: ${resultArithmeticProgression.join(' ')}`);

    const answer = _readlineSync.default.question('Your answer: ');

    if (rightAnswer === parseInt(answer, 10)) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

var _default = getArithmeticProgression;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9wcm9ncmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJnZXRBcml0aG1ldGljUHJvZ3Jlc3Npb24iLCJ1c2VyTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJpIiwic3RhcnROdW1iZXJQcm9ncmVzc2lvbiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm51bWJlckNoYW5nZVByb2dyZXNzaW9uIiwiaW5kZXhQcm9ncmVzc2lvbiIsInJlc3VsdEFyaXRobWV0aWNQcm9ncmVzc2lvbiIsInJpZ2h0QW5zd2VyIiwiY291bnQiLCJwdXNoIiwiam9pbiIsImFuc3dlciIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsd0JBQXdCLEdBQUcsTUFBTTtBQUNyQyxRQUFNQyxRQUFRLEdBQUcsMEJBQWpCO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDRDQUFaOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxJQUFJLENBQTVCLEVBQStCO0FBQzdCLFFBQUlDLHNCQUFzQixHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCRixJQUFJLENBQUNDLEtBQUwsQ0FBVyxHQUFYLENBQTNCLENBQTdCO0FBQ0EsVUFBTUUsdUJBQXVCLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JGLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEdBQVgsQ0FBM0IsQ0FBaEM7QUFDQSxVQUFNRyxnQkFBZ0IsR0FBR0osSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkYsSUFBSSxDQUFDQyxLQUFMLENBQVcsRUFBWCxDQUEzQixDQUF6QjtBQUNBLFVBQU1JLDJCQUEyQixHQUFHLEVBQXBDO0FBQ0EsUUFBSUMsV0FBVyxHQUFHLENBQWxCOztBQUVBLFNBQUssSUFBSUMsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUcsRUFBNUIsRUFBZ0NBLEtBQUssSUFBSSxDQUF6QyxFQUE0QztBQUMxQ1IsTUFBQUEsc0JBQXNCLElBQUlJLHVCQUExQjtBQUNBRSxNQUFBQSwyQkFBMkIsQ0FBQ0csSUFBNUIsQ0FBaUNULHNCQUFqQztBQUNEOztBQUVETyxJQUFBQSxXQUFXLEdBQUdELDJCQUEyQixDQUFDRCxnQkFBRCxDQUF6QztBQUNBQyxJQUFBQSwyQkFBMkIsQ0FBQ0QsZ0JBQUQsQ0FBM0IsR0FBZ0QsSUFBaEQ7QUFFQVIsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsYUFBWVEsMkJBQTJCLENBQUNJLElBQTVCLENBQWlDLEdBQWpDLENBQXNDLEVBQS9EOztBQUNBLFVBQU1DLE1BQU0sR0FBR0Msc0JBQWFDLFFBQWIsQ0FBc0IsZUFBdEIsQ0FBZjs7QUFDQSxRQUFJTixXQUFXLEtBQUtPLFFBQVEsQ0FBQ0gsTUFBRCxFQUFTLEVBQVQsQ0FBNUIsRUFBMEM7QUFDeENkLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDRCxLQUZELE1BRU87QUFDTEQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsSUFBR2EsTUFBTyw2Q0FBNENKLFdBQVksSUFBL0U7QUFDQVYsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsb0JBQW1CRixRQUFTLEdBQXpDO0FBQ0E7QUFDRDtBQUNGOztBQUNEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJGLFFBQVMsR0FBekM7QUFDRCxDQTdCRDs7ZUErQmVELHdCIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcbmltcG9ydCBnZXRVc2VyTmFtZSBmcm9tICcuLi9iaW4vYnJhaW4tZ2FtZXMnO1xuXG5jb25zdCBnZXRBcml0aG1ldGljUHJvZ3Jlc3Npb24gPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJOYW1lID0gZ2V0VXNlck5hbWUoKTtcbiAgY29uc29sZS5sb2coJ1doYXQgbnVtYmVyIGlzIG1pc3NpbmcgaW4gdGhlIHByb2dyZXNzaW9uPycpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgIGxldCBzdGFydE51bWJlclByb2dyZXNzaW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigxMDApKTtcbiAgICBjb25zdCBudW1iZXJDaGFuZ2VQcm9ncmVzc2lvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMTAwKSk7XG4gICAgY29uc3QgaW5kZXhQcm9ncmVzc2lvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMTApKTtcbiAgICBjb25zdCByZXN1bHRBcml0aG1ldGljUHJvZ3Jlc3Npb24gPSBbXTtcbiAgICBsZXQgcmlnaHRBbnN3ZXIgPSAwO1xuXG4gICAgZm9yIChsZXQgY291bnQgPSAxOyBjb3VudCA8IDEwOyBjb3VudCArPSAxKSB7XG4gICAgICBzdGFydE51bWJlclByb2dyZXNzaW9uICs9IG51bWJlckNoYW5nZVByb2dyZXNzaW9uO1xuICAgICAgcmVzdWx0QXJpdGhtZXRpY1Byb2dyZXNzaW9uLnB1c2goc3RhcnROdW1iZXJQcm9ncmVzc2lvbik7XG4gICAgfVxuXG4gICAgcmlnaHRBbnN3ZXIgPSByZXN1bHRBcml0aG1ldGljUHJvZ3Jlc3Npb25baW5kZXhQcm9ncmVzc2lvbl07XG4gICAgcmVzdWx0QXJpdGhtZXRpY1Byb2dyZXNzaW9uW2luZGV4UHJvZ3Jlc3Npb25dID0gJy4uJztcblxuICAgIGNvbnNvbGUubG9nKGBRdWVzdGlvbjogJHtyZXN1bHRBcml0aG1ldGljUHJvZ3Jlc3Npb24uam9pbignICcpfWApO1xuICAgIGNvbnN0IGFuc3dlciA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignWW91ciBhbnN3ZXI6ICcpO1xuICAgIGlmIChyaWdodEFuc3dlciA9PT0gcGFyc2VJbnQoYW5zd2VyLCAxMCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdDb3JyZWN0IScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgXCIke2Fuc3dlcn1cIiBpcyB3cm9uZyBhbnN3ZXIgOyguIENvcnJlY3QgYW5zd2VyIHdhcyBcIiR7cmlnaHRBbnN3ZXJ9XCIuYCk7XG4gICAgICBjb25zb2xlLmxvZyhgTGV0J3MgdHJ5IGFnYWluLCAke3VzZXJOYW1lfSFgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2coYENvbmdyYXR1bGF0aW9ucywgJHt1c2VyTmFtZX0hYCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRBcml0aG1ldGljUHJvZ3Jlc3Npb247XG4iXX0=