from PIL import Image
import os

# Folders to compress
folders = [
    r"public\assets",
    r"public\bl-images",
    r"public\images",
]

extensions = ('.jpg', '.jpg', '.jpeg')

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
                    
                    # Resize if very large (max 1280px width)
                    if img.width > 1280:
                        ratio = 1280 / img.width
                        new_size = (1280, int(img.height * ratio))
                        img = img.resize(new_size, Image.LANCZOS)

                    # Convert all to JPEG for maximum compression
                    jpeg_path = os.path.splitext(filepath)[0] + '.jpg'
                    
                    if img.mode in ('RGBA', 'P', 'LA'):
                        img = img.convert('RGB')
                    elif img.mode != 'RGB':
                        img = img.convert('RGB')
                    
                    img.save(jpeg_path, 'JPEG', quality=60, optimize=True)
                    
                    # Remove original PNG if we converted it
                    if filepath.lower().endswith('.jpg') and jpeg_path != filepath:
                        os.remove(filepath)

                    size_after = os.path.getsize(jpeg_path)
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
