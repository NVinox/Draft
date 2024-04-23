/**
 * Функция подсчета количества раундов
 * @param {number} membersCount - количество участников
 * @returns {number} - количество раундов
 */
function calculateRound(membersCount) {
	let seeds = 0;

	while (membersCount !== 1) {
		membersCount = Math.round(membersCount / 2);
		seeds++;
	}

	return seeds;
}
