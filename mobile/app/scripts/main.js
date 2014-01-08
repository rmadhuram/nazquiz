
(function() {
    // to optimize performance
    $.mobile.defaultPageTransition   = 'none'
    $.mobile.defaultDialogTransition = 'none'
    $.mobile.buttonMarkup.hoverDelay = 0;


    var AppRouter = Backbone.Router.extend({
        routes: {
            "" : "welcome"
        },

    });


            // Initiate the router
    var app_router = new AppRouter;


    app_router.on('route:welcome', function(actions) {
        $('.content').html("Unknown Path");
    });

})();


