const actions = {
  addCollection: (payload) => {
    const { id, name, collection } = payload;
    if (
      !typeof id === Number ||
      !typeof name === string ||
      !Array.isArray(collection)
    ) {
      throw new Error(
        `Invalid payload, your payload was ${payload}, and it should be an object with an id, name, and collection array`
      );
    }
    return {
      type: 'addCollection',
      payload,
    };
  },
};

export default actions;
