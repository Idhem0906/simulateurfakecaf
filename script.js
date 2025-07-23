function calculer() {
  const salaires = parseFloat(document.getElementById('salaires').value) || 0;
  const poleemploi = parseFloat(document.getElementById('poleemploi').value) || 0;
  const indemnites = parseFloat(document.getElementById('indemnites').value) || 0;
  const pensions = parseFloat(document.getElementById('pensions').value) || 0;
  const autres = parseFloat(document.getElementById('autres').value) || 0;

  const total = salaires + poleemploi + indemnites + pensions + autres;
  document.getElementById('resultat').textContent =
    `✅ Montant total estimé à déclarer : ${total.toFixed(2)} €`;

  const conseil = document.getElementById('conseil');
  if (total < 1000) {
    conseil.textContent = "💡 Vous pourriez être éligible à un complément d'aide.";
  } else if (total < 2500) {
    conseil.textContent = "📎 Pensez à vérifier vos droits selon votre situation familiale.";
  } else {
    conseil.textContent = "🔍 Montant élevé, assurez-vous de bien vérifier chaque ressource déclarée.";
  }
}

function resetForm() {
  ['salaires','poleemploi','indemnites','pensions','autres'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('resultat').textContent = '';
  document.getElementById('conseil').textContent = '';
}