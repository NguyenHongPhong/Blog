class SiteControllers {
    home() {
        return (req, res) => res.render('home');
    }

    search() {
        return (req, res) => res.render('search');
    }
}

export default new SiteControllers();
