"use strict";

const config = window.TaroTherapeuticConfig;

if (!config) {
  throw new Error("A configuração do Tarô Terapêutico não foi carregada.");
}

if (!/^\d{8,15}$/.test(config.whatsappPhone)) {
  throw new Error(
    "Configure whatsappPhone em js/config.js com 8 a 15 dígitos, incluindo o código do país."
  );
}

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  const message = config.whatsappMessages[link.dataset.whatsappMessage];

  if (!message) {
    throw new Error(
      `A mensagem de WhatsApp "${link.dataset.whatsappMessage}" não está configurada.`
    );
  }

  link.href = `https://wa.me/${config.whatsappPhone}?text=${encodeURIComponent(message)}`;
});
