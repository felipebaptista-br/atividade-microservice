const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');
const Categ = mongoose.model('Categoria');


exports.getProduto = async () => {
    const result = await Produto.find({}, 'title _id price categoria description');
    return result;
}

exports.create = async (data) => {
    data.categoria = await getCategoria(data.idCategoria);
    let produto = Produto(data);
    await produto.save();
}
getCategoria = async (id) => {
    const result = await Categ.findById(id, 'title');
    return result.title;

}
exports.put = async (id, data) => {
    await Produto.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            price: data.price,
            active: data.active,
            categoria: await getCategoria(data.idCategoria)
        }
    });
}

exports.delete = async (id) => {
    await Produto.findByIdAndDelete(id);
}