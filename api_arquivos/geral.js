$(function () {

    var toc = $("#toc").tocify({
        selectors: "h2,h3,h4,h5"
    }).data("toc-tocify");

    hljs.initHighlightingOnLoad();

    $('[data-toggle="tooltip"]').tooltip();
});