export class StringUtils {
	static capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	static normalize = (value: string) => value.trim().toLowerCase();

	static IsValidGuid(guidId?: string | null) {
		if (!guidId) return false;
		return /^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$/.test(guidId);
	}
}