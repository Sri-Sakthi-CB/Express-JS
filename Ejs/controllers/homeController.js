const homeController = (req, res) => {
    const data = {
        name: "Sri Sakthi",
        userID: 20
    }
    res.render("index", data);
};

export {homeController};