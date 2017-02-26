export const changeName = ({commit}, name) => {
    commit('changeName', 'Allan Action Test');
};

export const increment = ({commit}, name) => {
    commit('increment');
};

export const decrement = ({commit}, name) => {
    commit('decrement');
};
