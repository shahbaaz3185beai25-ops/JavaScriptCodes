const employees = [
    {
        name: "Ravi Kumar",
        service: "Electrician",
        location: "2 km away",
        cost: 300,
        arrival: "30 mins",
        time: "1–2 hrs",
        rating: "⭐⭐⭐⭐"
    },
    {
        name: "Amit Sharma",
        service: "Plumber",
        location: "1.5 km away",
        cost: 250,
        arrival: "20 mins",
        time: "1 hr",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        name: "Suresh Patel",
        service: "Carpenter",
        location: "3 km away",
        cost: 350,
        arrival: "45 mins",
        time: "2 hrs",
        rating: "⭐⭐⭐"
    },
    {
        name: "Vikas Singh",
        service: "Electrician",
        location: "2.2 km away",
        cost: 280,
        arrival: "25 mins",
        time: "1–1.5 hrs",
        rating: "⭐⭐⭐⭐"
    }
];

let selectedEmployee = null;

function renderCards() {
    const container = document.getElementById("cardContainer");
    const filter = document.getElementById("serviceFilter").value;
    container.innerHTML = "";

    employees.forEach((emp) => {
        if (filter === "All" || emp.service === filter) {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <div>
                    <h3>${emp.name}</h3>
                    <p><span>Skill:</span> ${emp.service}</p>
                    <p><span>Location:</span> ${emp.location}</p>
                    <p><span>Cost:</span> ₹${emp.cost}/hour</p>
                    <p><span>Arrival:</span> ${emp.arrival}</p>
                    <p><span>Work Time:</span> ${emp.time}</p>
                    <p><span>Rating:</span> ${emp.rating}</p>
                </div>
            `;
            
            const btn = document.createElement("button");
            btn.innerText = "Book Now";
            btn.onclick = () => {
                openModal(emp);
            };
            
            card.appendChild(btn);
            container.appendChild(card);
        }
    });
}

function openModal(emp) {
    selectedEmployee = emp;
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalName").innerText = emp.name;
    document.getElementById("modalService").innerText = emp.service;
    document.getElementById("modalCost").innerText = "₹" + emp.cost + " / hour";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function confirmBooking() {
    if (selectedEmployee) {
        alert("Booking Confirmed for " + selectedEmployee.name);
        closeModal();
    }
}

// Initialize the app
window.onload = () => {
    renderCards();
};

/* Sample Input: User selects "Electrician" from dropdown.
Sample Output: cardContainer displays only Ravi Kumar and Vikas Singh cards.
*/