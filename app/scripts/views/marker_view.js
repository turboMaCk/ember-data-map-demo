EmberDataMapDemo.MarkerView = Ember.View.extend({
    marker: null,

    setup: function(marker, mapView) {
        this.setProperties({
            location_lat: marker.get('location_lat'),
            location_lng: marker.get('location_lng'),
            mapView: mapView
        });

        this.createMarker();
    },

    createMarker: function() {
        var self = this;

        //create new marker
        var googleMarker = new google.maps.Marker({
            position: new google.maps.LatLng(self.get('location_lat'), self.get('location_lng')),
            map: self.get('mapView').get('map')
        });

        // store marker
        this.set('marker', googleMarker);
    },
})