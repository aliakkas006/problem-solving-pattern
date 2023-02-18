def average(salary):
    salary.remove(min(salary))
    salary.remove(max(salary))

    return sum(salary) / len(salary)
    # min_salary = min(salary)
    # max_salary = max(salary)
    # total_salary = 0
    # n = len(salary)

    # for current_salary in salary:
    #     if current_salary != min_salary and current_salary != max_salary:
    #         if n == 3:
    #             return current_salary
    #         total_salary += current_salary
        
    # return total_salary / (n - 2)


print(average([4000,3000,1000,2000]))
