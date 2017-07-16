/**
 * Created by Adunh on 7/11/2017.
 */

// URL and endpoint constants
const url = 'https://launchlibrary.net/1.2/';
const cacheVersion = 'v1.2.1';

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

    getLauchStatus(context) {
        return context.$http.get( url + 'launchstatus').then(response => {
            // success callback
            console.log('LAUNCH TYPES API Callback');
            console.log(response.body.types);
            return response.body.types
        }, response => {
            // error callback
        });
    },


    // CACHE
    checkCache: function (context) {
        let check = context.$localStorage.get('cacheString');
        console.log('Current cache version = ' + check);
        if ( check === cacheVersion){
            console.log("Already retrieved cache");
        }
        else {
            console.log('Retrieveing new data');
            this.getEventType(context).then(response => {
                // success callback
                context.$localStorage.set('eventTypes', response);
            }, response => {
                // error callback
            });
            this.getAgencyTypes(context).then(response => {
                // success callback
                context.$localStorage.set('agencyTypes', response);
            }, response => {
                // error callback
            });
            this.getMissionTypes(context).then(response => {
                // success callback
                context.$localStorage.set('missionTypes', response);
            }, response => {
                // error callback
            });
            this.getLauchStatus(context).then(response => {
                // success callback
                context.$localStorage.set('launchstatus', response);
            }, response => {
                // error callback
            });

            //Sets the cache version
            context.$localStorage.set('cacheString', cacheVersion);
            console.log('Upgraded Cache')
        }
    },

}