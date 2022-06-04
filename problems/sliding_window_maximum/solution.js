/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
	const n = nums.length
	const result = []

	const deque = { head: null, tail: null }

	for (let i = 0; i < n; i++) {
		while (deque.head && deque.head.index < i - k + 1) {
			if (deque.head === deque.tail) {
				deque.head = deque.tail = null
			} else {
				deque.head = deque.head.next
				deque.head.prev = null    
			}
		}

		while (deque.tail && deque.tail.value < nums[i]) {
			if (deque.head === deque.tail) {
				deque.head = deque.tail = null
			} else {
				deque.tail = deque.tail.prev
				deque.tail.next = null    
			}
		}

		const node = { value: nums[i], index: i, next: null, prev: deque.tail }

		if (deque.head === null) {
			deque.head = deque.tail = node
		} else {
			deque.tail = deque.tail.next = node
		}

		if (k - 1 <= i) {
			result.push(deque.head.value)
		}
	}

	return result
}