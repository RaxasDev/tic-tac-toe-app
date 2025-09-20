export class DateUtils {
  static formatDate(dateString?: string): string {
    if (!dateString) return '';

    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.toLocaleString('pt-BR', { month: 'long' });
    const year = date.getFullYear();

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day} de ${month} de ${year} às ${hours}:${minutes}`;
  }
}
