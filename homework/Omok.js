// 파이썬의 input() 함수 역할을 하는 사용자 입력을 받는 Node.js 기능
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 5분 지나면 입력 종료되는 기능
let countingTime = setTimeout(function() {
    console.log('5분이 지났습니다. 게임이 종료됩니다.');
    rl.close();
}, 5 * 60 * 1000);

console.log('행, 열 <- 왼쪽과 같은 양식으로 좌표값을 입력해주세요.')
console.log('ex) 1,1 or 1, 1 or 7, 3 or 7,3 등')

let arr = new Array(30);
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(30).fill('');
}

let turn = 0;

// 입력 받고 최신화 된 보드 출력해주는 메서드
function printBoard() {
  for(let i = 0; i < 30; i++) {
      console.log(arr[i].map(cell => cell === '' ? '*' : cell === '흑' ? 1 : 0).join(' '));
  }
}

/*
 이긴사람 있는지 확인하는 메서드
 가로, 세로, 대각석 탐색

 cf. 4중 반복문 오반데... 나중에 수정...
*/
function checkWin(x, y) {
    const directions = [[0, 1], [1, 0], [1, 1], [-1, 1]];

    for(let direction of directions) {
      if(checkLine(x, y, direction)) {
        return true;
      }
    }
  return false;
}


// 한 방향(라인)에 대해 오목이 완성되었는지 확인하는 메서드
function checkLine(x, y, direction) {
    let i = x, j = y, count = 0, xyColor = arr[x][y], used = 0;

    for (let k = 0; k < 5; k++) {
        if (arr[i][j] === xyColor){
            count++;
            i += direction[0];
            j += direction[1];
        }else {
            used = k;
            break;
        }
        if (overRange(i, j)) {
            used = k;
            break;
        }
    }

    i = x - direction[0], j = y - direction[1]
    if (overRange(i,j)) {
        return count == 5;
    }

    for (let k = 0; k < 5 - used; k++) {
        if (arr[i][j] === xyColor){
            count++;
            i -= direction[0];
            j -= direction[1];
        }else {
            break;
        }
        if (overRange(i, j)) {
            break;
        }
    }


    return count === 5;
}

function overRange(x, y) {
    if (x < 0 || x >= 30 || y < 0 || y >= 30) {
        return true;
    }
    return false;
}


/*
    입력값 받아서 보드에 넣는 실질적인 게임 메서드
    + 예외처리
*/
function play() {
    let player = turn % 2 == 0 ? '백' : '흑'; // w for white, b for black
    rl.question(`${player === '흑' ? '흑' : '백'}색 돌을 놓을 좌표를 입력하세요 :`, (inputValue) => {
        let coords = inputValue.split(',');
        let x = parseInt(coords[0]);
        let y = parseInt(coords[1]);

        // 입력값 범위 초과에 대한 예외처리
        if(x < 0 || x >= 30 || y < 0 || y >= 30) {
            console.log("0이상 30미만 값을 입력해주세요.");
            play();
            return;
        }

        // 이미 둔 자리 or 잘못된 입력양식에 대한 예외처리
        if(arr[x][y] !== '') {
            if(arr[x][y] === '흑' || arr[x][y] === '백') {
                console.log("이미 돌을 놓은 자리입니다.");
            }else {
                console.log("올바른 좌표값을 입력하세요.");
                console.log("예시: 1,3 or 1, 3 or 10, 15 등등");
                console.log("잘못된 예시: [1,3] or 1,     2 or 1.2");
            }
            play();
            return;
        }

        arr[x][y] = player;
        printBoard();

        if(checkWin(x, y)) {
            console.log('Game over')
            console.log(`${player === '흑' ? '흑' : '백'}색돌이 승리하였습니다!!`);
            rl.close();
            clearTimeout(countingTime);
        } else {
            turn++;
            play();
        }
    });
}

play();
