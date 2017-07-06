<template>
  <div class="app-viewport" id="file-list">
    <md-sidenav class="md-left md-fixed" ref="sidebar">
      <md-toolbar class="md-account-header">
        <md-list class="md-transparent">
          <md-list-item class="md-avatar-list">
            <md-avatar class="md-large">
              <img src="https://placeimg.com/64/64/people/8" alt="People">
            </md-avatar>

            <span style="flex: 1"></span>

            <md-avatar>
              <img src="https://placeimg.com/40/40/people/3" alt="People">
            </md-avatar>

            <md-avatar>
              <img src="https://placeimg.com/40/40/people/4" alt="People">
            </md-avatar>
          </md-list-item>

          <md-list-item>
            <div class="md-list-text-container">
              <span>John Doe</span>
              <span>johndoe@email.com</span>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon>arrow_drop_down</md-icon>
            </md-button>
          </md-list-item>
        </md-list>
      </md-toolbar>

      <md-list>
        <md-list-item @click="$refs.sidebar.toggle()" class="md-primary">
          <md-icon>insert_drive_file</md-icon> <span>My files</span>
        </md-list-item>

        <md-list-item @click="$refs.sidebar.toggle()">
          <md-icon>people</md-icon> <span>Shared with me</span>
        </md-list-item>

        <md-list-item @click="$refs.sidebar.toggle()">
          <md-icon>access_time</md-icon> <span>Recent</span>
        </md-list-item>

        <md-list-item @click="$refs.sidebar.toggle()">
          <md-icon>start</md-icon> <span>Starred</span>
        </md-list-item>

        <md-list-item @click="$refs.sidebar.toggle()">
          <md-icon>delete</md-icon> <span>Trash</span>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <md-whiteframe md-elevation="3" class="main-toolbar">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <md-button class="md-icon-button" @click="$refs.sidebar.toggle()">
            <md-icon md-iconset="fa fa-bars fa-2x"></md-icon>
          </md-button>

          <span style="flex: 1"></span>
        </div>

        <div class="md-toolbar-container">
          <h2 class="md-title">Space Day</h2>
        </div>
      </md-toolbar>
    </md-whiteframe>

    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            drawer: true,
            mini: false,
            right: null,
        };
    },
};
</script>


<style>
  body{ margin: 0}

  .complete-example {
    height: 540px;
    display: flex;
    flex-flow: column;
    position: relative;
    overflow: hidden;
    z-index: 1;

  .md-fab {
    margin: 0;
    position: absolute;
    bottom: -20px;
    left: 16px;
  }

  .md-title {
    color: #fff;
  }

  .md-list {
    overflow: auto;
  }

  .md-list-action .md-icon {
    color: rgba(#000, .26);
  }

  .md-avatar-icon .md-icon {
    color: #fff !important;
  }

  .md-sidenav .md-list-text-container > :nth-child(2) {
    color: rgba(#fff, .54);
  }

  .md-account-header {
  .md-list-item:hover .md-button:hover {
    background-color: inherit;
  }

  .md-avatar-list .md-list-item-container:hover {
    background: none !important;
  }
  }
  }
</style>
