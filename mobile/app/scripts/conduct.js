(function() {

    var AppRouter = Backbone.Router.extend({
        routes: {
            "" : "welcome",
            "seating": "seating",
            "game": "game"
        }
    });


    // Initiate the router
    var app_router = new AppRouter;

    app_router.on('route:welcome', function(actions) {
        var view = new App.WelcomeView();
    });

    app_router.on('route:seating', function(actions) {
        var view = new App.SeatingView();
    });

    app_router.on('route:game', function(actions) {
        var view = new App.GameView();
    });

    Backbone.history.start();
})();