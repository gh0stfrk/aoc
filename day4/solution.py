def count_xmas(grid):
    rows = len(grid)
    cols = len(grid[0])
    word = "XMAS"
    directions = [
        (0, 1),  # Horizontal right
        (0, -1), # Horizontal left
        (1, 0),  # Vertical down
        (-1, 0), # Vertical up
        (1, 1),  # Diagonal down-right
        (-1, -1),# Diagonal up-left
        (1, -1), # Diagonal down-left
        (-1, 1)  # Diagonal up-right
    ]

    def is_valid(x, y, dx, dy):
        for i in range(len(word)):
            nx, ny = x + i*dx, y + i*dy
            if not (0 <= nx < rows and 0 <= ny < cols and grid[nx][ny] == word[i]):
                return False
        return True

    count = 0
    for i in range(rows):
        for j in range(cols):
            for dx, dy in directions:
                if is_valid(i, j, dx, dy):
                    count += 1

    return count

# Example Grid
grid = [
    ['X', 'M', 'A', 'S', 'X'],
    ['A', 'X', 'M', 'A', 'S'],
    ['M', 'A', 'S', 'X', 'M'],
    ['S', 'X', 'M', 'A', 'X'],
    ['X', 'A', 'S', 'M', 'X']
]


def read_file_data(file_name):
    """
    Reads file data and returns
    processed data.
    """
    main = []
    with open(file_name, 'r') as f:
        data = f.read()
        records = data.split('\n')
        for item in records:
            main.append(list(item))
    
    return main

input = read_file_data('input.txt')
print(count_xmas(input))  
