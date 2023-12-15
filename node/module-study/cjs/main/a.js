function a () {
    console.log(require.main === module);
}

module.exports = a