const mongoose = require('mongoose');
const Categ = mongoose.model('Categoria');


exports.getCateg = async () => {
    const result = await Categ.find({}, 'title _id description');

    return result;
}
exports.create = async (data) => {
    let categoria = Categ(data);
    await categoria.save();
}

exports.put = async (id, data) => {
    await Categ.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description
        }
    });
}

exports.delete = async (id) => {
    await Categ.findByIdAndDelete(id);
}