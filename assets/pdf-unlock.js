(() => {
  const form = document.getElementById("questionnaire-unlock-form");
  if (!form) return;

  const status = document.getElementById("questionnaire-password-status");
  const passwordInput = document.getElementById("questionnaire-password");
  const encoder = new TextEncoder();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const password = passwordInput.value;
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    status.textContent = "Preparing your download…";

    try {
      const response = await fetch("assets/questionnaire.enc", { cache: "no-store" });
      if (!response.ok) throw new Error("file-unavailable");

      const bytes = new Uint8Array(await response.arrayBuffer());
      if (bytes.length < 52 || new TextDecoder().decode(bytes.slice(0, 8)) !== "RAYPDF01") {
        throw new Error("file-invalid");
      }

      const salt = bytes.slice(8, 24);
      const iv = bytes.slice(24, 36);
      const ciphertext = bytes.slice(36);
      const material = await crypto.subtle.importKey(
        "raw", encoder.encode(password), "PBKDF2", false, ["deriveKey"]
      );
      const key = await crypto.subtle.deriveKey(
        { name: "PBKDF2", salt, iterations: 310000, hash: "SHA-256" },
        material,
        { name: "AES-GCM", length: 256 },
        false,
        ["decrypt"]
      );
      const plaintext = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv, additionalData: encoder.encode("RayInGearPDF-v1"), tagLength: 128 },
        key,
        ciphertext
      );

      const url = URL.createObjectURL(new Blob([plaintext], { type: "application/pdf" }));
      const link = document.createElement("a");
      link.href = url;
      link.download = "Interests_Boundaries_Mobile_Contact_Final.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1500);
      status.textContent = "Your questionnaire has been unlocked and downloaded.";
      passwordInput.value = "";
    } catch (error) {
      status.textContent = error && error.message === "file-unavailable"
        ? "The protected file is not available yet. Please try again later."
        : error && error.message === "file-invalid"
          ? "The protected file could not be read. Please contact the site owner."
          : "The password is incorrect, or the file could not be decrypted.";
    } finally {
      button.disabled = false;
    }
  });
})();
