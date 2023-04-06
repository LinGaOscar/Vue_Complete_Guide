export default {
    increment(context) {
        setTimeout(function () {
            context.commit('increment');
        }, 1500)
    },
    increase(context, payload) {
        console.log(context);
        context.commit('increase', payload);
    },
}