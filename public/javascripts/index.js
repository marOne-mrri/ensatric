$(document).ready(function () {
    $("#banner-area .owl-carousel").owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        stagePadding: 0,
        loop: true,
        items: 1,
        margin: 0,
        autoWidth: false,
        autoplay: true,
        singleItem: true,
        navigation: true,
        navContainerClass: 'xl:mx-10 xl:text-8xl lg:mx-5 lg:text-4xl md:mx-3 md:text-2xl mx-2 text-xl absolute inset-0 flex justify-between text-white',
        navClass: [
            'focus:outline-none',
            'focus:outline-none'
        ],
        dots: false,
    });

    $("#footer .owl-carousel").owlCarousel({
        loop: true,
        items: 5,
        margin: 0,
        autoplay: true,
    });

    $(".menu_item").on('click',
        () => {
            $(".menu_item").removeClass(" bg-gray-500 text-white");
            $(".menu_item").addClass(" text-gray-500 hover:bg-gray-500 hover:text-white");
            $(this).removeClass(" text-gray-500 hover:bg-gray-500 hover:text-white");
            $(this).addClass(" bg-gray-500 text-white");
        }
    )
});

const btn = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");
// Add Event Listeners
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

const form = document.getElementById("form");
const modal = document.getElementById("myModal");
form.addEventListener("submit", event => {
    event.preventDefault();
    console.log("hi");
    const formData = new FormData(form);
    console.log(formData.get('email'));
    console.log(formData.get('message'));
    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.get("email"), message: formData.get("message") })
    })
        .then(response => response.json())
        .then(data => {
            modal.style.display = "block";
            const textMessage = document.getElementById("message");
            if (data.result === "yes") {
                textMessage.style.color = "green";
                textMessage.innerHTML = "success: " + data.message;
            } else {
                textMessage.style.color = "red";
                textMessage.innerHTML = "error in the: " + data.at + ", " + data.message;
            }
            if (modal.style.display === "block") {
                setTimeout(() => modal.style.display = "none", 5000);
            }
            window.onclick = event => {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});