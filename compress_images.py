from PIL import Image
import os

# Folders to compress
folders = [
    r"public\assets",
    r"public\bl-images",
    r"public\images",
]

extensions = ('.png', '.jpg', '.jpeg')

total_before = 0
total_after = 0

for folder in folders:
    for root, dirs, files in os.walk(folder):
        for file in files:
            if file.lower().endswith(extensions):
                filepath = os.path.join(root, file)
                size_before = os.path.getsize(filepath)
                total_before += size_before

                try:
                    img = Image.open(filepath)
                    
                    # Resize if very large (max 1920px width)
                    if img.width > 1920:
                        ratio = 1920 / img.width
                        new_size = (1920, int(img.height * ratio))
                        img = img.resize(new_size, Image.LANCZOS)

                    # Save JPGs with better quality, keep PNGs as PNG
                    if file.lower().endswith('.jpg') or file.lower().endswith('.jpeg'):
                        if img.mode in ('RGBA', 'P'):
                            img = img.convert('RGB')
                        img.save(filepath, 'JPEG', quality=85, optimize=True)
                        size_after = os.path.getsize(filepath)
                    else:
                        # Keep PNG as PNG, just optimize
                        img.save(filepath, 'PNG', optimize=True)
                        size_after = os.path.getsize(filepath)

                    total_after += size_after
                    saved = size_before - size_after
                    print(f"✅ {file}: {size_before//1024}KB → {size_after//1024}KB (saved {saved//1024}KB)")

                except Exception as e:
                    total_after += size_before
                    print(f"❌ Skipped {file}: {e}")

print(f"\n🎉 Done!")
print(f"Before: {total_before//1024//1024} MB")
print(f"After:  {total_after//1024//1024} MB")
print(f"Saved:  {(total_before-total_after)//1024//1024} MB")
