(() => {
  const imageSelector = "img:not(.brand-logo):not(.no-lightbox)";
  const images = Array.from(document.querySelectorAll(imageSelector)).filter((image) => {
    return !image.closest(".brand-link, .hero-mark");
  });
  if (!images.length) return;

  const translate = (label) => window.RayGearI18n?.translateText(label) || label;
  const makeButton = (className, text, label) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = className;
    button.textContent = text;
    button.setAttribute("aria-label", translate(label));
    return button;
  };

  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.hidden = true;
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", translate("Image viewer"));

  const topbar = document.createElement("div");
  topbar.className = "lightbox-topbar";
  const counter = document.createElement("p");
  counter.className = "lightbox-counter";
  counter.setAttribute("aria-live", "polite");
  const closeButton = makeButton("lightbox-close", "×", "Close image viewer");
  topbar.append(counter, closeButton);

  const stage = document.createElement("div");
  stage.className = "lightbox-stage";
  const largeImage = document.createElement("img");
  largeImage.className = "lightbox-image";
  largeImage.alt = "";
  largeImage.draggable = false;
  stage.appendChild(largeImage);

  const caption = document.createElement("p");
  caption.className = "lightbox-caption";

  const controls = document.createElement("div");
  controls.className = "lightbox-controls";
  const previousButton = makeButton("lightbox-nav", "‹", "Previous image");
  const nextButton = makeButton("lightbox-nav", "›", "Next image");
  controls.append(previousButton, nextButton);

  const panel = document.createElement("div");
  panel.className = "lightbox-panel";
  panel.append(topbar, stage, caption, controls);
  overlay.appendChild(panel);
  document.body.appendChild(overlay);

  let activeIndex = 0;
  let returnFocus = null;
  let pointerStartX = null;

  const updateControls = () => {
    const count = images.length;
    counter.textContent = count > 1 ? `${activeIndex + 1} / ${count}` : "1 / 1";
    previousButton.hidden = count < 2;
    nextButton.hidden = count < 2;
    previousButton.setAttribute("aria-label", translate("Previous image"));
    nextButton.setAttribute("aria-label", translate("Next image"));
    closeButton.setAttribute("aria-label", translate("Close image viewer"));
    overlay.setAttribute("aria-label", translate("Image viewer"));
  };

  const showImage = (index) => {
    activeIndex = (index + images.length) % images.length;
    const source = images[activeIndex];
    largeImage.src = source.currentSrc || source.src;
    largeImage.alt = source.alt || "";
    caption.textContent = source.alt || "";
    updateControls();
  };

  const open = (index) => {
    returnFocus = images[index];
    showImage(index);
    overlay.hidden = false;
    document.body.classList.add("lightbox-open");
    closeButton.focus();
  };

  const close = () => {
    overlay.hidden = true;
    document.body.classList.remove("lightbox-open");
    largeImage.removeAttribute("src");
    returnFocus?.focus?.();
  };

  const previous = () => showImage(activeIndex - 1);
  const next = () => showImage(activeIndex + 1);

  images.forEach((image, index) => {
    image.classList.add("lightbox-trigger");
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", translate("Open image in full-size viewer"));
    image.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      open(index);
    });
    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open(index);
      }
    });
  });

  closeButton.addEventListener("click", close);
  previousButton.addEventListener("click", previous);
  nextButton.addEventListener("click", next);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });

  overlay.addEventListener("keydown", (event) => {
    if (overlay.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      close();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    } else if (event.key === "Tab") {
      const focusable = [closeButton, previousButton, nextButton].filter((button) => !button.hidden);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  stage.addEventListener("pointerdown", (event) => {
    pointerStartX = event.clientX;
  });
  stage.addEventListener("pointerup", (event) => {
    if (pointerStartX === null) return;
    const delta = event.clientX - pointerStartX;
    pointerStartX = null;
    if (Math.abs(delta) > 55 && images.length > 1) {
      if (delta < 0) next();
      else previous();
    }
  });
  stage.addEventListener("pointercancel", () => {
    pointerStartX = null;
  });
})();