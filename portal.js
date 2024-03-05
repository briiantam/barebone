// portal.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('startup-data.json')
      .then(response => response.json())
      .then(data => {
        const dynamicContentDiv = document.querySelector('#dynamicContent');
  
        data.forEach(company => {
          const companyCard = document.createElement('div');
          companyCard.className = 'company-card';
          companyCard.innerHTML = `
            <h3>${company.name_anon}: ${company.business_description}</h3>
            <p>Funding Round: ${company.funding_round}</p>
            <p>TTM Revenue: US$${company.ttm_revenue}mm</p>
            <p>Fundraising Size: US$${company.fundraising_size}K</p>
            <button onclick="location.href='Unlock.html'">Unlock Insights</button>
          `;
          dynamicContentDiv.appendChild(companyCard);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  