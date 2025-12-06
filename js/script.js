
    // Small helpers: lightweight, no external libs ...
    function handleSubmit(e){
      e.preventDefault();
      const f = e.target;
      alert('Thanks ' + (f.name.value || '') + '! Demo request received. We will contact you at ' + (f.email.value || '')); 
      f.reset();
    }
    function openChat(){
      alert('Open your chat / whatsapp link here.');
    }
    function toggleOffer(){
      const panel = document.getElementById('offer-panel');
      panel.classList.toggle('open');
    }

    // Offer Timer 30:00 → 0:00
    let timeLeft = 1800;
    setInterval(()=>{
      if(timeLeft <= 0) return;
      timeLeft--;
      let m = String(Math.floor(timeLeft/60)).padStart(2,'0');
      let s = String(timeLeft%60).padStart(2,'0');
      document.getElementById('countdown').innerText = `${m}:${s}`;
    },1000);

    function submitOffer(){
      const name = document.getElementById('offer-name').value;
      const mobile = document.getElementById('offer-mobile').value;
      if(!/^[A-Za-z ]+$/.test(name)){
        alert('Name must contain letters only'); return;
      }
      if(!/^[0-9]{10}$/.test(mobile)){
        alert('Mobile number must be 10 digits'); return;
      }
      const city = document.getElementById('offer-city').value;
      const email = document.getElementById('offer-email').value;
      if(!city || !email){ alert('Please fill all fields'); return; }
      alert('Offer claimed successfully! Our team will contact you.');
      toggleOffer();
    }
    // ---------------- FORM SHAKE ----------------

  
document.querySelectorAll(".faq-card").forEach(card => {
          card.addEventListener("click", () => {
            card.classList.toggle("active");
          });
        });

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".faq-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");

      const arrow = card.querySelector(".arrow");
      if (arrow) {
        arrow.textContent = card.classList.contains("active") ? "▼" : "▶";
      }
    });
  });   document.querySelectorAll(".faq-card").forEach(card => {
          card.addEventListener("click", () => {
            card.classList.toggle("active");
          });
        });
});        