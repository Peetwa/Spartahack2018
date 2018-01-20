/**
 * Project: Spartahack2018
 * File name: tools
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
    router.post('/tool/:tool', function(req, res){
        const toolName = req.params.tool;
        User.insert({"firstName": "Peter"}, {$push : {inTools: toolName}}, {new: true}, function(err, user){
            if(err){
                return res.status(500).json({message: `Failed to add tool to the IN TOOLS`});
            }
            res.status(200).json({'user': user, message: `Successfully added ${toolName} to the IN TOOLS`});
        });
    });

};