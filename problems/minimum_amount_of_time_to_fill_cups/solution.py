class Solution:
    def fillCups(self, amount: List[int]) -> int:
        maxHeap = []
        for n in amount:
            maxHeap.append(n * -1)
        # while there are still cups to be filled
        heapify(maxHeap)
        res = 0
        while maxHeap[0] < 0:
            res += 1
            top = heapq.heappop(maxHeap)
            next = maxHeap[0]
            if next < 0 :
                heapq.heappop(maxHeap)
                heapq.heappush(maxHeap, next + 1)
            heapq.heappush(maxHeap, top + 1)
        return res