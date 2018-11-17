<template>
    <b-modal id="menu-quest" centered hide-footer=true size="lg" title="Quests">
    <b-container>

      <table class="table">
        <tbody> 
          <tr v-for="quest in this.questList.quest">
            <td class="text-left" style="vertical-align: middle"><h5 class="text-uppercase">{{quest.title}}</h5> {{quest.description}}</td>
            <td class="w-25" style="vertical-align: middle"><a href="#" class="btn btn-primary btn-block">Go</a></td>
          </tr>
        </tbody>
      </table>
    </b-container>
</b-modal>
</template>
<script>
  import Quests from '../../assets/data/quests.json'

  export default {
  name: 'Game',
  data () {
    return {
      questList: Quests
    }
  },
  mounted() {
    console.log(this.questList)
  }
}
</script>
