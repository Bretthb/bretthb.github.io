import { create } from "zustand";

const useStore = create((set) => ({
  isSidebarVisible: false,
  isModalOpen: false,
  selectedPdf: null,
  selectedPdfName: "",

  toggleSidebar: () =>
    set((state) => ({ isSidebarVisible: !state.isSidebarVisible })),

  openModal: (pdfUrl, pdfName) => {
    console.log(`Opening PDF: ${pdfName}`); // ✅ Log the PDF name
    set({
      isModalOpen: true,
      selectedPdf: pdfUrl,
      selectedPdfName: pdfName,
      isSidebarVisible: false,
    });
  },

  closeModal: () =>
    set({
      isModalOpen: false,
      selectedPdf: null,
      selectedPdfName: "",
      isSidebarVisible: false,
    }),
}));

export default useStore;
