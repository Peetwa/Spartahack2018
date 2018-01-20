/**
 * Project: Spartahack2018
 * File name: user
 * Created by:  joshbenner on 1/20/18.
 *
 * Outside references:
 *
 * Purpose:
 */
'use strict';

module.exports = function( router, User ) {

    /**
     * Add a tool to the activated list
     * @param:
     * @param:
     * @return:
     */
    router.post('/user/', function(req, res){
        const user = req.body.user;
        User.create(user, {new: true}, function(err, user){
            if(err){
                return res.status(500).json({message: `Failed to create the patient`});
            }
            res.status(200).json({'user': user, message: `Successfully created the patient`});
        });
    });
};