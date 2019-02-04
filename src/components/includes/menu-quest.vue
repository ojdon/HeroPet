<template>
    <b-modal id="menu-quest" centered hide-footer=true size="lg" title="Quests">
    <b-container>

      <table class="table">
        <tbody> 
          <tr v-for="quest in this.questList.quest">
            <td class="text-left" style="vertical-align: middle"><h5 class="text-uppercase">{{quest.title}}</h5> {{quest.description}}<br> Time: {{quest.hours}}:{{quest.minutes}}</td>
            <td class="w-25" style="vertical-align: middle">
              <span v-if="currentQuest.inQuest === false && currentQuest.id != quest.id && quest.complete === false"><a href="#" v-on:click="doQuest(quest.id, quest.hours, quest.minutes)" class="btn btn-secondary btn-block"  >Go</a></span>
              <span v-else-if="currentQuest.id == quest.id && currentQuest.inQuest === true"><a href="#" class="btn btn-warning btn-block disabled" disabled  >In Progress...</a></span>
              <span v-else-if="quest.complete === true"><a href="#" class="btn btn-success btn-block disabled" disabled  >Completed</a></span>
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
      currentQuest: this.$store.getters.save.currentQuest,
      timer: null,
      totalTime: (5 * 60),
      resetButton: false

    }
  },
  methods: {
    doQuest: function(id, hours, minutes) {
      //this.hero.energy -= 10;
      this.$store.commit('setEnergy', 10);
      this.$store.commit('setQuestID', id);
      //this.timer(hours, minutes, 0);
      this.totalTime = (hours, minutes);
      this.startTimer();
    },
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
    },
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
    },
    resetTimer: function() {
      this.totalTime = (5 * 60);
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
      this.questList.quest[this.currentQuest.id].complete = true;
      this.currentQuest.inQuest = false;
      this.currentQuest.id = null;
    },
    padTime: function(time) {
      return (time < 10 ? '0' : '') + time;
    },
    countdown: function() {
      if(this.totalTime >= 1){
        this.totalTime--;
      } else{
        this.totalTime = 0;
        this.resetTimer()
      }
      console.log(this.totalTime);
    }
  },
  computed: {
    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - (this.minutes * 60);
      return this.padTime(seconds);
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