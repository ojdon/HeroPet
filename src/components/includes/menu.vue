<template>
    <b-modal id="menu" centered hide-footer=true size="lg" title="Menu">
    <b-container>
      <b-row>
        <b-col>
          <b-btn class="text-center mx-auto btn-menu btn-block btn-lg" v-b-modal.menu-quest>Quests</b-btn>
        </b-col>

        <b-col>
          <b-btn class="btn-block btn-lg">
            Training
          </b-btn>
        </b-col>

        <b-col>
          <b-btn class="btn-block btn-lg">
            Status
          </b-btn>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col>
          <b-btn class="btn-block btn-lg">
          Heal
        </b-btn>
        </b-col>
        <b-col>
          <b-btn class="btn-block btn-lg">
          Sleep
        </b-btn>
        </b-col>
        <b-col>
          <b-btn class="btn-block btn-lg">
          Eat
        </b-btn>
        </b-col>
      </b-row>
    </b-container>
</b-modal>
</template>