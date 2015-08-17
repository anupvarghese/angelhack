Template.postImage.onCreated(function() {
  //Session.set('image', '10');
  Meteor.subscribe("images");
});

Template.postImage.helpers({

  imgs: function(img){
    image = UploadCollection.findOne({creatorId: img});
    console.log(image);
    return image;
  },
});

getImage = function (img) {
  // body...
  return UploadCollection.findOne({creatorId: img});
}
