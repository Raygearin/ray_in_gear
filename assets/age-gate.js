(() => {
  const gate = document.getElementById("age-gate");
  if (!gate) return;

  const storageKey = "ray_in_gear_age_confirmed";
  const body = document.body;
  const adultButton = gate.querySelector("#age-confirm-adult");
  const underageButton = gate.querySelector("#age-confirm-underage");
  const actions = gate.querySelector(".age-gate-actions");
  const denied = gate.querySelector(".age-gate-denied");

  let alreadyConfirmed = false;
  try {
    alreadyConfirmed = window.localStorage.getItem(storageKey) === "yes";
  } catch (error) {
    // The gate still works for this visit when browser storage is unavailable.
  }

  const pageElements = Array.from(body.children).filter((element) => element !== gate);

  const closeGate = () => {
    pageElements.forEach((element) => {
      element.inert = false;
    });
    body.classList.remove("age-gate-active");
    gate.classList.add("is-hidden");
    window.setTimeout(() => gate.remove(), 220);
  };

  if (alreadyConfirmed) {
    gate.remove();
    return;
  }

  body.classList.add("age-gate-active");
  pageElements.forEach((element) => {
    element.inert = true;
  });

  adultButton?.focus();

  adultButton?.addEventListener("click", () => {
    try {
      window.localStorage.setItem(storageKey, "yes");
    } catch (error) {
      // Continue without saving if browser storage is unavailable.
    }
    closeGate();
  });

  underageButton?.addEventListener("click", () => {
    if (actions) actions.hidden = true;
    if (denied) denied.hidden = false;
    denied?.focus();
  });
})();