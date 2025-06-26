function animateButton(button) {
    button.classList.add('clicked');
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 300);
}

// Adding click animation effect
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function() {
        this.style.transform = "scale(0.9)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 200);
    });
});


document.querySelectorAll('.tab').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelector('.tab.active').classList.remove('active');
        this.classList.add('active');
        
        let filter = this.dataset.filter;
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.display = (filter === "all" || card.classList.contains(filter)) ? "block" : "none";
        });
    });
});


function showPopup(event) {
    event.preventDefault(); // Stop form submission

    // Submit the form using AJAX
    let form = event.target;
    let formData = new FormData(form);

    fetch("send_email.php", {
        method: "POST",
        body: formData,
    })
    .then(response => response.text())
    .then(result => {
        if (result.trim() === "success") {
            document.getElementById("thankYouPopup").style.display = "flex";
            form.reset(); // Clear form fields
        } else {
            alert("Error! Message not sent.");
        }
    })
    .catch(error => console.log("Error:", error));
}

function closePopup() {
    document.getElementById("thankYouPopup").style.display = "none";
}


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

