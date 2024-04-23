/**
 * Определение рейтинга участника
 * @param {number} Ra - текущий рейтинг участника
 * @param {number} Rb - текущий рейтинг оппонента
 * @param {0 | 1} Sa - результат голосования
 * @returns {number} - новый рейтинг участника
 */
function calculateRaitind(Ra, Rb, Sa) {
	const Ea = 1 / (1 + Math.pow(10, (Rb - Ra) / 400));
	const k = Ra >= 2400 ? 10 : 20;

	return Math.round(Ra + k * (Sa - Ea));
}
