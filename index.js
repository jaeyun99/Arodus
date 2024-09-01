const express = require('express') // express 모듈 가져오기 
const app = express() // 새로운 express 'app' 만들기
const port = 3000 // 포트번호 (자유)

const bodyParser = require('body-parser');
const { User } = require("./models/User"); // User.js 가져오기 

const config = require('./config/key'); // URI 가져오기 

//application/x-www-form-urlencoded - 처럼 생긴 데이터 분석
app.use(bodyParser.urlencoded({extended: true})); //클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게 하는 도구?

//application/json 처럼 생긴 데이터 분석
app.use(bodyParser.json()); //클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게 하는 도구?

const mongoose = require('mongoose') // 몽구스 사용
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})
mongoose.connect('mongodb+srv://Arodus:mOWk2TzjMQjOvoho@arodus.ao9vsqj.mongodb.net/?retryWrites=true&w=majority&appName=Arodus', { // 몽고DB와 연결
    //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false // 오류 안나오게 하기 위함 - 이걸 사용하면 오류만 더 나옴;;
}).then(() => console.log('몽고DB 연결')) // 연결이 잘 되는지 확인
  .catch(err => console.log(err)) // 에러가 나올경우 캐치


app.get('/', (req, res) => {
  res.send('Hello World! 안뇽')
})

app.post('/register', async (req, res) => {
  //화면 가입할 때 필요한 정보들을 client에서 가져오면 그것을 데이터 베이스에 넣어준다
  const user = new User(req.body)

  try {
    const userInfo = await user.save();
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})