var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");
    
var data = [
    {
        name: "Triund",
        image:"https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
        description: "Triund is a small hill in the Kangra district in the state of Himachal Pradesh, India. The Triund Hill Station is a part of Dharamkot. Triund is at the foot of the Dhauladhar ranges and is at a height of 2,828 m"
    },
    
    {
        name: "Spiti Valley, Himachal Pradesh",
        image:"https://www.indianholiday.com/blog/wp-content/uploads/2014/12/Lahual-spiti.jpg",
        description: "Nestled in the Keylong district of Himachal Pradesh, Spiti Valley is one of the desired camping sites for adventure enthusiasts and trekkers."
    },
    
    {
        name: "Chandertal Lake – Himachal Pradesh",
        image:"https://www.indianholiday.com/blog/wp-content/uploads/2014/06/camping-at-Chandertal-Lake.jpg",
        description: "The lake is popularly known as ‘Lake of Moon’. It is an ideal camping sight and a weekend in the place will surely mystify your senses."
    }
    
    
    
];

function seedDB(){
    Campground.remove({}, function(err){
    // if(err)
    // console.log(err);
    
    // else
    // console.log("removed Campground");
    
    // data.forEach(function(seed){
    //   Campground.create(seed, function(err, campground){
    //       if(err){
    //           console.log(err);
    //       } else {
    //           console.log("added a campground");
    //           Comment.create(
    //               {
    //                   author: "Tom Schmidt",
    //                   text: "GOT s07e02 airing tomorrow"
    //               }, function(err, comment){
    //                   if(err){
    //                       console.log(err)
    //                   } else {
    //                       campground.comments.push(comment);
    //                       campground.save();
    //                       console.log("added a comment");
    //                   }
    //               });
    //       }
    //   }); 
    // });
    }); 

}

module.exports = seedDB;
    
