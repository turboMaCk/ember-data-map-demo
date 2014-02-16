EmberDataMapDemo.MarkerView = Ember.View.extend({

    /**
    setup marker properties
    @arguments: marker [object], mapView [object]
     */
    setup: function(marker, mapView) {
        // set marker properties
        this.setProperties({
            location_lat: marker.get('location_lat'),
            location_lng: marker.get('location_lng'),
            mapView: mapView
        });

        // create marker
        this.createMarker();
    },

    /**
    create marker
     */
    createMarker: function() {
        var self = this;

        //create new marker
        var googleMarker = new google.maps.Marker({
            position: new google.maps.LatLng(self.get('location_lat'), self.get('location_lng')),
            map: self.get('mapView').get('map')
        });

        this.set('marker', googleMarker);
    },
})