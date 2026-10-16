const products = [
    "assets/aiCY.png",
    "assets/bgimg.png",
    "assets/cys.png",
    "assets/stickyyogurt.png"
];

let current = 0;

const productImage = document.getElementById("productImage");

function changeImage() {

    if (!productImage) return;

    // gambar lama menghilang
    productImage.style.opacity = "0";
    productImage.style.transform = "scale(1.05)";

    setTimeout(() => {

        current++;

        if (current >= products.length) {
            current = 0;
        }

        productImage.src = products[current];

        productImage.style.opacity = "1";
        productImage.style.transform = "scale(1)";

    }, 800);
}

setInterval(changeImage, 3500);

const productData = {

    stick: {
        title: "Stick Yogurt 40 gr",

        description:
            "A creamy yogurt snack with refreshing fruit flavors.",

        flavors: [
            {
                name: "Strawberry",
                image: "assets/stickYOGURT.jpg"
            },
            {
                name: "Blueberry",
                image: "assets/stickYOGURT.jpg"
            }
        ]
    },


    squeeze: {
        title: "Cimory Squeeze 120 gr",

        description:
            "Creamy yogurt in a convenient squeeze pouch.",

        flavors: [
            {
                name: "Strawberry",
                image: "assets/cimorySqueeze.jpg"
            },
            {
                name: "Blueberry",
                image: "assets/cimorySqueeze.jpg"
            },
            {
                name: "Mango",
                image: "assets/cimorySqueeze.jpg"
            },
            {
                name: "Original",
                image: "assets/cimorySqueeze.jpg"
            }
        ]
    },


    drink250: {
        title: "Yogurt Drink 250 Ml",

        description:
            "Fresh yogurt drink with a variety of fruity flavors.",

        flavors: [
            {
                name: "Strawberry",
                image: "assets/bottleYogurt.jpg"
            },
            {
                name: "Blueberry",
                image: "assets/bottleYogurt.jpg"
            },
            {
                name: "Lychee",
                image: "assets/bottleYogurt.jpg"
            },
            {
                name: "Mango",
                image: "assets/bottleYogurt.jpg"
            },
            {
                name: "Mixed Berry",
                image: "assets/bottleYogurt.jpg"
            },
            {
                name: "Original",
                image: "assets/bottleYogurt.jpg"
            }
        ]
    },


    bites: {
        title: "Yogurt Bites 120 gr",

        description:
            "Creamy yogurt bites with a fun and refreshing taste.",

        flavors: [
            {
                name: "Strawberry",
                image: "assets/yogurtbites.jpg"
            },
            {
                name: "Blueberry",
                image: "assets/yogurtbites.jpg"
            }
        ]
    },


    cup: {
        title: "Cup Yogurt 400 Ml",

        description:
            "Creamy yogurt that you can enjoy with your favorite toppings.",

        flavors: [
            {
                name: "Greek Original",
                image: "assets/GreekYogurt.jpg"
            },
            {
                name: "Greek Low Fat",
                image: "assets/GreekYogurt.jpg"
            }
        ]
    },


    mini: {
        title: "Mini Yogurt Drink 70 Ml",

        description:
            "A small yogurt drink with a refreshing taste.",

        flavors: [
            {
                name: "Strawberry",
                image: "assets/MiniYogurt.jpg"
            },
            {
                name: "Blueberry",
                image: "assets/MiniYogurt.jpg"
            },
            {
                name: "Original",
                image: "assets/MiniYogurt.jpg"
            }
        ]
    },


    drink200: {
        title: "Yogurt Drink 200 Ml",

        description:
            "Refreshing yogurt drink for everyday moments.",

        flavors: [
            {
                name: "Strawberry",
                image: "assets/YogurtDrink.jpg"
            },
            {
                name: "Blueberry",
                image: "assets/YogurtDrink.jpg"
            }
        ]
    },


    milk: {
        title: "Fresh Milk 1 Lt",

        description:
            "Fresh and creamy milk for your everyday moments.",

        flavors: [
            {
                name: "Original",
                image: "assets/FreshMilk.jpg"
            }
        ]
    }

};

function showProduct(productName) {

    const product =
        productData[productName];

    if (!product) return;


    const productSection =
        document.querySelector(".product");

    const detailSection =
        document.querySelector(".product-detail");


    const detailTitle =
        document.getElementById("detailTitle");

    const detailDescription =
        document.getElementById("detailDescription");

    const detailImage =
        document.getElementById("detailImage");

    const flavorContainer =
        document.getElementById("flavorContainer");


    // hide products

    productSection.style.display = "none";


    // show detail

    detailSection.classList.add("active");


    // text

    detailTitle.textContent =
        product.title;

    detailDescription.textContent =
        product.description;


  //first img

    detailImage.src =
        product.flavors[0].image;


// reset flavors

    flavorContainer.innerHTML = "";


//    create flavor buttons

    product.flavors.forEach(
        (flavor, index) => {

            const button =
                document.createElement("button");

            button.className =
                "flavor-button";


            button.textContent =
                flavor.name;


            if (index === 0) {

                button.classList.add(
                    "active"
                );

            }


            button.addEventListener(
                "click",
                function () {

                    /* CHANGE IMAGE */

                    detailImage.style.opacity =
                        "0";

                    detailImage.style.transform =
                        "scale(0.96)";


                    setTimeout(() => {

                        detailImage.src =
                            flavor.image;

                        detailImage.style.opacity =
                            "1";

                        detailImage.style.transform =
                            "scale(1)";

                    }, 250);


                    /* ACTIVE BUTTON */

                    document
                        .querySelectorAll(
                            ".flavor-button"
                        )
                        .forEach(btn => {

                            btn.classList.remove(
                                "active"
                            );

                        });


                    button.classList.add(
                        "active"
                    );

                }
            );


            flavorContainer.appendChild(
                button
            );

        }
    );


// scroll to detail
// tut on AI and youtube
    detailSection.scrollIntoView({
        behavior: "smooth"
    });

}

function closeProduct() {

    const productSection =
        document.querySelector(".product");

    const detailSection =
        document.querySelector(".product-detail");


    detailSection.classList.remove(
        "active"
    );

    productSection.style.display =
        "block";


    productSection.scrollIntoView({
        behavior: "smooth"
    });

}

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});


// scroll sotry effect
const scrollStory =
    document.querySelector(".scroll-story");

const storyImage =
    document.querySelector(".scroll-story-image img");

const storyLine1 =
    document.querySelector(".story-line-1");

const storyLine2 =
    document.querySelector(".story-line-2");

const storySmall =
    document.querySelector(".story-small");


function updateScrollStory() {

    if (!scrollStory) return;

    const rect =
        scrollStory.getBoundingClientRect();

    const sectionHeight =
        scrollStory.offsetHeight;

    const viewportHeight =
        window.innerHeight;

    /*
        progress:
        0 = baru masuk section
        1 = hampir selesai section
    */

    let progress =
        -rect.top /
        (sectionHeight - viewportHeight);

    progress =
        Math.max(0, Math.min(1, progress));


// bg parallax
    const imageMove =
        progress * 12;

    storyImage.style.transform =
        `scale(1.08) translateY(${imageMove}px)`;


// text 1
    const line1Move =
        progress * -110;

    storyLine1.style.transform =
        `translateY(${line1Move}vh)`;

    storyLine1.style.opacity =
        Math.max(0, 1 - progress * 1.7);


// text 2
    const line2Move =
        110 - (progress * 160);

    storyLine2.style.transform =
        `translateY(${line2Move}vh)`;

    storyLine2.style.opacity =
        Math.min(1, progress * 2);

// small text
    storySmall.style.transform =
        `translateY(${progress * 80}px)`;

    storySmall.style.opacity =
        Math.max(0, 1 - progress * 1.5);
}

window.addEventListener(
    "scroll",
    updateScrollStory,
    { passive: true }
);

updateScrollStory();

// cim nav 
const cimoryHeader =
    document.querySelector(".header");

const cimoryNavbar =
    document.querySelector(".navbar");

const cimoryNavLinks =
    document.querySelectorAll(".navbar a");

const menuToggle =
    document.getElementById("menuToggle");


    // hover navigation
if (cimoryNavbar) {

    cimoryNavLinks.forEach(link => {

        link.addEventListener("mouseenter", () => {

            const navbarRect =
                cimoryNavbar.getBoundingClientRect();

            const linkRect =
                link.getBoundingClientRect();


            const left =
                linkRect.left -
                navbarRect.left;


            cimoryNavbar.style.setProperty(
                "--nav-left",
                `${left}px`
            );


            cimoryNavbar.style.setProperty(
                "--nav-width",
                `${linkRect.width}px`
            );


            cimoryNavbar.classList.add(
                "nav-hovering"
            );

        });

    });


    cimoryNavbar.addEventListener(
        "mouseleave",
        () => {

            cimoryNavbar.classList.remove(
                "nav-hovering"
            );

        }
    );

}


// movile menu
if (menuToggle && cimoryNavbar) {

    menuToggle.addEventListener(
        "click",
        () => {

            cimoryNavbar.classList.toggle(
                "active"
            );

        }
    );


    cimoryNavLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                cimoryNavbar.classList.remove(
                    "active"
                );
          }
        );
    });
}


// nav scroll
function updateCimoryHeader() {
    if (!cimoryHeader) return;
    if (window.scrollY > 60) {
        cimoryHeader.classList.add(
            "nav-scrolled"
        );
    } else {
        cimoryHeader.classList.remove(
            "nav-scrolled"
        );
    }
}

window.addEventListener(
    "scroll",
    updateCimoryHeader,
    { passive: true }
);
updateCimoryHeader();