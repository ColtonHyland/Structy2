import os
import json
import re

# Function to extract and format the starter code from init.js
def extract_starter_code(init_path):
    with open(init_path, 'r') as file:
        starter_code = file.read().strip()
    return starter_code

# Function to extract and format the solutions from soln.js
def extract_solutions(soln_path):
    with open(soln_path, 'r') as file:
        lines = file.readlines()

    solutions = []
    solution_code = []
    solution_type = None

    for line in lines:
        stripped_line = line.strip()
        if stripped_line.startswith("//"):
            if solution_code:
                solutions.append({"type": solution_type if solution_type else "None", "code": "\n".join(solution_code)})
                solution_code = []
            solution_type = stripped_line.split()[1] if len(stripped_line.split()) > 1 else "None"
        else:
            solution_code.append(line)

    if solution_code:
        solutions.append({"type": solution_type if solution_type else "None", "code": "\n".join(solution_code)})

    return solutions

# Function to extract and format the test cases from test.js
def extract_test_cases(test_path):
    with open(test_path, 'r') as file:
        lines = file.readlines()

    test_cases = []
    input_part = None
    output_part = None

    for line in lines:
        stripped_line = line.strip()
        
        # Check for the input part (e.g., // hasCycle({...});)
        if stripped_line.startswith("//") and ");" in stripped_line:
            input_part = stripped_line.split("//")[1].strip()
        
        # Check for the output part (e.g., // -> true)
        if stripped_line.startswith("// ->"):
            output_part = stripped_line.split("->")[1].strip()
        
        # If both input and output are found, store them and reset
        if input_part and output_part:
            test_cases.append({"input": input_part, "output": output_part})
            input_part = None
            output_part = None

    return test_cases

# Function to combine everything into the desired JSON structure
def create_json(problem_directory, problem_name):
    init_path = os.path.join(problem_directory, 'init.js')
    soln_path = os.path.join(problem_directory, 'soln.js')
    test_path = os.path.join(problem_directory, 'test.js')

    # Ensure all required files are present
    if not (os.path.exists(init_path) and os.path.exists(soln_path) and os.path.exists(test_path)):
        print(f"Skipping {problem_name}: Required files are missing.")
        return None

    starter_code = extract_starter_code(init_path)
    solutions = extract_solutions(soln_path)
    tests = extract_test_cases(test_path)

    problem_json = {
        "name": problem_name,
        "description": f"{problem_name} problem description",
        "starterCode": starter_code,
        "solutions": solutions,
        "tests": tests
    }

    output_path = os.path.join(problem_directory, f'{problem_name}.json')
    with open(output_path, 'w') as json_file:
        json.dump(problem_json, json_file, indent=2)

    return output_path

# Example of how to run the script for a specific problem
def process_problem(directory, problem_name):
    return create_json(directory, problem_name)

# Example usage:
# process_problem('/path/to/problem/directory', 'problem_name')
