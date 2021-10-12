# wise_vaccine_life

<img width="1366" alt="슬기로운 백신생활 2021-10-11 17-59-45" src="https://user-images.githubusercontent.com/86070069/136762866-01dbc19d-31fd-4a89-84da-c807dd0cecca.png">

슬기로운 백신생활 백신 접종 후기 SNS 플랫폼 - MERN Stack Project

API 명세서 : https://github.com/hyunwoo-developer/wise_vaccine_life/wiki

### 서버 패키치 설치

- npm install multer multer-s3 aws-sdk
- npm install elasticsearch
- npm install cors
- npm install jsonwebtoken
- npm install mongoose
- npm install bcrypt --save

### bcrypt 사용법 (비밀번호 암호화)

- (https://velog.io/@chy0428/Node-JS-Bcrypt%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%A0%95%EB%B3%B4-%EC%95%94%ED%98%B8%ED%99%94%ED%95%98%EA%B8%B0)

### cors 추가

- app.js 에
- const cors = require("cors");
- var app = express();
- app.use(cors());

### 리액트 설치

- npx create-react-app [폴더이름]
