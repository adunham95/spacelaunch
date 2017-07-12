/**
 * Created by Adunh on 7/11/2017.
 */

// URL and endpoint constants
const url = 'https://launchlibrary.net/1.2/';

export default {

    getNext(context, number) {

        context.$http.get( url + 'launch?next=' + number + '&mode=summary').then(response => {
            // success callback
            console.log(response.body.launches);
            return response.body.launches
        }, response => {
            // error callback
        });
    },

    getRocket(context, number) {

        context.$http.get( url + 'rocket' + number + '&mode=summary').then(response => {
            // success callback
            console.log(response.body.launches);
            return response.body.launches
        }, response => {
            // error callback
        });
    },


    getAgency(context, number) {

        context.$http.get( url + 'agency' + number + '&mode=summary').then(response => {
            // success callback
            console.log(response.body.launches);
            return response.body.launches
        }, response => {
            // error callback
        });
    },


}