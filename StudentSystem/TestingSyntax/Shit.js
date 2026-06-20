board = [
    [5, 3, 0, 0, 0, 0, 0, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 9, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

def isValid(row, col, num):
    for i in range(9):
        if board[row][i] == num or board[i][col] == num:
            return False

    c = col % 3
    r = row % 3

    for i in range(3):
        for j in range(3):
            if board[row - r + i][col - c + j] == num:
                return False

    return True

def solve():
    for i in range(9):
        for j in range(9):
            if board[i][j] == 0:
                for k in range(1, 10):
                    if isValid(i, j, k):
                        board[i][j] = k
                        
                        if solve(): 
                            return True

                        board[i][j] = 0
                return False
    return True

if __name__ == "__main__":
    if solve():
        print("Solved")
    else:
        print("Not Solved")

    for i in range(9):
        for j in range(9):
            print(board[i][j], end=" ")
        print()
