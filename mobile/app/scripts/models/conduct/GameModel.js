(function() {

    var Player = Backbone.Model.extend({
        defaults: {
            score: 0,
            incorrect: 0
        },

        correct: function() {
            this.set('score', this.get('score')+20);
        },

        incorrect: function() {

        }
    });

    var GameModel = function(){
        // dummy data. This will be fetched from API
        this.players = {
            '1' : [
                {name: 'Sam A', id: 122},
                {name: 'Lance P', id: 175},
                {name: 'Trish V', id: 544},
                {name: 'James K', id: 189},
                {name: 'Alan N', id: 187}
            ],

            '2' : [
                {name: 'Nitin M', id: 453},
                {name: 'Ben K', id: 500},
                {name: 'Alexander P', id: 465},
                {name: 'William S', id: 533}
            ]
        }
    };

    // Load from DB
    GameModel.prototype.load = function() {

    };



    App.GameModel = GameModel;
})();
