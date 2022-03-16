import { DocDefStorage, DocGetStorage, DocSetStorage } from '../utils/DocLocalStorage'

export const authState = DocDefStorage('auth', { auth: false, token: '' })

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'auth':
            DocSetStorage('auth', { auth: true, token: state.token })
            return JSON.parse(DocGetStorage('auth'))
        case 'token':
            DocSetStorage('auth', { auth: true, token: action.payload })
            return JSON.parse(DocGetStorage('auth'))
        case 'remove':
            DocSetStorage('auth', { auth: false, token: '' })
            return JSON.parse(DocGetStorage('auth'))
        default:
            return state
    }
}
