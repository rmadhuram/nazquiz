App.SeatingView = Backbone.View.extend({
    initialize: function(){
        var source   = $("#seating-tpl").html();
        this.template = Handlebars.compile(source);
        this.render();
    },

    render: function() {
        $('#content').html(this.template());
    }
});