/*
    jQuery Style Plugin v0.0.1

    Copyright 2010, Francois Lafortune, @quickredfox.
    Licensed under the MIT license

    Takes a CSS string and embeds as stylesheet within current document
    
*/
(function() {
    var styled;
    $.extend({
        style: function(css,media) {
            var s = document.createElement("style");
            s.type = "text/css";
            if(media) s.media = media;
            if (s.styleSheet) s.styleSheet.cssText = css;
            else s.appendChild(document.createTextNode(css));
            document.getElementsByTagName("head")[0].appendChild(s);
            return styled ? styled.add(s) : styled = $(s);
        },
        unstyle: function() {
            return $.each(styled,function() {
                return $(this).remove();
            })
        }
    });
})();


