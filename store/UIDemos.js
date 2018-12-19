export const state = () => ({cacheSelectedComponents: {}})

export const mutations = {
    addSelectedComponents(state, param) {
        if (param.componentId) {
            let obj = Object.assign({}, state.cacheSelectedComponents);
            obj[param.componentId] = param;
            state.cacheSelectedComponents=obj;
        }

    },
    removeSelectedComponents(state, id) {
        if (id) {
            delete state.cacheSelectedComponents[id];

        }
    }
}
export const actions = {}

export const getters = {}