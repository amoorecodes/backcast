var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    // listenTo, binds function to an event.1st, collection 2nd, event, 3rd, callback
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());


    this.$el.children().append(this.collection.map(video => {
      console.log(video);
      // video.attributes = this.model.attributes
      return new VideoListEntryView({model: video}).render().el

    }))

    // this.collection.forEach(video => {
    //   $('.video-list').append(new VideoListEntryView({model: video}).render())
    // });

    // new VideoPlayerView(this.collection[0])

    return this;
  },

  renderVideo: function(video) {
    this.$('.video-list').append(new VideoListEntryView({mode: video}).render().el)
  },

  // events: {
  //   'click .video-list': 'play'
  // },

  template: templateURL('src/templates/videoList.html')

});
