"""
Largest product in a grid
Problem 11

In the 20*20 grid below, four numbers along a diagonal line have been marked in red.
[
[ 8, 2,22,97,38,15, 0,40, 0,75, 4, 5, 7,78,52,12,50,77,91, 8],
[49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48, 4,56,62, 0],
[81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,3,49,13,36,65],
[52,70,95,23, 4,60,11,42,69,24,68,56, 1,32,56,71,37, 2,36,91],
[22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
[24,47,32,60,99,3,45, 2,44,75,33,53,78,36,84,20,35,17,12,50],
[32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
[67,26,20,68, 2,62,12,20,95,63,94,39,63, 8,40,91,66,49,94,21],
[24,55,58, 5,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
[21,36,23, 9,75, 0,76,44,20,45,35,14, 0,61,33,97,34,31,33,95],
[78,17,53,28,22,75,31,67,15,94,3,80, 4,62,16,14, 9,53,56,92],
[16,39, 5,42,96,35,31,47,55,58,88,24, 0,17,54,24,36,29,85,57],
[86,56, 0,48,35,71,89, 7, 5,44,44,37,44,60,21,58,51,54,17,58],
[19,80,81,68, 5,94,47,69,28,73,92,13,86,52,17,77, 4,89,55,40],
[ 4,52, 8,83,97,35,99,16, 7,97,57,32,16,26,26,79,33,27,98,66],
[88,36,68,87,57,62,20,72,3,46,33,67,46,55,12,32,63,93,53,69],
[ 4,42,16,73,38,25,39,11,24,94,72,18, 8,46,29,32,40,62,76,36],
[20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74, 4,36,16],
[20,73,35,29,78,31,90, 1,74,31,49,71,48,86,81,16,23,57, 5,54],
[ 1,70,54,71,83,51,54,69,16,92,33,48,61,43,52, 1,89,19,67,48]
]
The product of these numbers is 26  63  78  14 = 1788696.

What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 2 20 grid?
"""

# Calculate product in a list

# 
def xRow(subL, steps = 4, highest = 0):
    for counter in range(len(subL)):
        rowProduct = product(subL[counter: counter+steps])
        if rowProduct >= highest:
            highest = rowProduct
    return highest

def allYrows(L):
    best = 0
    for y in range(len(L[0])):
        templist = []
        for x in range(len(L)):
            templist.append(board[x][y])

        total = xRow(templist)
        if total >= best:
            best = total
        print(total, xRow(templist))
    return best

def allXrows(L):
    best = 0
    for row in L:
        rowHighest = xRow(row)
        if rowHighest >= best:
            best =rowHighest
        print(row, rowHighest)
    return best

def diagonal(L, best = 0, step = 4):
    interations = 0
    for row in range(len(L)):
        for y in range(len(L[0])):
            templist = []
            for x in range(step):
                interations += 1
                try:
                    templist.append(L[row+x][y+x])
                except:
                    templist.append(1)
                    break
            if product(templist) >= best:
                best = product(templist)
            print(row, templist)
    print("TOTAL ITERATIONS", interations)
    return best

def diagonal2(L, step = 4):
    best = 0
    for row in range(len(L)):
        for y in range(len(board[0])-1, -1, -1):
            templist = []
            for x in range(step):
                try:
                    templist.append(L[row+x][y-x])
                except:
                    templist.append(1)
                    break
            if product(templist) >= best:
                best = product(templist)
            print(row, templist)
    return best

def printGrid(li):
    for x in range(len(li)):
        for y in range(len(li[x])):
            print(str(y), end=' ')
        print('')

def loopAll(L):
    x, y, d1, d2 = allXrows(L), allYrows(L), diagonal(L), diagonal2(L)
    return max(x,y,d1, d2)

board = [
    [ 8, 2,22,97,38,15, 0,40, 0,75, 4, 5, 7,78,52,12,50,77,91, 8],
    [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48, 4,56,62, 0],
    [81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,3,49,13,36,65],
    [52,70,95,23, 4,60,11,42,69,24,68,56, 1,32,56,71,37, 2,36,91],
    [22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
    [24,47,32,60,99,3,45, 2,44,75,33,53,78,36,84,20,35,17,12,50],
    [32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
    [67,26,20,68, 2,62,12,20,95,63,94,39,63, 8,40,91,66,49,94,21],
    [24,55,58, 5,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
    [21,36,23, 9,75, 0,76,44,20,45,35,14, 0,61,33,97,34,31,33,95],
    [78,17,53,28,22,75,31,67,15,94,3,80, 4,62,16,14, 9,53,56,92],
    [16,39, 5,42,96,35,31,47,55,58,88,24, 0,17,54,24,36,29,85,57],
    [86,56, 0,48,35,71,89, 7, 5,44,44,37,44,60,21,58,51,54,17,58],
    [19,80,81,68, 5,94,47,69,28,73,92,13,86,52,17,77, 4,89,55,40],
    [ 4,52, 8,83,97,35,99,16, 7,97,57,32,16,26,26,79,33,27,98,66],
    [88,36,68,87,57,62,20,72,3,46,33,67,46,55,12,32,63,93,53,69],
    [ 4,42,16,73,38,25,39,11,24,94,72,18, 8,46,29,32,40,62,76,36],
    [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74, 4,36,16],
    [20,73,35,29,78,31,90, 1,74,31,49,71,48,86,81,16,23,57, 5,54],
    [ 1,70,54,71,83,51,54,69,16,92,33,48,61,43,52, 1,89,19,67,48]
]


#print(loopAll(board))
#print(allXrows(board))
#print(allYrows(board))

board = [
    [1,2,3,4,5],
    [4,5,6,7,8],
    [7,8,9,10,11],
    [7,8,9,10,11],
    [7,8,9,10,11]
]

def product(L, total = 1):
    for el in L:
        total *= el
    return total


step, top, counter = 4, 0, 0

for it in range(len(board) - step + 1):
    for y in range(len(board)):
        xsub, ysub, zsub = [], [], []
        for x in range(step):
            counter += 1
            try:
                xsub.append(board[y][it+x])
                ysub.append(board[x][y])
                zsub.append(board[it+x][y+x])
            except:
                break
        total = max(product(xsub), product(ysub), product(zsub))
        if total >= top:
            top = total
        print("X",x,xsub)
        print("Y",y,ysub)
        print("Z",x+y,zsub)
    print()
print(top,counter)