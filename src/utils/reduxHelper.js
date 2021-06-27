
const mapType = (type, status) => `${status.valuePrefix}${type}`;

const createAction = type => (
    payload = {},
    onSuccess = () => { },
    onError = () => { }
) => {
    return {
        type,
        payload,
        onSuccess,
        onError
    };
};

const status = {
    start: {
        valuePrefix: "@@FETCH_START/",
        keyPostfix: ""
    },
    success: {
        valuePrefix: "@@FETCH_SUCCESS/",
        keyPostfix: "_SUCCESS"
    },
    failure: {
        valuePrefix: "@@FETCH_ERROR/",
        keyPostfix: "_FAILURE"
    }
};

const createLoadingSelector = state => {
    return (reducerName: String, actionName: String) => {
      try {
        return state.get("ui").toJS()[reducerName][actionName].isLoading;
      } catch (error) {
        console.error(error);
      }
    };
  };
  
  const createErrorSelector = state => (
    reducerName: String,
    actionName: String
  ) => {
    try {
      return state.get("ui").toJS()[reducerName][actionName].error;
    } catch (error) {
      console.error(error);
    }
  };
  

export {
    status,
    mapType,
    createAction,
    createLoadingSelector,
    createErrorSelector
}