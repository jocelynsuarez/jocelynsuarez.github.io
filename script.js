const dots = document.querySelectorAll('.year-node');
const reportTitle = document.querySelector('.report-title');
const reportDescription = document.querySelector('.report-description');
const downloadButton = document.querySelector('.download-button');
const docPages = document.querySelector('.doc-pages');
const docSize = document.querySelector('.doc-size');
const docType = document.querySelector('.doc-type');
const reportCard = document.querySelector('.report-card');

// Funzione per aggiornare il contenuto delle card in base alla selezione
function updateContent(year) {
	const content = contentMap[year];
	if (content) {
		reportTitle.textContent = content.title;
		reportDescription.innerHTML = content.description.split('\n\n').map(p => `<p>${p}</p>`).join('');
		docPages.textContent = content.docPages;
		docSize.textContent = content.docSize;
		docType.textContent = content.docType;
		downloadButton.href = content.link;
	}
}

// event listener per ogni elemento della timeline
dots.forEach((dot) => {
	dot.addEventListener('click', () => {
		dots.forEach((d) => d.classList.remove('active'));
		dot.classList.add('active');
		updateContent(dot.dataset.year);
	});
});

// Simulazione del click per inizializzare il primo elemento al caricamento della pagina
dots[0].click();

document.addEventListener('DOMContentLoaded', () => {
	document.body.classList.add('loaded');
});
