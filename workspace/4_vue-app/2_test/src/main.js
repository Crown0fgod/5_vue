 // 실행했을때 화면 가운데로 출력되는 소스
// import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'

// 전역 컴포넌트 테스트 사용할때 코드들 묶음!
import CheckboxItem from './components/CheckboxItem.vue';

createApp(App)
    .component('CheckboxItem', CheckboxItem)
    .mount('#app')

    // 지역 컴포넌트 테스트 사용할때 코드들 묶음!
    // 전역,지역 컴포넌트할때 마다 주석 해제!
// createApp(App).mount('#app')
