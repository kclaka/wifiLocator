/* Get Home Page*/

module.exports.homelist = function(req, res){
    res.render('location-list', {title: 'Home'});
    
};

/* Get Location Info Page*/

module.exports.locationinfo = function(req, res){
    res.render('location-info', {title: 'Location Info'});
    
};

/* Get ADD review Page*/

module.exports.addReview = function(req, res){
    res.render('location-review-form', {title: 'Add Review'});
    
};




