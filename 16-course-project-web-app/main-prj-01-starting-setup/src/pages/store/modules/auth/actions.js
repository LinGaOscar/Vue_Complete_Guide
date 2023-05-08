export default {
    login() {},
    async signup(context, payload) {
        console.log(payload);
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[]', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });
        const responseData = await response.json();
        console.log(responseData);
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to Authenticate');
            throw  error;
        }

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        });
    }
};