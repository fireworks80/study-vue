<template>
  <div id="app">
    <p>시도: {{tries.length}}</p>
    <form @submit.prevent="checkAnswer">
      <p>
        <input ref="input" type="text" maxlength="4" v-model="result" />
        <button>click</button>
      </p>
    </form>
    <ul>
      <li v-for="(t, idx) in tries" :key="idx">
        <p>{{t.tryNumber}}</p>
        <p>{{t.result}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
const getRandomNum = () => {
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const getNums = [];
  for (let i = 0; i < 4; i += 1) {
    getNums.push(num.splice(Math.floor(Math.random() * num.length), 1)[0]);
  }
  return getNums;
};
export default {
  name: "App",
  data() {
    return {
      tries: [],
      answer: "",
      result: ""
    };
  },
  created() {
    this.answer = getRandomNum();
  },
  methods: {
    checkAnswer() {
      let strike = 0;
      let ball = 0;
      const newResult = this.result.split("").map(s => Number(s));

      if (this.result === this.answer.join("")) {
        this.endGame("정답입니다");
      } else {

        if (this.tries.length >= 4) {
          this.endGame(`정답은 ${this.answer.join("")} 입니다`);
          return;
        }

        for (let i = 0; i < this.result.length; i += 1) {
          if (this.answer[i] === newResult[i]) {
            strike += 1;
          } else if (this.answer.includes(newResult[i])) {
            ball += 1;
          }
        }
        this.tries.push({
          tryNumber: this.result,
          result: `strike: ${strike}, ball: ${ball}`
        });
      }

      this.$refs.input.focus();
      this.result = "";
    },
    endGame(str) {
      alert(str);
      this.resetGame();
    },
    resetGame() {
      this.result = "";
      this.tries = [];
      this.answer = getRandomNum();
    }
  }
};
</script>
