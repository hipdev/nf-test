export default function updateStore(state, payload) {
    // simple store with a lightWeight library :)
  
    return {
      ...state,
      [payload.formId]: {...state[payload.formId],...payload.data}
    };
  }
  