export const DocGetStorage = (key) => {
    let data = localStorage.getItem(key)
    if (data) {
        return data
    } else {
        return false
    }
}

export const DocSetStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const DocDefStorage = (key, def) => {
    if (DocGetStorage(key) === false) {
        DocSetStorage(key, def)
    }
    return JSON.parse(DocGetStorage(key))
}
