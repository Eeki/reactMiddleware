export default function({ dispatch }) {
  return next => action => {
    //If action does not have payload or, the payload does not have a .then property --> we dont care about it, send it on
    if(!action.payload || !action.payload.then) {
      console.log("we don't have a promise", action);
      return next(action);
    }

    console.log('We have a promise', action);
    //Make sure the action's promise resolves
    action.payload
      .then(function(response) {
        //Create a new action with the old type, but replace the promise with the response data
        const newAction = {...action, payload: response };
        dispatch(newAction); // dispatch vs next --> dispatch will send the action to all the middleware again
      });
  }
}