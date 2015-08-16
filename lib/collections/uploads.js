UploadCollection = new FS.Collection("uploadCollection", {
    stores: [new FS.Store.FileSystem("images", {path: "~/meteor_uploads"})]
});
UploadCollection.allow({
    insert: function (userId, doc) {
        //upload to idol_on_demand
        //console.log(doc);
        console.log(Meteor.settings.idol_on_demand_api_key);
        var url = 'https://api.idolondemand.com/1/api/sync/storeobject/v1?';
                //  Meteor.settings.idol_on_demand_api_key;
        var fileContent = UploadCollection.find(doc._id);
        //console.log(doc.creatorId);
        //console.log(UploadCollection.find(doc.creatorId));
        return doc.creatorId;


        var data = {
          apikey : Meteor.settings.idol_on_demand_api_key,
          url : 'www.google.com'
        };
        //console.log(data);
        //console.log(dataObject);


        result = HTTP.call("POST",url, data,  function(error, result){
          if(error){
            console.log("error", error);
          }
          if(result){
             return result;
          }
        });

      /*result =  HTTP.call("POST",  url,
                  data,
                 function(error, result){
                   if(error){
                     console.log("error", error);
                   }
                   if(result){
                      return result;
                   }
      });
      /*  result = HTTP.call(url, dataObject,function(error, result){
                        if(error){
                          console.log("error", error);
                        }
                        if(result){
                          return result;
                        }
                      });*/
    },
    update: function (userId, doc) {
        return doc.creatorId == userId
    },
    download: function (userId, doc) {
        return doc.creatorId == userId
    },
});


Meteor.methods({
  downloadImage:function(picId){
    check(picId, {
      picId: String
    });
    console.log(picId);
     return UploadCollection.find(picId);
  }
});
