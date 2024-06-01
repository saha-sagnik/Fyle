(function($) {
    "use strict";
    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 1; /* Increment */
        $this.html(current);
        if (current >= $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function() { count($this); }, 50);
        }
    }        	
    $(".stat-count").each(function() {
        $(this).data('count', parseInt($(this).data('count'), 10));
        $(this).html('0');
        count($(this));
    });
})(jQuery);