/**
 * Функция тасования массива
 * @param {any[]} arr - массив элементов
 * @returns {any[]} - перемешанный массив
 */
function shuffle(arr) {
	let j, temp;

	for (let i = arr.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}

	return arr;
}
