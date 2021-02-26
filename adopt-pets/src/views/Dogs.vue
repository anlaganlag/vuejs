<template>
  <div>
        <h1> 可以收养的狗</h1>

        <b-table striped hover :items="dogs"></b-table>
  </div>
</template>

<script>
import dogs from '@/data/dogs'

export default {
  data () {
    return {
      dogs
    }
  }
}
</script>
