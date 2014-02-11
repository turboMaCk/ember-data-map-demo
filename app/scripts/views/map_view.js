EmberDataMapDemo.MapView = Ember.ContainerView.extend({
	elementId: 'map-canvas',
    tagName: 'div',

    map: null,
    markers: null,

    mapDefaults: {
        center: new google.maps.LatLng(50.878293, 15.446777),
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    },

    didInsertElement: function() {
        var model = this.get('controller.content');

        // createMap
        this.createMap();

        // Loop model and create annotations
        this.setMarkers(model);
    },

    setMarkers: function(data) {
        var self = this;

        data.forEach(function(item) {
            var marker = EmberDataMapDemo.MarkerView.create();
            marker.setup(item, self);

            self.pushObject(marker);
        });

        // Store markers
        this.set('markers', markers);
    },

    createMap: function() {
        var map = new google.maps.Map( this.$().get(0), this.mapDefaults);
        this.set("map", map);
    }
})
