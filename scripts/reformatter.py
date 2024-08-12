import os
import json
import re

def extract_code(file_path):
    """Extracts and cleans the code from the given file, removing comments."""
    with open(file_path, 'r') as file:
        lines = file.readlines()
    code = ''.join([line for line in lines if not line.strip().startswith('//')])
    return code.strip()

def extract_complexity(content):
    """Extracts the time and space complexity from the content."""
    time_complexity = re.search(r'Time:\s*(O\([^)]+\))', content)
    space_complexity = re.search(r'Space:\s*(O\([^)]+\))', content)
    
    time_complexity = time_complexity.group(1) if time_complexity else "Unknown"
    space_complexity = space_complexity.group(1) if space_complexity else "Unknown"
    
    return time_complexity, space_complexity

def extract_solution(file_path):
    """Extracts the solution from the solution file, handling both single and multiple solutions."""
    with open(file_path, 'r') as file:
        content = file.read()
    
    solutions = []
    
    # Regex to find iterative and recursive solutions
    iterative_match = re.search(r'// ITERATIVE(.*?)(?:// RECURSIVE|module\.exports)', content, re.DOTALL)
    recursive_match = re.search(r'// RECURSIVE(.*?)(module\.exports)', content, re.DOTALL)
    
    if iterative_match:
        time_complexity, space_complexity = extract_complexity(iterative_match.group(1))
        solutions.append({
            "type": "iterative",
            "code": iterative_match.group(1).strip(),
            "complexity": {
                "time": time_complexity,
                "space": space_complexity
            }
        })
    
    if recursive_match:
        time_complexity, space_complexity = extract_complexity(recursive_match.group(1))
        solutions.append({
            "type": "recursive",
            "code": recursive_match.group(1).strip(),
            "complexity": {
                "time": time_complexity,
                "space": space_complexity
            }
        })
    
    # If only one solution is present and not labeled
    if not iterative_match and not recursive_match:
        time_complexity, space_complexity = extract_complexity(content)
        solutions.append({
            "type": "single",
            "code": content.strip(),
            "complexity": {
                "time": time_complexity,
                "space": space_complexity
            }
        })
    
    return solutions

def extract_tests(file_path):
    """Attempts to extract the test cases from the test.js file."""
    # This can be adjusted or skipped depending on the consistency of test.js files
    return []

def convert_to_json(init_path, soln_path, test_path, output_path, question_title):
    """Converts the files to a JSON format and writes the result to output_path."""
    # Extract the necessary information
    starter_code = extract_code(init_path)
    solutions = extract_solution(soln_path)
    tests = extract_tests(test_path)
    
    # Define the JSON structure
    json_data = {
        "title": question_title,
        "starter_code": starter_code,
        "solution": solutions,
        "tests": tests
    }
    
    # Write the JSON to a file
    with open(output_path, 'w') as json_file:
        json.dump(json_data, json_file, indent=4)

def process_directory(base_directory):
    """Processes the entire directory structure containing multiple sections and questions."""
    for root, dirs, files in os.walk(base_directory):
        if 'init.js' in files and 'soln.js' in files and 'test.js' in files:
            question_title = os.path.basename(root)
            init_path = os.path.join(root, 'init.js')
            soln_path = os.path.join(root, 'soln.js')
            test_path = os.path.join(root, 'test.js')
            output_file = os.path.join(root, 'output.json')
            
            # Convert to JSON
            convert_to_json(init_path, soln_path, test_path, output_file, question_title)

# Example usage
base_directory = r'C:\Users\colto\Projects\Structy2\sections'  # Root directory of your sections
process_directory(base_directory)
