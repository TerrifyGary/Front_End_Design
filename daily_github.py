import os

os.system("git add ./")
os.system(f"git commit -m \"{input()}\"")
os.system("git push -u origin main")