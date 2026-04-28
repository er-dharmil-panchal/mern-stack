const createForm = document.getElementById("create-form");
const analyticsForm = document.getElementById("analytics-form");
const createResult = document.getElementById("create-result");
const analyticsResult = document.getElementById("analytics-result");

function escapeHtml(value) {
     return String(value)
          .replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")
          .replaceAll('"', "&quot;")
          .replaceAll("'", "&#39;");
}

function showBox(el, type, html) {
     el.classList.remove("hidden", "ok", "error");
     el.classList.add(type);
     el.innerHTML = html;
}

createForm.addEventListener("submit", async (event) => {
     event.preventDefault();

     const urlInput = document.getElementById("long-url");
     const originalUrl = urlInput.value.trim();

     if (!originalUrl) {
          showBox(createResult, "error", "Please enter a valid URL.");
          return;
     }

     try {
          const response = await fetch("/url", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json"
               },
               body: JSON.stringify({ url: originalUrl })
          });

          const data = await response.json();

          if (!response.ok) {
               showBox(createResult, "error", escapeHtml(data.message || "Could not generate short URL."));
               return;
          }

          const shortId = data.id;
          const shortLink = `${window.location.origin}/url/${shortId}`;

          showBox(
               createResult,
               "ok",
               `
      <div><strong>Short ID:</strong> ${escapeHtml(shortId)}</div>
      <div><strong>Short URL:</strong> <a href="${escapeHtml(shortLink)}" target="_blank" rel="noreferrer">${escapeHtml(shortLink)}</a></div>
      <div class="muted">Open this URL to trigger redirect and track visits.</div>
      `
          );

          document.getElementById("short-id").value = shortId;
     } catch (error) {
          showBox(createResult, "error", "Server error. Please check backend logs.");
     }
});

analyticsForm.addEventListener("submit", async (event) => {
     event.preventDefault();

     const shortIdInput = document.getElementById("short-id");
     const shortId = shortIdInput.value.trim();

     if (!shortId) {
          showBox(analyticsResult, "error", "Please enter a short ID.");
          return;
     }

     try {
          const response = await fetch(`/url/analytics/${encodeURIComponent(shortId)}`);
          const data = await response.json();

          if (!response.ok) {
               showBox(analyticsResult, "error", escapeHtml(data.message || "Could not fetch analytics."));
               return;
          }

          const clicks = Number(data.totalClicks || 0);
          const history = Array.isArray(data.visitHistory) ? data.visitHistory : [];

          const latestFive = history.slice(-5).reverse();
          const listHtml = latestFive.length
               ? `<ol class="list">${latestFive
                    .map((item) => `<li>${new Date(item.timestamp).toLocaleString()}</li>`)
                    .join("")}</ol>`
               : '<p class="muted">No visit history yet.</p>';

          showBox(
               analyticsResult,
               "ok",
               `
      <div><strong>Total Clicks:</strong> ${clicks}</div>
      <div><strong>Recent Visits:</strong></div>
      ${listHtml}
      `
          );
     } catch (error) {
          showBox(analyticsResult, "error", "Server error. Please check backend logs.");
     }
});
