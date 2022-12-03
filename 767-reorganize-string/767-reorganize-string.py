import heapq

class Solution:
    def reorganizeString(self, s: str) -> str:        
        maxHeap = []
        res = []
        prev = None
        
        # Use Counter() to build a maxHeap with priority key as the count of the char
        count = collections.Counter(s)
        for char, count in count.items():
            heappush(maxHeap, (count * -1, char))
            
        while maxHeap:
            count, char = heappop(maxHeap)
            count +=1 # Since it's a maxHeap we increment count to 'count down'
            res.append(char)
            
            # Push the element from previous iteration to heap 
            # since we can reuse the char after appending a different char to res
            if prev:
                heappush(maxHeap, prev)
                
            # Set prev to current element since we can't reuse it just yet
            # or not if count for the char is 0
            if count == 0:
                prev = None
            else:
                prev = (count, char)
        
        # If we have a prev value then there are too many of the same char to return 
        # a solution that fit the requirement
        return "" if prev else "".join(res)