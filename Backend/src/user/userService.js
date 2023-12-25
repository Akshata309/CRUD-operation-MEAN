const userModel = require('./userModel');

module.exports.getDataFromDBService = () => {
    return userModel.find({}).exec();
}

module.exports.createUserDBService = (userDetails) => {
    const userModelData = new userModel({
        name: userDetails.name,
        address: userDetails.address,
        phone: userDetails.phone
    });

    return userModelData.save();
}

module.exports.updateUserDBService = (id, userDetails) => {
    // Assuming userDetails is an object containing fields to update
    return userModel.findByIdAndUpdate(id, userDetails, { new: true }).exec();
}

module.exports.removeUserDBService = (id) => {
    return userModel.findByIdAndDelete(id).exec();
}
