(function() {
    var html = '\
        <div>\
            <h3>Mikon E90 Digital SLR</h3>\
            <img src="{{ url_for('static', filename='camera-stock-150.jpg') }}"/>\
            <p>$599.99</p>\
            <p>4.3/5.0 &bull; 176 Reviews</p>\
        </div>';

    var div = document.createElement('div');
    div.innerHTML = html;

    var appendTo = document.getElementById('stork-widget');
    appendTo.parentNode.insertBefore(div, appendTo);
})();
