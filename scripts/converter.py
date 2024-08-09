import os
import json

def convert_to_json(problem_directory):
    # Paths for the formatted files
    init_path = os.path.join(problem_directory, 'reformatted_init.js')
    soln_path = os.path.join(problem_directory, 'reformatted_soln.js')
    test_path = os.path.join(problem_directory, 'reformatted_test.js')

    # Load the starter code
    with open(init_path, 'r') as file:
        starter_code = file.read().strip()

    # Load the solutions
    with open(soln_path, 'r') as file:
        lines = file.readlines()

    solutions = []
    current_solution = {}
    for line in lines:
        line = line.strip()
        if line.startswith("// START SOLUTION:"):
            current_solution = {"type": line.split(":")[1].strip(), "code": ""}
        elif line.startswith("// END SOLUTION"):
            solutions.append(current_solution)
        else:
            current_solution["code"] += line + "\n"
    
    # Load the test cases
    with open(test_path, 'r') as file:
        lines = file.readlines()

    tests = []
    current_test = {"input": "", "output": ""}
    inside_input = False
    inside_output = False

    for line in lines:
        line = line.strip()
        if line.startswith("// INPUT:"):
            inside_input = True
            inside_output = False
        elif line.startswith("// OUTPUT:"):
            inside_input = False
            inside_output = True
        elif inside_input:
            current_test["input"] = line.replace("//", "").strip()
        elif inside_output:
            current_test["output"] = line.replace("//", "").strip()
            if current_test["input"] and current_test["output"]:
                tests.append(current_test)
                current_test = {"input": "", "output": ""}

    # Ensure last test case is added if not already
    if current_test["input"] and current_test["output"]:
        tests.append(current_test)

    # Create the JSON object
    description = "No description available"  # Placeholder for description
    problem_json = {
        "description": description,
        "starterCode": starter_code,
        "solutions": solutions,
        "tests": tests
    }

    # Get the problem name from the directory
    problem_name = os.path.basename(problem_directory)

    # Output the JSON object
    output_path = os.path.join(problem_directory, f'{problem_name}.json')
    with open(output_path, 'w') as json_file:
        json.dump(problem_json, json_file, indent=2)

# Example usage
sections_directory = "sections"

for root, dirs, files in os.walk(sections_directory):
    if 'reformatted_init.js' in files and 'reformatted_soln.js' in files and 'reformatted_test.js' in files:
        convert_to_json(root)
