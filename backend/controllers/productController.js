let productController = (req, res) => {
    let { name, description } = req.body;

    console.log(name, description);
    console.log("Hello World");
};

module.exports = productController;
