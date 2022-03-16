import { DocDefStorage, DocGetStorage, DocSetStorage } from '../utils/DocLocalStorage'

export const userState = DocDefStorage('user', { info: {} })

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'get':
            DocSetStorage('user', { info: state.info })
            return JSON.parse(DocGetStorage('user'))
        case 'set':
            DocSetStorage('user', { info: action.payload })
            return JSON.parse(DocGetStorage('user'))
        case 'remove':
            DocSetStorage('user', { info: {} })
            return JSON.parse(DocGetStorage('user'))
        default:
            return state
    }
}
