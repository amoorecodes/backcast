var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.collection.forEach(video => {
      // console.log(video)
      new VideoListEntryView(video);
    })

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
