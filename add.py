import sys
def add():
    x = int(sys.argv[1])
    y = int(sys.argv[2])

    return x-y

def test_answer():
    assert add() == 2



