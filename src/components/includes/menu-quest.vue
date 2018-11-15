<template>
    <b-modal id="menu-quest" centered hide-footer=true size="lg" title="Quests">
    <b-container>

      <ul>
        <li v-for="(quest, index) in Quests">
          Title: {{quest.title}}
        </li>
      </ul>
      
    </b-container>
</b-modal>
</template>
<script>
  import Quests from '../../assets/data/quests.json'

  export default {
  name: 'Game',
  data() {
    quests: Quests
  },
  mounted() {
    console.log(Quests)
  }
}
</script>
