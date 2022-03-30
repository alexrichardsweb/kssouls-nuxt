<template>
  <div class="video">
    <Player
      ref="player"
      autoplay
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
    };
  },
  computed: {

  },
  mounted () {
    this.$nextTick(() => {
    });
  },
  methods: {
    play () {
      this.$refs.player.play();
    },
  },
};
</script>

<style lang="scss" scoped>

  .video {
      vm-player {
        /* --vm-scrim-z-index: -1; */
      }
  }

</style>
