// HOMEPAGE
exports.index = (req, res) => {
    res.render("index", {
        title : "Nenneh's Preparatory School | Homepage"
    });
}

// ABOUT PAGE
exports.about = (req, res) => {
    res.render("about", {
        title : "Nenneh's Preparatory School | About Page"
    });
}

// APPOINTMENT
exports.appointment = (req, res) => {
    res.render("appointment", {
        title : "Nenneh's Preparatory School | Appointment"
    });
}

// CLASSES PAGE
exports.classes = (req, res) => {
    res.render("classes", {
        title : "Nenneh's Preparatory School | Classes"
    });
}

// FACILITY PAGE
exports.facility = (req, res) => {
    res.render("facility", {
        title : "Nenneh's Preparatory School | Facilities Page"
    });
}

// OUR TEAM
exports.team = (req, res) => {
    res.render("team", {
        title : "Nenneh's Preparatory School | Team"
    });
}

// TESTIMONIALS
exports.testimonial = (req, res) => {
    res.render("testimonial", {
        title : "Nenneh's Preparatory School | Testimonial"
    });
}

// CONTACT PAGE
exports.contact = (req, res) => {
    res.render("contact", {
        title : "Nenneh's Preparatory School | Contact Us'"
    });
}
