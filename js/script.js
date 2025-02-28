// Modal Functions
function openModal() {
    document.getElementById("infoDialog").showModal();
}

function closeModal() {
    document.getElementById("infoDialog").close();
}

// Fetch and Set Image
function fetchMyImage() {
    document.getElementById('myImage').src = 'https://cdn.prod.website-files.com/647444f26ccc23bbb500da83/665dddb2ce35736f6d2573c1_IMG_0618%202-p-500.jpg';
}

// Fetch Random Location
function fetchLocation() {
    fetch('https://get.geojs.io/v1/ip/geo.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('myLocation').innerText = 
                `You are in ${data.region}, ${data.country} (Lat: ${data.latitude}, Long: ${data.longitude})`;
        })
        .catch(error => console.error("Error fetching location:", error));
}

// Go to website
function goToWebsite() {
    window.location.href = "https://www.sunnivaliu.com";
}


//cursorStyle
document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Run these functions after the page loads
document.addEventListener("DOMContentLoaded", () => {
    fetchMyImage();
    fetchLocation();
});
