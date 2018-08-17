'use strict';
(function () {
    // tworzymy funkcje konstruujaca, ktora bedzie tworzyla nowe przyciski
    function Button(text) {
        //ustawiamy poczatkowa wartosc text w nowych obiektach i dodajmy możliwość tworzenia obiektu bez podania argumentu, wartosc domyslna to Hello
        this.text = text || 'Hello'; 
    };

    //Dodajemy metodę create tworzącą przycisk na stronie
    Button.prototype = {
        create: function() {
            var self = this;
            this.$element = $('<button>');
            this.$element.text(this.text); //ustawiamy text na przycisku
            //metoda, która po kliknięciu w przycisk wyświetli tekst na ekranie komputera
            this.$element.click(function() {
                alert(self.text);
            });
            $('body').append(this.$element);
        }
    }

    var btn1 = new Button('Hello!');
    btn1.create();

})();