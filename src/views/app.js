var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.allVideos = new Videos(window.exampleVideoData);
    console.log(this.allVideos);
    this.firstVideo = this.allVideos.at(0);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new SearchView({
      el: '.search',
      collection: this.allVideos
    });
    new VideoListView({
      collection: this.allVideos
    }).render();
    
    // console.log(this.allVideos)
   

    new VideoPlayerView({
      model: this.firstVideo,
      collection: this.allVideos
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
