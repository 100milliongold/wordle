# 해결방안
[해결 방안 보기](solution.md) 

# **Wordle**
6번의 시도 안에 오늘의 **워들**을 알아내세요. 

UI/UX는 [해당 URL](https://www.nytimes.com/games/wordle/index.html)의 워들과 비슷하게 구성하면 됩니다. 
# **게임방법**
워들은 6번의 시도로 주워진 5글자의 영어단어를 추측하는 게임입니다.

만약 주워진 영어단어가 **WORLD**이고 단어 WEARY라는 단어를 입력했다고 하면 아래처럼 표시됩니다. 
![image](https://github.com/buzzvil-assignments/FE-Assignment-Template--ing-/assets/90582400/d2b19d5d-8428-4bd7-bdae-230156d718a5)
각색이 의미하는 것은

만약 타일이 **초록색**으로 표시된다면:
- 표시된 글자가 워들에 존재한다. 
- 표시된 글자가 정확히 같은 위치에 위치한다.
  
만약 타일이 **노란색**으로 표시된다면:
- 표시된 글자가 워들에 존재한다.
- 하지만 정확히 같은 위치에 있지는 않다.

만약 타일이 **회색**으로 표시된다면:
- 이 글자는 워들에 없는 글자이다.
- 같은 글자를 둘 이상 제시했을 때 워들에 존재하는 개수보다 더 많은 경우에도 이렇게 표시된다. 
# **조건**
1. 첫 페이지에 들어오면 두가지 버튼이 있습니다. 시작하기(정답은 WORLD로 고정), 워들 생성하기
2. 워들 생성하기 버튼을 누르면 5글자로 된 워들을 직접 생성 가능합니다.
- URL라우팅을 통해 생성한 워들을 풀이 가능하게 합니다. (브라우저를 종료해도 해당 URL로 접속하면 풀이하던 워들이 남아있어야 합니다. 또한 “해시(암호화)된 단어”가 포함된 URL을 다른 사람들에게 보낸 경우, 동작해야합니다.)
- URL을 통해 바로 정답이 노출되면 안됩니다. 예 (정답이 WORLD일 경우 잘못된 예 :localhost:xxxx/WORLD → 올바른 예 localhost:xxxx/AgagG)
3. 입력되는 값들은 실제로 존재하는 단어야만 합니다.
- 단어 검증은 [해당 API](https://dictionaryapi.dev/)에 요청을 보내서 검증합니다.
- 단어 검증 실패시, 단어를 찾을 수 없습니다 라는 메세지가 표시됩니다.
4. 게임이 끝나게 되면 결과 창에 표시되어야 할 값들
- 이번 게임 플레이시간
- 현재까지 워들을 승리한 횟수
- 현재까지의 워들 승률
- 현재까지 워들 시도한 횟수의 통계
5. 자신이 문제를 해결한 방법을 문서에 남겨야 합니다.
6.  실제 회사에서 프로덕션 레벨에서 사용하는 프로젝트라 생각하고 구현해주세요.
# **제출 기한 및 결과 제출**
- 제출 기한은 7일이며 필요한 경우 담당자와 조율할 수 있습니다. 
- 위 내용을 구현한 프로젝트를 주어진 github main 브랜치에 반영한 뒤, 제출 완료 이메일을 버즈빌 채용 담당자에게 보냅니다. 