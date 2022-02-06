export const state = () => ({
  settings: [],
});

export const mutations = {
  SAVE_SETTINGS (state, config) {
    state.settings = config;
  },
};

export const actions = {
  async nuxtServerInit ({ commit }, context) {
    const settings = await context.$content(`settings/settings`).fetch();
    commit(`SAVE_SETTINGS`, await settings);
  },
};
