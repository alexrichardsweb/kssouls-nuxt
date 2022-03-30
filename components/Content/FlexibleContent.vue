<template>
  <div class="flexible-content">
    <div
      v-for="(section, index) in sections"
      :key="index"
    >
      <TextBlock
        v-if="section.type === 'text_block'"
        :section="section"
      />
      <ImageTextBlock
        v-if="section.type === 'image_and_text'"
        :section="section"
      />
      <ImageBlock
        v-if="section.type === 'image'"
        :section="section"
      />
      <VideoBlock
        v-if="section.type === 'video'"
        :section="section"
      />
      <VideoGallery
        v-if="section.type === 'video_gallery'"
        :section="section"
      />
      <BandMembers
        v-if="section.type === 'band_members'"
        :section="section"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sections: Array,
  },
  data () {
    return {
    };
  },
  mounted () {
    this.$nextTick(() => {
    });
  },
};
</script>

<style lang="scss" scoped>

  .flexible-content {

  }

</style>
