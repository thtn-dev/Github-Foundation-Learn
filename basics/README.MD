## Config thông tin

### test change remote

```bash
git config --global user.name "User Name"
git config --global user.email "username@gmail.com"
git config --global --list
git config --system --list
git config --global core.editor "code --wait"
```

## Kiểm tra trạng thái repository:

```bash
git status
```

## Thêm file vào staging area

```bash
git add <tên_file>        # Thêm file cụ thể
git add .                 # Thêm tất cả file
git add -A                # Thêm tất cả file mới và đã thay đổi
```

## Commit thay đổi

```bash
git commit -m "commit message"
```

## Commit lên repo github

```bash
git push origin <tên_nhánh>
```

## Kéo thay đổi từ remote:

```bash
git pull
git pull origin <tên_nhánh>
```

## Quản lý branch (nhánh)

### Xem danh sách nhánh

```bash
git branch              # Liệt kê branch local
git branch -a           # Liệt kê tất cả branch (local và remote)
```

### Tạo branch mới

```bash
git branch <tên_nhánh>
git checkout <tên_nhánh>
git checkout -b <tên_nhánh>    # Tạo và chuyển sang branch mới
```

## Kiểm tra lịch sủ

```bash
git log
git log --oneline       # Hiển thị ngắn gọn
```

## Kiểm tra remote

```bash
git remote -v
```

## Lấy thay đổi từ remote mà không merge:

```bash
git fetch
```

## Lưu tạm thời thay đổi:

```bash
git stash               # Lưu thay đổi tạm thời
git stash pop           # Khôi phục thay đổi đã lưu
```

## So sánh thay đổi:

```bash
git diff
```

## Merge

```bash
git merge <tên_nhánh>
```
