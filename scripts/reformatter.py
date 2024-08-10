import os

def reformat_init(input_path, output_path):
    with open(input_path, 'r') as file:
        content = file.read()

    with open(output_path, 'w') as file:
        file.write(content)

def reformat_soln(input_path, output_path):
    with open(input_path, 'r') as file:
        lines = file.readlines()

    solutions = []
    current_solution = []
    solution_type = None
    complexity = []

    for line in lines:
        if 'ITERATIVE' in line.upper():
            if current_solution:
                solutions.append((solution_type, current_solution, complexity))
                current_solution = []
                complexity = []
            solution_type = 'ITERATIVE'
        elif 'RECURSIVE' in line.upper():
            if current_solution:
                solutions.append((solution_type, current_solution, complexity))
                current_solution = []
                complexity = []
            solution_type = 'RECURSIVE'
        elif 'module.exports' in line:
            continue
        elif 'Time:' in line or 'Space:' in line:
            complexity.append(line.strip())
        else:
            current_solution.append(line.strip())

    if current_solution:
        solutions.append((solution_type, current_solution, complexity))

    with open(output_path, 'w') as file:
        for solution_type, solution_code, complexity in solutions:
            file.write(f"// START SOLUTION: {solution_type}\n")
            file.write("\n".join(solution_code))
            file.write("\n" + "\n".join(complexity) + "\n")
            file.write("// END SOLUTION\n\n")

def reformat_test(input_path, output_path):
    with open(input_path, 'r') as file:
        lines = file.readlines()

    test_cases = []
    current_input = ""
    current_output = ""

    for line in lines:
        stripped_line = line.strip()
        if stripped_line.startswith("expect("):  # Look for the expected format for input
            current_input = stripped_line.split("expect(")[1].split(").to")[0].strip()
        elif "->" in stripped_line:  # Look for the expected format for output
            output_part = stripped_line.split("->")[1].strip()
            current_output = output_part
            test_cases.append((current_input, current_output))
            current_input = ""
            current_output = ""
        elif stripped_line.startswith("//"):
            continue  # Skip comment lines

    with open(output_path, 'w') as file:
        for i, (test_input, test_output) in enumerate(test_cases):
            file.write(f"// TEST CASE {i+1}\n")
            file.write("// INPUT:\n")
            file.write(test_input + "\n")
            file.write("// OUTPUT:\n")
            file.write(test_output + "\n")
            file.write("\n")

def reformat_files(problem_directory):
    # Paths
    init_path = os.path.join(problem_directory, 'init.js')
    soln_path = os.path.join(problem_directory, 'soln.js')
    test_path = os.path.join(problem_directory, 'test.js')

    # Output paths
    output_init = os.path.join(problem_directory, 'reformatted_init.js')
    output_soln = os.path.join(problem_directory, 'reformatted_soln.js')
    output_test = os.path.join(problem_directory, 'reformatted_test.js')

    # Log the paths being processed
    print(f"Processing directory: {problem_directory}")
    print(f"Formatting {init_path}, {soln_path}, {test_path}")

    # Check if the files exist
    if os.path.exists(init_path) and os.path.exists(soln_path) and os.path.exists(test_path):
        print(f"Files found. Reformatting...")
        # Run reformatting
        reformat_init(init_path, output_init)
        reformat_soln(soln_path, output_soln)
        reformat_test(test_path, output_test)
        print(f"Reformatting complete.")
    else:
        print(f"Files not found in {problem_directory}. Skipping...")

# Example usage
sections_directory = "C:/Users/colto/Projects/Structy2/sections"  # Update with absolute path if needed

for root, dirs, files in os.walk(sections_directory):
    if 'init.js' in files and 'soln.js' in files and 'test.js' in files:
        reformat_files(root)
    else:
        print(f"No valid files in {root}. Skipping...")

print("Reformatter script completed.")