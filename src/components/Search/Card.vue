<template>
  <div class="card">
    <img v-bind:src="result.image">
    <div class="card-content">
      <h4>{{result.title}}</h4>
      <p>{{result.desc}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    result: {
      type: Object,
      required: true
    }
  };
</script>
