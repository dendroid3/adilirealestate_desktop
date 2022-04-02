<template>
  <div class="card pa-4 red-border bottom-line" >
    I am a log on of something. Add property, made property vacant, occupied.
  </div>
</template>

<script>
export default {
  name: 'logCard'
}
</script>

<style lang="css" scoped>
  
  .red-border{
    background-color: rgb(231, 231, 231); 
    border-left: solid 4px red;
  }
  .green-border{
    background-color: rgb(231, 231, 231); 
    border-left: solid 4px green;
  }
  .bottom-line{
    position: relative;
  }
  .bottom-line::after{
    content: '';
    display: inline;
    border-bottom: solid 1px white;
    position: absolute;
    bottom: 0;
    width: 80%;
    left: 10%;
  }
  .card{
    font-size: .8rem;
    background: rgb(211, 211, 211);
  }
</style>
