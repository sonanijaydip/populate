var get_category = require('../model/categorymodel')
var get_sub_category = require('../model/subcategorymodel')

exports.getcategory = async (req, res) => {
    var data = await this.getcategory.create(req.body)

    res.status(200).json({
        status: 'success',
        data
    });
}
exports.getsubcategory = async(req,res) => {
    var data = await this.getsubcategory.create(req.body)

    res.status(200).json({
        status:'success',
        data
    })
}

exports.get_category = async (req,res) => {
    var data = await get_category.find();

    res.status(200).json({
        status:'success',
        data
    })
}

exports.get_sub_category = async (req,res) => {
    var data = await get_sub_category.find().populate("c_id")

    res.status(200).json({
        status:'success',
        data
    })
}
