/**
 * Created by Adunh on 7/11/2017.
 */

// URL and endpoint constants
const url = 'https://launchlibrary.net/1.2/';

export default {

    getNext(context, number) {

        return context.$http.get( url + 'launch?next=' + number + '&mode=summary').then(response => {
            // success callback
            console.log('NEXT API Callback');
            console.log(response.body.launches);
            return response.body.launches
        }, response => {
            // error callback
        });

    },

    getRocket(context, number) {

        return context.$http.get( url + 'rocket?limit=' + number + '&mode=summary').then(response => {
            // success callback
            console.log('ROCKET API Callback');
            console.log(response.body.rockets);
            return response.body.rockets
        }, response => {
            // error callback
        });
    },


    getAgency(context, number) {

        return context.$http.get( url + 'agency?limit=' + number + '&mode=summary').then(response => {
            // success callback
            console.log('NEXT API Callback');
            console.log(response.body.agencies);
            return response.body.agencies
        }, response => {
            // error callback
        });
    },

    setLocalStoreage(context) {

    }


}