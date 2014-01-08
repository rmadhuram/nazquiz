App.WelcomeView = Backbone.View.extend({
    initialize: function(){
        var source   = $("#welcome-tpl").html();
        this.template = Handlebars.compile(source);
        this.render();
    },

    render: function() {
        $('#content').html(this.template());
    }
});