!(function () {
    window.IMBER_LANG = "fa";
    var a = window, d = document;

    function im() {
        window.IMBER_ID = "u3v74mqzll0juhz6v";
        window.IMBER_TOKEN = localStorage.getItem("imber_token");
        var i = document.createElement("div");
        i.id = "imber-top-parent";
        var x = document;
        var s = x.createElement("script");
        s.src =
            "https://widget.imber.live/imber?id=" + window.IMBER_ID + "&token=" + (window.IMBER_AUTH
                ? "null&auth=" + JSON.stringify(window.IMBER_AUTH) : window.IMBER_TOKEN);
        s.async = 1;
        x.getElementsByTagName("head")[0].appendChild(s);
        x.getElementsByTagName("body")[0].appendChild(i);
        window.$imber = {};
    }

    "complete" === d.readyState ? im() : a.attachEvent ? a.attachEvent("onload", im)
        : a.addEventListener("load", im, !1);
})();