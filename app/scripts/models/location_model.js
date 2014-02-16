EmberDataMapDemo.Location = DS.Model.extend({

    /**
     * location latitude
     * @type {Number}
     */
    location_lat: DS.attr('number'),

    /**
     * location logitude
     * @type {Number}
     */
    location_lng: DS.attr('number')
});

/**
 * This demo is using FixturesAapter
 * @documentation http://emberjs.com/guides/models/the-fixture-adapter/
 * @type {Array}
 */
EmberDataMapDemo.Location.FIXTURES = [
    {
        id: 1,
        location_lat: 50.094731,
        location_lng: 14.454125
    },
    {
        id: 2,
        location_lat: 52.094731,
        location_lng: 13.454125
    },
    {
        id: 3,
        location_lat: 50.594731,
        location_lng: 14.452125
    },
    {
        id: 4,
        location_lat: 41.926979,
        location_lng: 12.517385
    }
];