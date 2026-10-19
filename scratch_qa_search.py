import os
import re

src_dir = r"c:\Users\Ved\Desktop\upse zone ai\src"

print("--- SEARCHING HEADINGS AND LABELS COLOR CLASSES ---")
for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.endswith('.jsx') or f.endswith('.js'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as fl:
                content = fl.read()
            
            # Find all headings
            headings = re.findall(r'<h[1-6][^>]*className=([^\n>]+)', content)
            if headings:
                print(f"\nIn {f}:")
                for h in headings:
                    print("  Heading:", h)
            
            # Find uppercase labels
            labels = re.findall(r'className=([^\n>]*uppercase[^\n>]*)', content)
            if labels:
                print(f"  Uppercase labels in {f}: {len(labels)} found")
                for l in labels[:4]:
                    print("    Label:", l)
