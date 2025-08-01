console.log("Welcome to RockPaperScissors!");

const readline = require('readline');

// 1️⃣ 创建 readline 接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

// 2️⃣ 提出问题的函数（循环调用）
function ask() {
    rl.question('Choose rock, paper, or scissors (or type "exit" to quit): ', (input) => {
        const playerMove = input.trim().toLowerCase();
    
        if (playerMove === 'exit') {
            console.log(`\n🏁 Final Score: You ${playerScore} - Computer ${computerScore}`);
            console.log(playerScore > computerScore ? '🏆 You win the game!' : playerScore < computerScore ? '😢 You lose the game!' : '🤝 It\'s a draw!');
            rl.close(); // 4️⃣ 关闭 readline 接口
            return;
          }

           // 5️⃣ 判断有效输入
        if (!choices.includes(playerMove)) {
            console.log('❗ Invalid input. Please type rock, paper, or scissors.\n');
        ask(); // 继续下一轮
        return;
      }

         // 6️⃣ 电脑出拳
        const computerMove = choices[Math.floor(Math.random() * 3)];
        console.log(`🧍 You chose: ${playerMove}`);
        console.log(`💻 Computer chose: ${computerMove}`);


         // 7️⃣ 判断胜负
        if (playerMove === computerMove) {
            console.log('🤝 It\'s a draw!');
       } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'scissors' && computerMove === 'paper') ||
        (playerMove === 'paper' && computerMove === 'rock')
    ) {
         console.log('✅ You win this round!');
         playerScore++;
    } else {
    console.log('❌ You lose this round!');
    computerScore++;
     }

     // 8️⃣ 显示比分 & 继续下一轮
    console.log(`Score: You ${playerScore} - Computer ${computerScore}\n`);
    ask(); // 再次提问（递归调用）
    });
}

// 9️⃣ 开始游戏
console.log('🎮 Welcome to Rock Paper Scissors!');
ask();