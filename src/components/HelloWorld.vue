<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>PILIH Presiden RI 2019 yaa:</h2>
    <ul>
      <!-- It is a necessary to use :key if the iteration is not simple to gain better performance. -->
      <li v-for="user in users" :key="user.no">
        ({{user.no}}){{user.firstname}} {{user.lastname}}
      </li>
    </ul>
    <div>
      <input type="text" v-model="input_val">
    </div>
    <div>Input Value: <span v-text="input_val"></span></div>
    <div>
      <button class="button content is-success" v-on:click="counter++">You've clicked this button {{counter}} times!</button>
    </div>
    <div>
      <b-field>
        <b-input maxlength="25" placeholder="Your name" v-model="input_val"></b-input>
      </b-field>
    </div>
    <div>
      <button class="button is-primary" @click="$toast.open('This is a Toast: '+input_val)">
        Show Toast
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Selamat Datang',
      users: [
        { no: 1, firstname: 'Zuhra', lastname: 'Sofyan' },
        { no: 2, firstname: 'Gatot', lastname: 'Nurmantyo' },
        { no: 3, firstname: 'Tito', lastname: 'Karnavian' },
        { no: 4, firstname: 'Prabowo', lastname: 'Subiyanto' },
      ],
      input_val: '',
      counter: 0,
    };
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
