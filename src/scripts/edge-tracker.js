// src/scripts/edge-tracker.js

document.addEventListener('DOMContentLoaded', () => {
  const sourceInput = document.getElementById('edge_lead_source');
  
  if (sourceInput) {
    const urlParams = new URLSearchParams(window.location.search);
    
    const utmSource = urlParams.get('utm_source') || '';
    const utmMedium = urlParams.get('utm_medium') || '';
    const utmCampaign = urlParams.get('utm_campaign') || '';
    const fromPage = urlParams.get('from') || '';
    
    const referrerURL = document.referrer;
    let referrerHost = 'Direct/Unknown';
    if (referrerURL) {
      try { referrerHost = new URL(referrerURL).hostname; } 
      catch (e) { referrerHost = 'Invalid Referrer'; }
    }
    
    const leadData = [
      utmSource ? `Source: ${utmSource}` : '',
      utmMedium ? `Medium: ${utmMedium}` : '',
      utmCampaign ? `Campaign: ${utmCampaign}` : '',
      fromPage ? `Internal: ${fromPage}` : '',
    ].filter(Boolean).join(' | ');

    sourceInput.value = leadData || `Referrer: ${referrerHost}`;
    console.log("Edge Tracker Active. Captured Source: ", sourceInput.value);
  }
});