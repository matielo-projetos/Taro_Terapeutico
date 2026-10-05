"use strict";

const config = window.TaroTherapeuticConfig;

if (!config) {
  throw new Error("A configuração do Tarô Terapêutico não foi carregada.");
}

if (config.whatsappPhone) {
  if (!/^\d{8,15}$/.test(config.whatsappPhone)) {
    console.error(
      "Configure whatsappPhone em js/config.js com 8 a 15 dígitos, incluindo o código do país."
    );
  } else {
    document.querySelectorAll(".js-whatsapp").forEach((button) => {
      button.disabled = false;
      button.removeAttribute("title");
      button.addEventListener("click", () => {
        window.location.assign(`https://wa.me/${config.whatsappPhone}`);
      });
    });
  }
}
