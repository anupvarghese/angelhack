

Template.postImage.helpers({
  imgs: function(imagePath){
    Meteor.subscribe("images");
    var imgs = UploadCollection.find().fetch();
    imgs.forEach(function(img){
      if(img.creatorId === imagePath){
        console.log(img.creatorId);
        Session.set('temp', img);
      };
    });

    console.log(imgs);
    //return imgs;
  /*  if(imagePath){
      Meteor.call("downloadImage", imagePath, function(error, result){
        if(error){
          console.log("error", error);
        }
        if(result){
           return result;
        }
      });
    }*/
  },

  getimage: function(){
    console.log(Session.get('temp'));
    return Session.get('temp');
  },


});
