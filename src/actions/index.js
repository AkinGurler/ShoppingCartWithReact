export const sepeteEkle = (book) => {
  return { type: "SEPETE_EKLE", payload: book };
};

export const sepettenCıkar = (id) => {
  return { type: "SEPETTEN_CIKAR", payload: id };
};
