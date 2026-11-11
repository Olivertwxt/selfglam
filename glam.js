// 1. AUTO YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// 2. COUNTDOWN TIMER - CHANGED: Now 1d 10h 18m 10s like Bella, not midnight reset
let totalSeconds = (1 * 24 * 60 * 60) + (10 * 60 * 60) + (18 * 60) + 10;

function updateCountdown() {
  const d = Math.floor(totalSeconds / 86400);
  const h = Math.floor((totalSeconds % 86400) / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  const dEl = document.getElementById("d");
  const hEl = document.getElementById("h");
  const mEl = document.getElementById("m");
  const sEl = document.getElementById("s");

  if (dEl) dEl.textContent = String(d).padStart(2, '0');
  if (hEl) hEl.textContent = String(h).padStart(2, '0');
  if (mEl) mEl.textContent = String(m).padStart(2, '0');
  if (sEl) sEl.textContent = String(s).padStart(2, '0');

  // Big countdown section mirrors the top bar
  const big = { d2: d, h2: h, m2: m, s2: s };
  Object.keys(big).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(big[id]).padStart(2, '0');
  });

  if (totalSeconds > 0) totalSeconds--;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// 3. FAQ ACCORDION - click to open/close
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const isOpen = faqItem.classList.contains("active");

    // Close all others
    document.querySelectorAll(".faq").forEach(item => {
      item.classList.remove("active");
    });

    // Open clicked one if it was closed
    if (!isOpen) {
      faqItem.classList.add("active");
    }
  });
});

// 4. SOCIAL PROOF POPUP - rotates REAL reviews only - CHANGED: Removed 1-1, added Rose/Yetty/Ihuoma
const proofs = [
  { text: "I used to pay ₦70k for every event, now it takes me less than an hour to do my own makeup!", name: "Amaka • Lagos • Verified Student" },
  { text: "My graduation makeup ateeee, all thanks to this class.", name: "Graduation Student • Verified Student" },
  { text: "See what I did with the eyes. I'm an expert now!!!!!!", name: "Real Student • Verified Student" },
  { text: "Soft glam, done by ME. Blush, brows, lips - all me.", name: "Real Student • Verified Student" },
  { text: "I did my own makeup for my event and everyone thought I paid a MUA.", name: "Rose • Verified Student" },
  { text: "I used to panic every time I had to do my makeup. Now I enjoy it.", name: "Yetty • Australia • Verified Student" },
  { text: "From zero knowledge to doing my own glam confidently.", name: "Ihuoma • UK • Verified Student" },
  { text: "Thank you very much. I love it!!!", name: "Real Student • Verified Student" }
];

let proofIndex = 0;
const popup = document.getElementById("proof-popup");
const proofText = document.getElementById("proof-text");
const proofName = document.getElementById("proof-name");

function showProof() {
  const current = proofs[proofIndex];
  proofText.textContent = "“" + current.text + "”";
  proofName.textContent = current.name + " • Just now";
  popup.classList.add("show");

  // Hide after 6 seconds
  setTimeout(() => {
    popup.classList.remove("show");
  }, 6000);

  proofIndex = (proofIndex + 1) % proofs.length;
}

// First popup after 8 seconds, then every 30 seconds
setTimeout(() => {
  showProof();
  setInterval(showProof, 30000);
}, 8000);

// Close button
document.getElementById("proof-close").addEventListener("click", () => {
  popup.classList.remove("show");
});

