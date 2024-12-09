export function formatDateTime(dateTimeStr:string) {
    const date = new Date(dateTimeStr);

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const ordinal = (n:any) => {
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    };

    const formattedHours = hours % 12 || 12; 
    const ampm = hours >= 12 ? "pm" : "am";

    return `${day}${ordinal(day)} ${month} ${year}, ${formattedHours} ${ampm}`;
}


