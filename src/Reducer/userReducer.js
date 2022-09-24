export default function userReducer(state, { value, type }) {
    switch (type) {
        case 'setTokens':
            return {...state, refreshToken: value.refreshToken, accessToken: value.accessToken};

        case 'clearTokens':
            return {...state, refreshToken: "", accessToken: ""};

        default:
            return new Error("Type not found!");
    }
}