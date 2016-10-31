$(document).ready(function(){
$("#newquote").click(function(){
  
  var quoteBank = [];
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&callback=",        function(data) {
     data.forEach(function(val) {
      quoteBank.push(val);
    })
    changeQuote();
  });
    function changeQuote() {
    var randomQuote =  Math.floor((Math.random() * 29));
    $("#text").html(quoteBank[randomQuote].content);
    $("#author").html(quoteBank[randomQuote].title);
    };
   });
  
  $("#twitter-quote").click(function(){
  $("#twitter-quote").attr("href", "https://twitter.com/intent/tweet?text="+ $("#text").text());
  });
});