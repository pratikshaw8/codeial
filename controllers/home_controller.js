
module.exports.home = function(req,res){
    return res.send('<h1>Express is up for codeial</h1>')
}
module.exports.sleep = function(req,res){
    return res.send('<h1>Express wants to sleep</h1>')
}