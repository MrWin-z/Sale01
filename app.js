// ============================================================
// FRONTEND API HELPER
// ============================================================

async function apiGet(action, params = {}) {
  const url = new URL(API_URL);
  url.searchParams.set("action", action);

  Object.keys(params).forEach(key => {
    if (params[key] !== undefined && params[key] !== "") {
      url.searchParams.set(key, params[key]);
    }
  });

  const res = await fetch(url.toString());
  return await res.json();
}

async function apiPost(action, payload = {}) {
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action,
      ...payload
    })
  });

  return await res.json();
}

function money(value) {
  if (!value) return "-";
  return Number(value).toLocaleString("th-TH");
}

function safe(value) {
  return value || "-";
}

function statusBadge(status) {
  const map = {
    "New Lead": "badge-blue",
    "Contacted": "badge-gray",
    "Interested": "badge-yellow",
    "Appointment": "badge-purple",
    "Walk-in": "badge-green",
    "Booking": "badge-gold",
    "Loan Process": "badge-orange",
    "Transfer": "badge-dark",
    "Lost": "badge-red"
  };

  return `<span class="badge ${map[status] || "badge-gray"}">${status || "-"}</span>`;
}

function priorityBadge(priority) {
  const map = {
    "Hot": "badge-red",
    "Warm": "badge-yellow",
    "Cold": "badge-gray"
  };

  return `<span class="badge ${map[priority] || "badge-gray"}">${priority || "Warm"}</span>`;
}

function goLeadDetail(leadId) {
  window.location.href = `lead-detail.html?lead_id=${encodeURIComponent(leadId)}`;
}
