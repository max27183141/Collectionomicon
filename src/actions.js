const actions = {
  addCollection: (payload) => {
    console.log('addCollection action called with payload:', payload);
    const { id, name, elements } = payload;
    if (
      !(typeof id === 'number') ||
      !(typeof name === 'string') ||
      !Array.isArray(elements)
    ) {
      throw new Error(
        `Invalid payload, your payload was ${Array.isArray(
          elements
        )}, and it should be an object with an id, name, and elements array`
      );
    }
    console.log('addCollection action returning:', {
      type: 'addCollection',
      payload: {
        id,
        name,
        elements,
      },
    });
    return {
      type: 'addCollection',
      payload: {
        id,
        name,
        elements,
      },
    };
  },
};

export default actions;
