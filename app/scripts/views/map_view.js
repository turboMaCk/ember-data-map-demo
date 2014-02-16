EmberDataMapDemo.MapView = Ember.ContainerView.extend({
    elementId: 'map-canvas',
    tagName: 'div',

    map: null,
    markers: null,

    mapDefaults: {
        mapTypeId: google.maps.MapTypeId.ROADMAP
    },

    /**
     * Called when the element of the view has been inserted into the DOM or after the view was re-rendered.
     * Override this function to do any set up that requires an element in the document body.
     * @documentation: http://emberjs.com/api/classes/Ember.View.html#event_didInsertElement
     */
    didInsertElement: function() {
        var model = this.get('controller.content');

        // createMap
        this.createMap();

        // Loop model and create annotations
        this.setMarkers(model);
    },

    /**
     * Add markers to map
     * @param {array of objects}
     * @needs markerView
     */
    setMarkers: function(data) {
        var self = this,
            bounds = this.get('bounds');

        data.forEach(function(item) {
            // create new marker
            var marker = EmberDataMapDemo.MarkerView.create();

            // set markers
            marker.setup(item, self);

            // add marker to map
            self.pushObject(marker);

            // set new bound
            bounds.extend(marker.get('marker.position'));
        });

        // set new map center
        this.get('map').fitBounds(this.get('bounds'));
    },

    /**
     * Set map in view
     * define bounds
     */
    createMap: function() {
        var map = new google.maps.Map( this.$().get(0), this.mapDefaults),
            bounds = new google.maps.LatLngBounds();

        this.setProperties({
            map: map,
            bounds: bounds
        });
    }
})
