var VideoListEntryView = Backbone.View.extend({

  // el: '.video-list',

  initialize: function() {
    // this.render()
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function() {
    // console.log(this)
    console.log(this)
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html'),

  // handleClick: function(element) {
  //   return;
  // }

});
