function parsePosts(posts) {
	var count;
	if (posts.length < 4){
		count = posts.length;
	} else {
		count = 4;
	}

	for (i = 0; i < count; i++) { 
		var date = posts[i].date.split('-');
		date = date[1]+'-'+date[2].substring(0,2)+'-'+date[0]
		var html = '<div class="col-sm-3 latestnews-box"><div class="latestnews-img"><a class="latestnews-img-a" target="_blank" href="';
		html += posts[i].link + '" title="' + posts[i].title.rendered + '"><img src="';
		html += getImageUrl(posts[i]._links['https://api.w.org/featuredmedia'][0]['href']);
		html += '" alt="' + posts[i].title.rendered;
		html += '" /></a></div><div class="latesnews-content"><h3 class="latestnews-title"><a href="';
		html += posts[i].link + '" title="' + posts[i].title.rendered + '">' + posts[i].title.rendered;
		html += '</a></h3><p>Posted ' + date + '</p></div></div>';

		jQuery('#wordpress-posts').append(html);   
	}

	jQuery('#wordpress-posts').height('auto');
}

function getImageUrl(url) {
	var image;
	callAJAX(url, function(response) {
		image = response.media_details.sizes.thumbnail.source_url;
	}, false);
	return image;
}

function callAJAX(url, callback, async){
	jQuery.ajax({
        url:url,
        async: async,
        success: function(data){
            callback(data);
        },
        error: function (request, status, error) {
	        console.log(request.responseText);
	    }
    });
}

callAJAX('http://www.geodav.tech/blog/wp-json/wp/v2/posts', parsePosts, true)