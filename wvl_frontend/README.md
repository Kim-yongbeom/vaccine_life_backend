# 프론트엔드(REACT)

## REACT 기초 설명 블로그
- https://velog.io/@hyeonyohwan/React-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC
- 출처 : https://velog.io/@hyeonyohwan

### 패키지 설치

- yarn add styled-components axios
- yarn add react-router-dom
- yarn add styled-reset
- yarn add react-icons
- yarn add react-loading
- yarn add dayjs
- yarn add redux
- yarn add react-quill
- yarn add react-toasts
- yarn add react-dropdown

### node_modules
- node_modules -> react-dropdown
- 172줄 
```
var key = option.key || null; (추가)
```
- 181~182줄 
```
onMouseDown: this.setValue.bind(this, value, label, key),
onClick: this.setValue.bind(this, value, label, key),
```           
- 141~150줄 
```
key: "setValue",
    value: function setValue(value, label, key) {
      var newState = {
        selected: {
          value: value,
          label: label,
          key: key
        },
        isOpen: false
      };       
```
