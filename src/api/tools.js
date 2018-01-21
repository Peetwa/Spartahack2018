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

module.exports = function( router, User, io ) {


    /**
     * Get all the active tools
     * @return:
     */
    router.get('/tool/in/', function(req, res){
        User.findOne({"firstName": "Peter"}, {"activeTools": true},  function( err, user){
            if(err){
                return res.status(500).json({message: `Failed to grab the activate tools`});
            }
            res.status(200).json({'user': user.activeTools, message: `${user.activeTools} are active`});
        });
    });

    /**
     * Get all the active tools
     * @return:
     */
    router.get('/tool/out/', function(req, res){
        User.findOne({"firstName": "Peter"}, {"inactiveTools": true},  function( err, user){
            if(err){
                return res.status(500).json({message: `Failed to grab the inactive tools`});
            }
            res.status(200).json({'user': user.inactiveTools, message: `${user.inactiveTools} are inactive`});
        });
    });


    /**
     * Add the tools to the activated list
     * @param: tools to add to the patient
     * @return:
     */
    router.post('/tool/', function(req, res){
        const tools = req.query.tools;
        const toolNames = tools.split(",");
        User.findOneAndUpdate({"firstName": "Peter"}, {$push : {activeTools: {$each: toolNames}}}, {new: true}, function( err, user){
            if(err){
                return res.status(500).json({message: `Failed to add tool to the activated tools`});
            }
            io.emit("activeTools", JSON.stringify(user.activeTools));
            return res.status(200).json({'user': user, message: `Successfully added ${toolNames} to the activated tools`});
        });
    });

    /**
     * Remove the tools from the activated list
     * @param: tools to add to the patient
     * @return:
     */
    router.delete('/tool/', function(req, res){
        const tools = req.query.tools;
        const toolNames = tools.split(",");
        User.findOneAndUpdate({"firstName": "Peter"}, {$pullAll : {inactiveTools: toolNames}}, {new: true}, function( err, user){
            if(err){
                return res.status(500).json({message: `Failed to remove tool from the active tools`});
            }
            res.status(200).json({'user': user, message: `Successfully removed ${toolNames} from the active tools`});
        });
    });
};