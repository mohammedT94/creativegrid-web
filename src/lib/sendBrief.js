// Sends the contact brief via Web3Forms (free tier, no backend).
//
// Setup (one-time):
//   1. Get a Web3Forms access key at https://web3forms.com
//   2. Put it in `.env.local` as VITE_WEB3FORMS_KEY=...
//   3. Restart `npm run dev`
//
// Without a key, the form falls back to opening the user's mail client.

const WEB3_ENDPOINT = "https://api.web3forms.com/submit";
const TO_EMAIL = "contact@creativegrid.cloud";

export async function sendBrief({ form, lang }) {
  const key = import.meta.env.VITE_WEB3FORMS_KEY;

  if (!key) {
    openMailto({ form });
    return { ok: true, via: "mailto" };
  }

  const fd = new FormData();
  fd.append("access_key", key);
  fd.append("subject", `New brief — ${form.name || "Website"}`);
  fd.append("from_name", form.name || "Website visitor");
  if (form.email) fd.append("replyto", form.email);
  fd.append("botcheck", "");

  fd.append("name", form.name || "");
  fd.append("email", form.email || "");
  fd.append("phone", form.phone || "—");
  fd.append("project_types", (form.projectType || []).join(", "));
  fd.append("budget", form.budget || "—");
  fd.append("language", lang || "");
  fd.append("message", form.details || "—");

  const res = await fetch(WEB3_ENDPOINT, { method: "POST", body: fd });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.success === false) {
    throw new Error(data?.message || `HTTP ${res.status}`);
  }
  return { ok: true, via: "web3forms" };
}

function openMailto({ form }) {
  const lines = [
    `Name: ${form.name || ""}`,
    `Email: ${form.email || ""}`,
    `Phone: ${form.phone || ""}`,
    `Project types: ${(form.projectType || []).join(", ")}`,
    `Budget: ${form.budget || ""}`,
    "",
    "Details:",
    form.details || "",
  ];
  const body = encodeURIComponent(lines.join("\n"));
  const subject = encodeURIComponent(`New project brief — ${form.name || "Website"}`);
  window.open(`mailto:${TO_EMAIL}?subject=${subject}&body=${body}`, "_blank");
}
