var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function() {
    this.listenTo(this.collection, 'select', this.selectVideo);
        // this.listenTo(this.collection, 'select', this.selectVideo,
    // console.log(this.attributes)
    // let newVideoListEntry = new VideoListEntryView(this.collection[0]);
    // this.render(newVideoListEntry);
    // console.log(this);s
  },

  selectVideo: function(video) {
    this.model = video;
    // this.model.attributes = video.attributes
    this.render();
  },


  render: function() {
    
    this.$el.html(this.template(this.model.attributes));
    console.log(this)
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
