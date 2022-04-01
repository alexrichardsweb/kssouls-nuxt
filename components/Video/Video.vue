<template>
  <div class="video">
    {{ videoId }}
    {{ videoType }}
    {{ loadVideo }}
    <Player
      v-if="loadVideo"
      :ref="playerId"
      class="video__player"
      :autoplay="false"
      autopause
    >
      <Dailymotion
        v-if="videoType === 'dailymotion'"
        :video-id="videoId"
      />
      <DefaultUi />
    </Player>
    <button
      @click="play"
    >
      Play
    </button>
  </div>
</template>

<script>

export default {
  props: {
    videoId: String,
    videoType: {
      type: String,
      default: `dailymotion`,
    },
  },
  data () {
    return {
      loadVideo: false,
    };
  },
  computed: {
    playerId () {
      return `player-${this.videoId}`;
    },
  },
  mounted () {
    this.$nextTick(() => {
      this.sleep(200).then(() => {
        // this.loadVideo = true; // Lazy load video to reduce page load errors
        // this.$refs[this.playerId].pause(); // Stops autoplay...I think
        // https://github.com/vime-js/vime/issues/111
      });
    });
  },
  methods: {
    play () {
      this.$refs[this.playerId].play();
    },
  },
};
</script>

<style lang="scss" scoped>

  .video {
      vm-player {
        --vm-icon-fill: #e72677;
        --vm-icon-transition: 0;
        --vm-controls-border-radius: 0px;
        --vm-controls-spacing: .5rem;
        --vm-controls-padding: .5rem;
        --vm-controls-bg: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(34,34,34,1) 100%); ;
        --vm-player-bg: red;
      }

        animation: fade-in-right .5s ease-in-out;

  }

</style>
