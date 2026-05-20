const pdfData = {
  act1: {
    unit: 'Unidad 3 · Actividad 1',
    title: 'Primera fase de desarrollo, revisión y ajuste de los Sprints',
    pdf: 'Documentos/Actividad-1-Equipo-Y.pdf'
  },
  act2: {
    unit: 'Unidad 3 · Actividad 2',
    title: 'Segunda fase de desarrollo, revisión y ajuste de los Sprints y el backlog',
    pdf: 'Documentos/Actividad-2-Equipo-Y.pdf'
  },
  act3: {
    unit: 'Unidad 3 · Actividad 3',
    title: 'Tercera fase de desarrollo, revisión y ajuste de los Sprints y el backlog',
    pdf: 'Documentos/Actividad-3-Equipo-Y.pdf'
  },
  act4: {
    unit: 'Unidad 3 · Actividad Integradora',
    title: 'Producto final Unidad 3 — Gráficas de Burndown y Velocidad',
    pdf: 'Documentos/Actividad-integradora-Equipo-Y.pdf'
  },
  reporte: {
    unit: 'Reporte',
    title: 'Reporte de modificaciones al proyecto',
    pdf: 'Documentos/Reporte-de-modificaciones.pdf'
  }
};

function openModal(id) {
  const data = pdfData[id];
  document.getElementById('modal-unit').textContent = data.unit;
  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('pdf-modal-iframe').src = data.pdf;
  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('pdf-modal-iframe').src = '';
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

function closeModalOnOverlay(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
