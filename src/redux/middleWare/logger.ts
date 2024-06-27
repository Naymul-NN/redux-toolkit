const Logger = (state) => (next) => (action) => {
    console.log('Current state => ', state.getState() );
    console.log('action =>', action);
    next(action)
    console.log('Current state => ', state.getState() );
};

export default Logger;