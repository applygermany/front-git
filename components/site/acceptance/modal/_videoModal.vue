<template>
  <div id="video-modal" class="uk-flex-top" uk-modal @click.self="closeModal">
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      <video id="videoContainer"  :src="url" controls="controls"> </video>

<!--      <video-->
<!--          id="my-player"-->
<!--          class="vjs-matrix video-js"-->
<!--          controls-->
<!--          preload="auto"-->
<!--          data-setup='{}'>-->
<!--        <source :src="url" type="video/mp4"></source>-->
<!--        <p class="vjs-no-js">-->
<!--          To view this video please enable JavaScript, and consider upgrading to a-->
<!--          web browser that-->
<!--          <a href="https://videojs.com/html5-video-support/" target="_blank">-->
<!--            supports HTML5 video-->
<!--          </a>-->
<!--        </p>-->
<!--      </video>-->

    </div>
  </div>
</template>


<script>
export default {
  computed: {
    url() {
      return this.$store.getters.acceptanceVideo;
    },
  },
  methods: {
    closeModal() {
      setTimeout(() => this.$store.dispatch("setAcceptanceVideo", ""), 1);
    },
  },
};
</script>

<style>
#video-modal .uk-modal-dialog {
  display: flex;
  justify-content: center;
  height: 55%;
}

.uk-modal-dialog {
  width: fit-content !important;
  max-width: unset !important;
}

.uk-child-width-1-3\@m > * {
  width: 20vw;
}

#instructions { max-width: 640px; text-align: left; margin: 30px auto; }
#instructions textarea { width: 100%; height: 100px; }

/* Show the controls (hidden at the start by default) */
.video-js .vjs-control-bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
</style>