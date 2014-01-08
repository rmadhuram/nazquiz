App.GameView = Backbone.View.extend({
    initialize: function(){
        var source   = $("#game-tpl").html();
        this.template = Handlebars.compile(source);
        this.playerTpl = Handlebars.compile($("#player-tpl").html());

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
        this.render();
    },

    hookPlayerAction: function() {
        $('ul a').click(function(e) {
            var playerId = $(this).parent().parent().data('id'),
                type = $(this).data('type');

            if (type == 'correct') {
               console.log(playerId +  ' correct');
            }
            console.log('click - '  );
            e.preventDefault();

        });
    },

    render: function() {
        $('#content').html(this.template());
        var playersA = this.players['1'],
            playersB = this.players['2'];

        var html = '';
        for (var i=0; i<4; i++) {
            html += '<div class="row">';
            playersA[i].team = '1';
            playersB[i].team = '2';
            html += this.playerTpl(playersA[i]);
            html += this.playerTpl(playersB[i]);
            html += '</div>';
        }

        $('.players').html(html);
        $('.dropdown-toggle').dropdown();
        this.hookPlayerAction();
    }
});