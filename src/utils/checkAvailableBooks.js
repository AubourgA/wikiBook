export function hasBookCopyWithStatus(copies, type) {
    if (!copies || !Array.isArray(copies)) {
      return false;
    }
  
    // Vérifie si au moins un bookCopy a le statut donné
    return copies.some(item => item.status.type === type);
  }