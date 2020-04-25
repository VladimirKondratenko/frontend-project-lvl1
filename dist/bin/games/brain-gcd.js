#!/usr/bin/env node
"use strict";

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const greatestCommonDivisorGame = () => {
  const userName = (0, _.default)();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const randomNumberOne = Math.floor(Math.random() * Math.floor(100));
    const randomNumberTwo = Math.floor(Math.random() * Math.floor(100));
    let rightAnswer = 2;
    console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);

    for (let count = randomNumberOne; count > 0; count -= 1) {
      if (randomNumberOne % count === 0 && randomNumberTwo % count === 0) {
        rightAnswer = count;
        break;
      } else {
        rightAnswer = 0;
      }
    }

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

greatestCommonDivisorGame();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vZ2FtZXMvYnJhaW4tZ2NkLmpzIl0sIm5hbWVzIjpbImdyZWF0ZXN0Q29tbW9uRGl2aXNvckdhbWUiLCJ1c2VyTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJpIiwicmFuZG9tTnVtYmVyT25lIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tTnVtYmVyVHdvIiwicmlnaHRBbnN3ZXIiLCJjb3VudCIsImFuc3dlciIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLHlCQUF5QixHQUFHLE1BQU07QUFDdEMsUUFBTUMsUUFBUSxHQUFHLGdCQUFqQjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvREFBWjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsSUFBSSxDQUE1QixFQUErQjtBQUM3QixVQUFNQyxlQUFlLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JGLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEdBQVgsQ0FBM0IsQ0FBeEI7QUFDQSxVQUFNRSxlQUFlLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JGLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEdBQVgsQ0FBM0IsQ0FBeEI7QUFDQSxRQUFJRyxXQUFXLEdBQUcsQ0FBbEI7QUFDQVIsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsYUFBWUUsZUFBZ0IsSUFBR0ksZUFBZ0IsRUFBNUQ7O0FBQ0EsU0FBSyxJQUFJRSxLQUFLLEdBQUdOLGVBQWpCLEVBQWtDTSxLQUFLLEdBQUcsQ0FBMUMsRUFBNkNBLEtBQUssSUFBSSxDQUF0RCxFQUF5RDtBQUN2RCxVQUFJTixlQUFlLEdBQUdNLEtBQWxCLEtBQTRCLENBQTVCLElBQWlDRixlQUFlLEdBQUdFLEtBQWxCLEtBQTRCLENBQWpFLEVBQW9FO0FBQ2xFRCxRQUFBQSxXQUFXLEdBQUdDLEtBQWQ7QUFDQTtBQUNELE9BSEQsTUFHTztBQUNMRCxRQUFBQSxXQUFXLEdBQUcsQ0FBZDtBQUNEO0FBQ0Y7O0FBQ0QsVUFBTUUsTUFBTSxHQUFHQyxzQkFBYUMsUUFBYixDQUFzQixlQUF0QixDQUFmOztBQUNBLFFBQUlKLFdBQVcsS0FBS0ssUUFBUSxDQUFDSCxNQUFELEVBQVMsRUFBVCxDQUE1QixFQUEwQztBQUN4Q1YsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNELEtBRkQsTUFFTztBQUNMRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxJQUFHUyxNQUFPLDZDQUE0Q0YsV0FBWSxJQUEvRTtBQUNBUixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJGLFFBQVMsR0FBekM7QUFDQTtBQUNEO0FBQ0Y7O0FBQ0RDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLG9CQUFtQkYsUUFBUyxHQUF6QztBQUNELENBMUJEOztBQTRCQUQseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcbmltcG9ydCBnZXRVc2VyTmFtZSBmcm9tICcuLic7XG5cbmNvbnN0IGdyZWF0ZXN0Q29tbW9uRGl2aXNvckdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJOYW1lID0gZ2V0VXNlck5hbWUoKTtcbiAgY29uc29sZS5sb2coJ0ZpbmQgdGhlIGdyZWF0ZXN0IGNvbW1vbiBkaXZpc29yIG9mIGdpdmVuIG51bWJlcnMuJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgY29uc3QgcmFuZG9tTnVtYmVyT25lID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigxMDApKTtcbiAgICBjb25zdCByYW5kb21OdW1iZXJUd28gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDEwMCkpO1xuICAgIGxldCByaWdodEFuc3dlciA9IDI7XG4gICAgY29uc29sZS5sb2coYFF1ZXN0aW9uOiAke3JhbmRvbU51bWJlck9uZX0gJHtyYW5kb21OdW1iZXJUd299YCk7XG4gICAgZm9yIChsZXQgY291bnQgPSByYW5kb21OdW1iZXJPbmU7IGNvdW50ID4gMDsgY291bnQgLT0gMSkge1xuICAgICAgaWYgKHJhbmRvbU51bWJlck9uZSAlIGNvdW50ID09PSAwICYmIHJhbmRvbU51bWJlclR3byAlIGNvdW50ID09PSAwKSB7XG4gICAgICAgIHJpZ2h0QW5zd2VyID0gY291bnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmlnaHRBbnN3ZXIgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBhbnN3ZXIgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1lvdXIgYW5zd2VyOiAnKTtcbiAgICBpZiAocmlnaHRBbnN3ZXIgPT09IHBhcnNlSW50KGFuc3dlciwgMTApKSB7XG4gICAgICBjb25zb2xlLmxvZygnQ29ycmVjdCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYFwiJHthbnN3ZXJ9XCIgaXMgd3JvbmcgYW5zd2VyIDsoLiBDb3JyZWN0IGFuc3dlciB3YXMgXCIke3JpZ2h0QW5zd2VyfVwiLmApO1xuICAgICAgY29uc29sZS5sb2coYExldCdzIHRyeSBhZ2FpbiwgJHt1c2VyTmFtZX0hYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKGBDb25ncmF0dWxhdGlvbnMsICR7dXNlck5hbWV9IWApO1xufTtcblxuZ3JlYXRlc3RDb21tb25EaXZpc29yR2FtZSgpO1xuIl19