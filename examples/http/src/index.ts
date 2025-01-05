export const plugin = {
  load() {
    return {
      name: 'Http request',
      version: '0.1.0',
      author: 'Octahive',
      description: 'Simple plugin for octabot',
    };
  },

  async init() {
    return { ok: undefined };
  },

  async process(payload: String) {
    let text = await (await fetch('https://dogapi.dog/api/v2/breeds')).text();

    try {
      const json = JSON.parse(text);

      console.log(json);

      return { ok: [] };
    } catch (e) {
      console.error(e);

      return { err: e };
    }
  },
};
