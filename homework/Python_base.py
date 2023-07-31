# 1. 숫자끼리 비교하는 연산과 문자끼리 비교하는 연산 중 왜 문자끼리 비교하는 연산이 상대적으로 불리한지 이유에 대해서 정리해보고 샘플 코드를 구현해서 제출하기

print('10' < '2')  # True
print(10 < 2)  # False

# 정렬도 제대로 안된다.

numbers_as_str = ['10', '5', '20', '3', '16']
numbers_as_str.sort()
print(numbers_as_str)
# 결과: ['10', '16', '20', '3', '5']

numbers_as_int = [10, 5, 20, 3, 16]
numbers_as_int.sort()
print(numbers_as_int)
# 결과: [3, 5, 10, 16, 20]

# 2. 파이썬으로 일부 중복되는 element를 저장하고 최소 element가 10개이상 되는 배열을 만든다. 그리고 set() 구문 없이 오로지 for in 문으로 배열의 중복된 값을 없애는 코드를 작성하기

def deleteDuplicate(arr):
    for_check = []

    for item in arr:
        if not item in for_check:
            for_check.append(item)

    return for_check

def cheating(arr):
    return list(dict.fromkeys(arr))

print(deleteDuplicate([0,0,0,1,1,1,1,1,15,16,19,18,15,15,15]))
print(cheating([0,0,0,1,1,1,1,1,15,16,19,18,15,15,15]))