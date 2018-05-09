var Videos = Backbone.Collection.extend({

  model: Video,
  url : "https://www.googleapis.com/youtube/v3/search",

  events: {
  },

  search: function(query) {
     this.fetch({data: {
        maxResults: 5,
        embeddable: true,
        q: query,
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        }
    })
  },

  parse: function(response) {
    console.log(response)
    this.allVideos = new Videos(response.items);
    this.firstVideo = this.allVideos.at(0);

    new VideoPlayerView({
      model: this.firstVideo,
      collection: this.allVideos
    }).render();


    console.log(this.allVideos)
  }

});


// //// Sample js code for search.list

// // See full sample for buildApiRequest() code, which is not 
// // specific to a particular API or API method.

// buildApiRequest('GET',
//                 '/youtube/v3/search',
//                 {'maxResults': '5',
//                  'part': 'snippet',
//                  'q': 'surfing',
//                  'type': ''});
