var SearchView = Backbone.View.extend({

  events: {
    'click .btn': 'findVideos',
  },

  findVideos: function() {
    //take the key input .form-control
    // .fetch => send ? 
    this.collection.search($('.form-control').text());



  },

  initialize: function() {
    console.log(this.collection)
    this.render();

  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
