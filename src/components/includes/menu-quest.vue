<template>
    <b-modal id="menu-quest" centered hide-footer=true size="lg" title="Quests">
    <b-container>

      <table class="table">
        <tbody> 
          <tr v-for="quest in this.questList.quest">
            <td class="text-left" style="vertical-align: middle"><h5 class="text-uppercase">{{quest.title}}</h5> {{quest.description}}<br> Time: {{quest.hours}}:{{quest.minutes}}</td>
            <td class="w-25" style="vertical-align: middle">
              <span v-if="currentQuest.inQuest === false && currentQuest.id != quest.id"><a href="#" v-on:click="doQuest(quest.id, quest.hours, quest.minutes)" class="btn btn-secondary btn-block"  >Go</a></span>
              <span v-else-if="currentQuest.id == quest.id"><a href="#" class="btn btn-warning btn-block disabled" disabled  >In Progress...</a></span>
              <span v-else ><a href="#" class="btn btn-danger btn-block disabled" disabled >On quest...</a></span>
            </td>
          </tr>
        </tbody>
      </table>
    </b-container>
</b-modal>
</template>
<script>
  import Quests from '../../assets/data/quests.json'

  export default {
  name: 'Quests',
  data () {
    return {
      questList: Quests,
      hero: this.$store.getters.save.hero,
      currentQuest: this.$store.getters.save.currentQuest

    }
  },
  methods: {
    doQuest: function(id, hours, minutes) {
      //this.hero.energy -= 10;
      this.$store.commit('setEnergy', 10);
      this.$store.commit('setQuestID', id);
      timer(hours, minutes, 0)
    }
  },
  mounted() {
    console.log(this.questList)
  }
}
</script>
<style scoped>
.menu, .modal-content {
    background: #97714A !important;
    color: #FEFEFE;

}
.modal-header {
  border: none !important;
}
</style>