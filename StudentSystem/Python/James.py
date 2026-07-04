import os
import shutil

# Set the directory you want to clean up
target_dir = os.path.expanduser("~/Downloads")

# Define the file types and their corresponding folders
TRACKED_EXTENSIONS = {
    'Images': ['.jpg', '.jpeg', '.png', '.gif', '.svg'],
    'Documents': ['.pdf', '.docx', '.txt', '.xlsx', '.pptx'],
    'Archives': ['.zip', '.tar', '.gz', '.rar'],
    'Scripts': ['.py', '.js', '.html', '.css']
}

def organize_folder():
    for filename in os.listdir(target_dir):
        file_path = os.path.join(target_dir, filename)
        
        # Skip if it's a directory
        if os.path.isdir(file_path):
            continue
            
        # Get the file extension
        _, ext = os.path.splitext(filename)
        
        # Find the right folder for the extension
        for folder_name, extensions in TRACKED_EXTENSIONS.items():
            if ext.lower() in extensions:
                subfolder_path = os.path.join(target_dir, folder_name)
                
                # Create the subfolder if it doesn't exist
                os.makedirs(subfolder_path, exist_ok=True)
                
                # Move the file
                shutil.move(file_path, os.path.join(subfolder_path, filename))
                print(f"Moved: {filename} -> {folder_name}/")
                break

if __name__ == "__main__":
    organize_folder()