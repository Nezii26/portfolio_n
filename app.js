

/* =========================================
   PROJECT INFINITE SCROLL
========================================= */

// Get original project set

const originalSet = document.querySelector(".project-set");

// Get duplicate project set

const duplicateSet = document.querySelector(".duplicate-set");

// Duplicate all project cards

if (originalSet && duplicateSet) {

    duplicateSet.innerHTML = originalSet.innerHTML;

}
