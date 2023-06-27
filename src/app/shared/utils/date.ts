/**
 * format Date for Frontend
 * @param dateString
 * @author hoang.pt
 */
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};
