export const plugin = {
  load() {
    return {
      name: 'Hello World',
      version: '0.1.0',
      author: 'Octahive',
      description: 'Simple plugin for octabot',
    };
  },

  async init() {
    return { ok: undefined };
  },

  async process(payload: String) {
    console.log('Hello World');

    return { ok: [] };
  },
};
