// Reducer utilities

/**
 * Appends loading state properties to the initial state.
 *
 * @param  {Object} state Current state.
 * @return {Object}       Expanded state.
 */
export function appendLoadingStates(state) {
  return Object.assign(state, {
    isLoaded: false,
    isLoading: false,
    hasError: false,
    error: null,
  });
}

/**
 * Resets loading state of the reducer state.
 *
 * @param  {Object} state Current state.
 * @return {Object}       New state.
 */
export function resetLoading(state) {
  return {
    isLoaded: false,
    isLoading: false,
    hasError: false,
    error: null,
  };
}


/**
 * Starts loading state of the reducer state.
 *
 * @param  {Object} state Current state.
 * @return {Object}       New state.
 */
export function startLoading(state) {
  return {
    ...state,
    isLoaded: false,
    isLoading: true,
    hasError: false,
    error: null,
  };
}

/**
 * Finishes loading state of the reducer state.
 *
 * @param  {Object} state Current state.
 * @return {Object}       New state.
 */
export function finishLoading(state) {
  return {
    ...state,
    isLoaded: true,
    isLoading: false,
    hasError: false,
    error: null,
  };
}

/**
 * Throws an error to the reducer state.
 *
 * @param  {Object} state Current state.
 * @return {Object}       New state.
 */
export function errorLoading(state, action) {
  return {
    isLoaded: false,
    isLoading: false,
    hasError: true,
    error: action.error,
  };
}
