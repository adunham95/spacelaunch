/**
 * Created by Adunh on 7/11/2017.
 */

// URL and endpoint constants
const url = 'https://launchlibrary.net/1.2/';

export default {

    // LAUNCH API CALLS
    getNext(context, number) {

        return context.$http.get( url + 'launch?next=' + number + '&mode=verbose').then(response => {
            // success callback
            console.log('NEXT API Callback');
            console.log(response.body.launches);
            return response.body.launches
        }, response => {
            // error callback
        });

    },
    getSingleLaunch( context, id) {

        return context.$http.get( url + 'launch?id=' + id + '&mode=verbose').then(response => {
            // success callback
            console.log('SINGLE LAUNCH API Callback');
            console.log(response.body.launches);
            return response.body.launches
        }, response => {
            // error callback
        });
    },
    getEventType(context) {
        return context.$http.get( url + 'eventtype').then(response => {
            // success callback
            console.log('EVENT TYPES API Callback');
            console.log(response.body.types);
            return response.body.types
        }, response => {
            // error callback
        });
    },

    // ROCKET API CALLS
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
    getSingleRocket( context, id) {

        return context.$http.get( url + 'rocket?id=' + id + '&mode=verbose').then(response => {
            // success callback
            console.log('SINGLE ROCKET API Callback');
            console.log(response.body.rockets);
            return response.body.rockets
        }, response => {
            // error callback
        });
    },

    // AGENCY API CALLS
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
    getSingleAgency( context, id) {

        return context.$http.get( url + 'agency?id=' + id + '&mode=verbose').then(response => {
            // success callback
            console.log('SINGLE AGENCY API Callback');
            console.log(response.body.agencies);
            return response.body.agencies
        }, response => {
            // error callback
        });
    },
    getAgencyTypes(context) {
        return context.$http.get( url + 'agencytype').then(response => {
            // success callback
            console.log('AGENCY TYPES API Callback');
            console.log(response.body.types);
            return response.body.types
        }, response => {
            // error callback
        });
    },
    // MISSION API CALLS

    getMissionTypes(context) {
        return context.$http.get( url + 'missiontype').then(response => {
            // success callback
            console.log('MISSION TYPES API Callback');
            console.log(response.body.types);
            return response.body.types
        }, response => {
            // error callback
        });
    },

}