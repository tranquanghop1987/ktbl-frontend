# SiteCoporate
![Build Status](https://travis-ci.org/codecentric/springboot-sample-app.svg?branch=master)
![Coverage Status](https://coveralls.io/repos/github/codecentric/springboot-sample-app/badge.svg?branch=master)

## Requirements
For building and running the application you need:
- [NodeJS >=14 <=18](https://nodejs.org/en) - runtime server and build
- [Yarn 1 or 2](https://yarnpkg.com/) - deps manager, build tool
- [Optional: Concurently](https://www.npmjs.com/package/concurrently) - useful for run parallel both FE and BE

## Running the application locally
- Clone .env
- (optional) Also replace next.config.js
- Run dev or start (Dev is convenient due to of caching)
```shell
yarn develop
```

## Note for best practices coding
- [FE] viết component theo chuẩn: chia rõ smart và dummy component nhé..
- [FE] sử dụng async function để js parser cho nhanh.
- [FE] 1 component có thể viết toàn bộ logic + data vào 1 file hoặc chia nhỏ thành 3 file riêng: UI, Logic và Data.

## Develop
https://strapi-backend-demo-84315734ec99.herokuapp.com/admin
https://kbtl-frontend-042c99353e22.herokuapp.com

## Copyright
KBTL Team
