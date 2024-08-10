import os
import fnmatch

# List of directories to clean
directories_to_clean = [
    r"C:\Users\colto\Projects\Structy2\sections\array-and-string",
    r"C:\Users\colto\Projects\Structy2\sections\binary-tree",
    r"C:\Users\colto\Projects\Structy2\sections\dynamic-prograpmming",
    r"C:\Users\colto\Projects\Structy2\sections\exhaustive-recursion",
    r"C:\Users\colto\Projects\Structy2\sections\graph",
    r"C:\Users\colto\Projects\Structy2\sections\linked-list",
    r"C:\Users\colto\Projects\Structy2\sections\mixed-recall",
    r"C:\Users\colto\Projects\Structy2\sections\stacks"
]

# Patterns of files to remove
files_to_remove_patterns = [
    'reformatted_*.js',
    '*.json'
]

def clean_directory(directory):
    print(f"Cleaning directory: {directory}")
    for root, dirs, files in os.walk(directory):
        for pattern in files_to_remove_patterns:
            for filename in fnmatch.filter(files, pattern):
                file_path = os.path.join(root, filename)
                print(f"Deleting file: {file_path}")
                os.remove(file_path)

def main():
    for directory in directories_to_clean:
        clean_directory(directory)
    print("Cleanup complete.")

if __name__ == "__main__":
    main()
