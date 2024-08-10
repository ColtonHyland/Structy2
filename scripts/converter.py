import os
import json

def convert_to_json(problem_directory):
    # Paths for the formatted files
    init_path = os.path.join(problem_directory, 'reformatted_init.js')
    soln_path = os.path.join(problem_directory, 'reformatted_soln.js')
    test_path = os.path.join(problem_directory, 'reformatted_test.js')

    # Log the paths being processed
    print(f"Converting to JSON: {problem_directory}")
    print(f"Reading {init_path}, {soln_path}, {test_path}")

    # Check if the files exist
    if os.path.exists(init_path) and os.path.exists(soln_path) and os.path.exists(test_path):
        print(f"Formatted files found. Converting to JSON...")
        
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
                current_test["input"] = line.replace("// INPUT:", "").strip()
            elif line.startswith("// OUTPUT:"):
                inside_input = False
                inside_output = True
                current_test["output"] = line.replace("// OUTPUT:", "").strip()
                tests.append(current_test)
                current_test = {"input": "", "output": ""}

        # Ensure last test case is added if not already
        if current_test["input"] and current_test["output"]:
            tests.append(current_test)

        # Create the JSON object
        description = "Your problem description"  # Update this to capture real descriptions if available
        problem_name = os.path.basename(problem_directory)  # Capture the problem name from the directory

        problem_json = {
            "name": problem_name,  # Include problem name in JSON
            "description": description,
            "starterCode": starter_code,
            "solutions": solutions,
            "tests": tests
        }

        # Output the JSON object
        output_path = os.path.join(problem_directory, f'{problem_name}.json')
        print(f"Writing JSON to: {output_path}")
        with open(output_path, 'w') as json_file:
            json.dump(problem_json, json_file, indent=2)
        print(f"JSON file created successfully: {output_path}")
    else:
        print(f"Formatted files not found in {problem_directory}. Skipping...")

# Example usage
sections_directory = "C:/Users/colto/Projects/Structy2/sections"  # Update with absolute path if needed

for root, dirs, files in os.walk(sections_directory):
    if 'reformatted_init.js' in files and 'reformatted_soln.js' in files and 'reformatted_test.js' in files:
        convert_to_json(root)
    else:
        print(f"No formatted files in {root}. Skipping...")

print("JSON converter script completed.")
