$(document).ready(function() {

  // NATIONAL GEOGRAPHIC JOURNAL

  var formURL = 'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=cbdf8301c2814a758a2f6ecfdccdffa8';
  $.getJSON(formURL, function(api_data) {
    //  console.log(api_data.articles[0]);

    // console.log(api_data.articles[0].description);

    natgeo1.innerHTML += "<a target=\"_blank\"  href=" + api_data.articles[0].url + "><div class=\"blog-left\" id=\"natgeo_title\"> <h2>" + api_data.articles[0].title + "</h2>"
    natgeo_title.innerHTML += "<p>" + api_data.articles[0].description + "</p></div></a>"

    natgeo1.innerHTML += "<div class=\"blog-right\"><a target=\"_blank\"  href=" + api_data.articles[0].url + "><img src=" + api_data.articles[0].urlToImage + " class=\"img-responsive\" ></div></a>"

    natgeo2.innerHTML += "<a target=\"_blank\"  href=" + api_data.articles[1].url + "><div class=\"blog-left\" id=\"natgeo_title\"> <h2>" + api_data.articles[1].title + "</h2>"
    natgeo_title.innerHTML += "<p>" + api_data.articles[1].description + "</p></div></a>"

    natgeo2.innerHTML += "<div class=\"blog-right\"><a target=\"_blank\"  href=" + api_data.articles[1].url + "><img src=" + api_data.articles[1].urlToImage + " class=\"img-responsive\" ></div></a>"
  });

  // ENGADGET JOURNAL

  var formURL = 'https://newsapi.org/v1/articles?source=engadget&sortBy=top&apiKey=cbdf8301c2814a758a2f6ecfdccdffa8';
  $.getJSON(formURL, function(api_data) {
    // console.log(api_data);

    //  console.log(api_data.articles[0]);

    engadget.innerHTML += "<a target=\"_blank\"  href=" + api_data.articles[0].url + "><div class=\"blog-left\" id=\"engadget_title\"> <h2>" + api_data.articles[0].title + "</h2>"
    engadget_title.innerHTML += "<p>" + api_data.articles[0].description + "</p></div></a>"

    engadget.innerHTML += "<div class=\"blog-right\"><a target=\"_blank\"  href=" + api_data.articles[0].url + "><img src=" + api_data.articles[0].urlToImage + " class=\"img-responsive\" ></div></a>"

  });

  // NATIONAL GEOGRAPHIC INSTAGRAM

  var formURL = 'https://www.instagram.com/natgeo/?__a=1';
  $.getJSON(formURL, function(api_data) {
    console.log(api_data.graphql.user.edge_owner_to_timeline_media.edges[1]) //.user.media.nodes[0].display_src);

    var i = 0;
    api_data.graphql.user.edge_owner_to_timeline_media.edges.forEach(function(key, value) {
      while (i <= 8) {
        inst_natgeo.innerHTML += "<div class=\"portfolio-item grid\" style=\"background-image: url(" + api_data.graphql.user.edge_owner_to_timeline_media.edges[i].node.display_url + ")\"><span class=\"a\">" + api_data.graphql.user.full_name + "</span><span style=\"font-size:16px;\" class=\"b\" hidden>" + api_data.graphql.user.edge_owner_to_timeline_media.edges[i].node.edge_media_to_caption
.edges[0].node.text + "</span></div>"
        // console.log(i);
        i++;

        $(".portfolio-item").hover(function() {
          $(this).find('.a').hide();
          $(this).find('.b').show();
        }, function() {
          $(this).find('.b').hide();
          $(this).find('.a').show();
        });
      }
    });
  });
1
  // ENGADGET INSTAGRAM

  var formURL = 'https://www.instagram.com/leonardodicaprio/?__a=1';
  $.getJSON(formURL, function(api_data) {
    //  console.log(api_data.user.media.nodes[0].display_src);

    var i = 0;
    api_data.graphql.user.edge_owner_to_timeline_media.edges.forEach(function(key, value) {
      while (i <= 8) {
        inst_leo.innerHTML += "<div class=\"portfolio-item grid\" style=\"background-image: url(" + api_data.graphql.user.edge_owner_to_timeline_media.edges[i].node.display_url + ")\"><span class=\"a\">" + api_data.graphql.user.full_name + "</span><span style=\"font-size:16px;\" class=\"b\" hidden>" + api_data.graphql.user.edge_owner_to_timeline_media.edges[i].node.edge_media_to_caption
.edges[0].node.text + "</span></div>"
        // console.log(i);
        i++;

        $(".portfolio-item").hover(function() {
          $(this).find('.a').hide();
          $(this).find('.b').show();
        }, function() {
          $(this).find('.b').hide();
          $(this).find('.a').show();
        });
      }
    });
  });

  var formURL = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=cbdf8301c2814a758a2f6ecfdccdffa8';
  $.getJSON(formURL, function(api_data) {

    var content = ""

    for (n = 0; n < 6; n++) {
      content += "<a target=\"_blank\"  href=\"" + api_data.articles[n].url + "\" class=\"blog-item grid\"> \
                  <span class=\"blog-item-img\" style=\"background-image: url(" + api_data.articles[n].urlToImage + ");\"></span> \
                    <span class=\"blog-item-content grid\"> \
                      <h4>" + api_data.articles[n].title + "</h4> \
                    <p>" + api_data.articles[n].description + "</p> \
                    </span> \
                  </a> \
                    </div>"
      btm_news.innerHTML = content;
    }
  });
});
