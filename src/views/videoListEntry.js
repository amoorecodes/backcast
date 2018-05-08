var VideoListEntryView = Backbone.View.extend({

  el: '.video-list',

  initialize: function() {
    this.render()
  },

  render: function() {
    console.log(this.attributes)
    this.$el.append(this.template(this.attributes));
  },

  template: templateURL('src/templates/videoListEntry.html'),

  handleClick: function(element) {
    return;
  }

});
