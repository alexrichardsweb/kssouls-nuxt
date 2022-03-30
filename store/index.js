export const state = () => ({
  settings: [],
  videos: [],
});

export const mutations = {
  SAVE_SETTINGS (state, config) {
    state.settings = config;
  },
  SAVE_VIDEOS (state, videos) {
    state.videos = videos;
  },
};

export const actions = {
  async nuxtServerInit ({ commit }, context) {
    const settings = await context.$content(`settings/settings`).fetch();
    const videos = await context.$content(`videos`).fetch();
    commit(`SAVE_SETTINGS`, await settings);
    commit(`SAVE_VIDEOS`, await videos);
  },
};

