
"""
1000-digit Fibonacci number
Problem 25

The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn1 + Fn2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1		F7 = 13
F2 = 1		F8 = 21
F3 = 2		F9 = 34
F4 = 3		F10 = 55
F5 = 5		F11 = 89
F6 = 8		F12 = 144

The 12th term, F12, is the first term to contain three digits.

What is the first term in the Fibonacci sequence to contain 1000 digits?
"""
def n_digitFib(n):
    a, b, li = 0, 1, []
    while numberlen(a) < n:
        a, b = b, a+b
        li.append(a)
    return len(li)

def numberlen(n):
    return (len(str(n)))

print(n_digitFib(1000))