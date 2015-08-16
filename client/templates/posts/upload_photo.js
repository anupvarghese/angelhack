Template.uploadPhoto.events({
    'change .uploadPhoto': function(event, template) {
        FS.Utility.eachFile(event, function(file) {
            var upload_photo = new FS.File(file);
            upload_photo.creatorId = Meteor.userId(); // add custom data
            UploadCollection.insert(upload_photo, function (err, data) {
                if (!err) {
                   // do callback stuff
                   alert('Uploaded'+ data.creatorId);
                   $("#picId").val(data.creatorId);
                }
                else {
                  alert(err);
                }
            });
        });
    }
});

/*Template.uploadPhoto.events({
    'change #uploadPhoto':function(event, template){
      var file =  $('#uploadImagePost').get(0).files[0] //Some jQuery to get the value.
           fsFile = new FS.File(file);

      PostsImages.insert(fsFile,function(err,result){
          if(!err){
            console.log(result);
            alert('Uploaded'+ data.creatorId);
            $("#picId").val(data.creatorId);
           }
           else {
             alert(err);
           }
       })
    }
});*/
