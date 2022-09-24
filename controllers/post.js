 // in controllers/stuff.js


 const post = require('../models/post');
 const fs = require('fs');
 

 
 exports.createPost = (req, res, next) => {
      req.body.post = JSON.parse(req.body.post);
       const url = req.protocol + '://' + req.get ('host');
       const post = new post({
       name: req.body.post.name,
        description: req.body.post.description,
        userId: req.body.post.userId,
        imageUrl: url + '/images/' + req.file.filename,
      });
       post.save().then(
     () => {
        res.status(201).json({
          message: 'Post saved successfully!'
          });
       }
      
     )
     .catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
      
    );
    };
 
 /*   
 exports.getOnePost = (req, res, next) => {
     Post.findOne({
         _id:req.params.id
     }).then(
         (post) => {
             res.status(200).json(post);
         }
     ).catch(
       (error) => {
         res.status(404).json({
             error: error
         });
      }
     );
         };
 
         
 
         exports.modifyPost = (req, res, next) => {
           let post = new Post({ _id: req.params._id });
           if (req.file) {
             const url = req.protocol + '://' + req.get('host');
             req.body.post = JSON.parse(req.body.post);
             post = {
               name: req.body.post.name,
               description: req.body.post.description,
               imageUrl: url + '/images/' + req.file.filename,
             };
           } else {
             post = {
              name: req.body.name,
               description: req.body.description,
               };
           }
           Post.updateOne({_id: req.params.id}, post).then(
             () => {
               res.status(201).json({
                 message: 'Post updated successfully!'
               });
             }
           ).catch(
             (error) => {
               res.status(400).json({
                 error: error
               });
             }
           );
         };
 
     /* 
         exports.deletePost = (req, res, next) => {
           Post.findOne({_id: req.params.id}).then(
             (post) => {
               const filename = post.imageUrl.split('/images/')[1];
               fs.unlink('images/' + filename, () => {
                 Post.deleteOne({_id: req.params.id}).then(
                   () => {
                     res.status(200).json({
                       message: 'Deleted!'
                     });
                   }
                 ).catch(
                   (error) => {
                     res.status(400).json({
                       error: error
                     });
                   }
                 );
               });
             }
           );
         }
      
 
       exports.getAllPost =(req, res, next) => {
         Post.find().then(
           (post) => {
             res.status(200).json(post);
           }
         ).catch(
           (error) => {
             res.status(400).json({
               error: error
             });
           }
         );
       };

       
    

    exports.likePost = (req, res, next) => {
        Post.findOne({_id: req.params.id}).then((post) => {
          if (req.body.like == 1) {
              post.userLiked.push(req.body.userId)
              post.likes += req.body.like
          } else if (req.body.like == 0 && post.userLiked.includes(req.body.userId)) {
              post.userLiked.remove(req.body.userId)
              post.likes -= 1
          } else if (req.body.like == -1) {
              post.userDisliked.push(req.body.userId)
              post.dislikes += 1
          } else if (req.body.like == 0 && post.userDisliked.includes(req.body.userId)) {
              post.userDisliked.remove(req.body.userId)
              post.dislikes -= 1
          }
         
          post.save().then(
              () => {
                  res.status(200).json({
                      message: "Post Like Updated!"
                  });
              }
          ).catch(
              (error) => {
                  res.status(400).json({
                      error: error
                  });
              }
          );
      });
    
        
      }; */