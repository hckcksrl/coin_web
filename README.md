# 한국 4대 거래소 대표 코인 

# 프로젝트

### 서버

* 각 거래소의 대표 가상화폐의 데이터를 전달받음
* 전달받은 데이터를 Redis를 사용해 저장
* Django Server에서 Redis를 사용해 데이터를 받아옴
* 받아온 데이터를 Serializer를 사용해 python datatype으로 변환
* 변환한 Serializer Data를 프론트에 Response
* Crontab을 사용해 1분마다 데이터를 Refresh

### 프론트

* React-Router-Dom을 사용해 각 거래소 api를 생성
* setinterval 을 사용해 1분마다 서버에 데이터를 요청해 데이터 refresh


# 담당

* 서버, 프론트 개발
* Redis를 사용해 캐시데이터 사용 

## Stack

* React
* Django
* Redis
* Open API

# 첨부

### Github

* 서버 : https://github.com/hckcksrl/coin_site
* 프론트 : https://github.com/hckcksrl/coin_web
