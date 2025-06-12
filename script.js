const sampleDeals = [
  {
    title: "5-Star Beach Resort in Miami",
    location: "Miami, FL",
    type: "beach",
    distance: 40
  },
  {
    title: "Luxury Mountain Lodge",
    location: "Aspen, CO",
    type: "mountain",
    distance: 80
  },
  {
    title: "Chic City Escape",
    location: "New York, NY",
    type: "city",
    distance: 20
  }
];

function searchDeals() {
  const location = document.getElementById('location').value;
  const radius = parseInt(document.getElementById('radius').value);
  const type = document.getElementById('vacation-type').value;
  const results = sampleDeals.filter(deal => {
    return (
      (!type || deal.type === type) &&
      deal.distance <= radius
    );
  });

  const container = document.getElementById('deals-container');
  container.innerHTML = '';

  if (results.length === 0) {
    container.innerHTML = "<p>No matching deals found. Try a wider radius or a different type.</p>";
    return;
  }

  results.forEach(deal => {
    const div = document.createElement('div');
    div.className = 'deal-card';
    div.innerHTML = `
      <h3>${deal.title}</h3>
      <p><strong>Location:</strong> ${deal.location}</p>
      <p><strong>Type:</strong> ${deal.type}</p>
      <p><strong>Distance:</strong> ${deal.distance} miles</p>
    `;
    container.appendChild(div);
  });
}
