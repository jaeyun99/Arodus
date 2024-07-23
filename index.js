const express = require('express') // express 모듈 가져오기 
const app = express() // 새로운 express 'app' 만들기
const port = 3000 // 포트번호 (자유)

const mongoose = require('mongoose') // 몽구스 사용
mongoose.connect('mongodb+srv://Arodus:mOWk2TzjMQjOvoho@arodus.ao9vsqj.mongodb.net/?retryWrites=true&w=majority&appName=Arodus', { // 몽고DB와 연결
    //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false // 오류 안나오게 하기 위함 - 이걸 사용하면 오류만 더 나옴;;
}).then(() => console.log('몽고DB 연결')) // 연결이 잘 되는지 확인
  .catch(err => console.log(err)) // 에러가 나올경우 캐치


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})