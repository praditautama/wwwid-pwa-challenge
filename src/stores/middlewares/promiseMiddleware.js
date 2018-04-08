/**
 * Checks if the value is a Promise.
 * @param  {Mixed}   value
 * @return {Boolean}
 */
function isPromise(value) {
  if (value !== null && typeof value === 'object') {
    return value.promise && typeof value.promise.then === 'function';
  }

  return false;
}

/**
 * Promise redux middleware.
 *
 * This is modified from the original redux-promise-middleware library
 * to suit to our needs.
 *
 * @return {Function}
 */
export default function promiseMiddleware() {
  return ({ dispatch, getState }) => next => (action) => {
    if (!isPromise(action.payload)) {
      return next(action);
    }

    const { type, payload, meta } = action;
    const { promise, ...data } = payload;

    // Check for the existence of an invalidate thunk and
    // run through it to check if it should proceed.
    if (meta && typeof meta.invalidate === 'function') {
      if (!meta.invalidate(getState)) {
        return {};
      }
    }

    /**
     * Dispatch the first async handler. This tells the
     * reducer that an async action has been dispatched.
     */
    next({
      type: `${type}`,
      ...data ? { payload: data } : {},
      ...meta ? { meta } : {},
    });

    const isAction = resolved => resolved && (resolved.meta || resolved.payload);
    const isThunk = resolved => typeof resolved === 'function';
    const getResolveAction = (error) => {
      const isError = !!error;
      return {
        type: `${type}_${isError ? 'ERROR' : 'SUCCESS'}`,
        ...meta ? { meta } : {},
        ...isError ? { error } : {},
      };
    };

    const attachedAction = action;

    /**
     * Re-dispatch one of:
     *  1. a thunk, bound to a resolved/rejected object containing ?meta and type
     *  2. the resolved/rejected object, if it looks like an action, merged into action
     *  3. a resolve/rejected action with the resolve/rejected object as a payload
     */
    attachedAction.payload.promise = promise.then(
      (resolved = {}) => {
        const resolveAction = getResolveAction();
        return dispatch(isThunk(resolved) ? resolved.bind(null, resolveAction) : {
          ...resolveAction,
          ...isAction(resolved) ? resolved : {
            ...!!resolved && { payload: { ...data, ...resolved } },
          },
        });
      },
      (rejected = {}) => {
        const resolveAction = getResolveAction(rejected);
        return dispatch(isThunk(rejected) ? rejected.bind(null, resolveAction) : {
          ...resolveAction,
          ...isAction(rejected) ? rejected : {
            ...!!rejected && { payload: { ...data, ...rejected } },
          },
        });
      },
    );

    return attachedAction;
  };
}
