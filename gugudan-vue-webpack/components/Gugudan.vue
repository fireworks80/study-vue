<template>
  <div>
    <p>{{num1}} X {{num2}}</p>
    <inputEl ref="inputEl" type="text" v-model="answer"><button @click="submit">정답</button>
    <p>{{trueOrFalse}}</p>
  </div>
</template>
<script>
export default {
  name: 'GuGuDan',
  data() {
    return {
      num1: 0,
      num2: 0,
      answer: '',
      trueOrFalse: '',
      inputEl: null
    };
  },
  created () {
    this.createQuestion();
  },
  mounted () {
    this.inputEl = this.$refs.inputEl;
    this.inputEl.focus();
  },
  methods: {
    createQuestion () {
     const getNum = () => Math.floor(Math.random() * 9) + 1;

      this.num1 = this.getNum();
      this.num2 = this.getNum();
    },
    submit () {
      const isCorrect = () => this.num1 * this.num2 === Number(this.answer);

      if (isCorrect()) {
        this.trueOrFalse = '참';
        this.inputEl.focus();
        this.createQuestion();
      } else {
        this.trueOrFalse = '거짓';
      }
      this.answer = '';
    }
  }
}
</script>
<style>

</style>
