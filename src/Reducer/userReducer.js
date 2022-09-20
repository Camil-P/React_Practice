export default function userReducer(state, { value, type }) {
    switch (type) {
        case 'setTokens':
            return {...state, refreshToken: value.refreshToken, accessToken: value.accessToken};

        default:
            return new Error("Type not found!");
    }
}