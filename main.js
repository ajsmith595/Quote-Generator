$(document).ready(function(){
        var quotes;
        $.ajax({
            url: "https://random-quote-generator.herokuapp.com/api/quotes/",
            type: "GET",
            success: function (data) {
                quotes = data;
            },
            xhrFields: {
                withCredentials: false
            }
        });
    $('.quotebtn').click(function(){
        var quoteNum = Math.floor(Math.random() * quotes.length);
        var quote = quotes[quoteNum];
        if(quote.author != undefined && quote.quote != undefined){
            $('#author').html("- " + quote.author.toUpperCase());
            $('#actualQuote').html("\"" + quote.quote.toUpperCase() + "\"");
        }
    });
})
