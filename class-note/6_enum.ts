enum Shoes {
  Nike, // 0
  Adidas // 1
}

const myShoes = Shoes.Nike;
console.log(myShoes); // 0 

enum Sneakers {
  NewBalance = '뉴발란스',
  Puma = '퓨마'
}

const mySneakers = Sneakers.NewBalance
console.log(mySneakers); // 뉴발란스

// 예제
enum Answer {
  Yes = 'Y',
  No = 'N'
}
function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) console.log('정답입니다');
  if (answer === Answer.No) console.log('오답입니다');
}

askQuestion(Answer.Yes)
askQuestion(Answer.No)
// askQuestion('yes') (오류)
// askQuestion('예스') (오류)
// askQuestion('y') (오류)