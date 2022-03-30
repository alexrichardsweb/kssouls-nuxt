<template>
  <div
    v-if="video"
    class="video-block max-article-width my-1"
  >
    <h4>{{ video.title }}</h4>
    <Video
      :video-type="video.video_type"
      :video-id="video.video_id"
    />
  </div>
</template>

<script>
export default {
  props: {
    section: Object,
  },
  data () {
    return {
    };
  },
  computed: {
    videoSlug () {
      return this.section.video;
    },
    videos () {
      return this.$store.state.videos;
    },
    video () {
      return this.videos.find(video => video.slug === this.videoSlug);
    },
  },
  mounted () {
    this.$nextTick(() => {

    });
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
  .video-block {

  }

</style>
