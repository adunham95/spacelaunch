/**
 * Created by Adunh on 7/9/2017.
 */
let myMixin = {
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!')
        }
    }
}